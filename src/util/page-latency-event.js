import { poList, po, poDisconnect } from './performanceObserver';

const cls = {
    value: 0,
};
const lcp = {
    value: 0,
};

export function initPageEvent() {
    if (window && document) {
        postMetrics('page_component_load', (window.t0 ? ((new Date()) - window.t0) : 0));
    }
}

export function initPOEvents() {
    if (window && document) {
        const performance = window.performance;
        if (performance && !!performance.getEntriesByType &&
            !!performance.now && !!performance.mark) {
            if ('PerformanceObserver' in window) {
                poList['paint'] = po('paint', initFirstPaint);
                poList['input'] = po('first-input', initFirstInputDelay);
                poList['l-paint'] = po('largest-contentful-paint', initLargestContentfulPaint);
                poList['cls'] = po('layout-shift', initLayoutShift);
            }
            window.addEventListener('unload', () => disconnectPO());
            initNavigationTiming();
        }
    }
}

const initLayoutShift = (performanceEntries) => {
    const lastEntry = performanceEntries.pop();
    if (lastEntry && !lastEntry.hadRecentInput && lastEntry.value) {
        cls.value += lastEntry.value;
    }
};

const initFirstInputDelay = (performanceEntries) => {
    const lastEntry = performanceEntries.pop();
    if (lastEntry) {
        // Measure the delay to begin processing the first input event
        postMetrics('first_input_delay_vital', lastEntry.processingStart - lastEntry.startTime);
        // Measure the duration of processing the first input event
        postMetrics('first_input_delay', lastEntry.duration);
    }
    // Disconnect this observer since callback is only triggered once
    poDisconnect('input');
    postMetrics('largest_content_paint', lcp.value);
    if (poList['cls'] && typeof poList['cls'].takeRecords === 'function') {
        poList['cls'].takeRecords();
    }
    postMetrics('cumulative_layout', lcp.value);
};

/**
 * First Paint is essentially the paint after which
 * the biggest above-the-fold layout change has happened.
 */
const initFirstPaint = (performanceEntries) => {
    performanceEntries.forEach(entry => {
        if (entry.name === 'first-paint') {
            postMetrics('first_paint', entry.startTime);
        } else if (entry.name === 'first-contentful-paint') {
            postMetrics('first_content_paint', entry.startTime);
            poDisconnect('paint');
        }
    });
};

const initLargestContentfulPaint = (performanceEntries) => {
    const lastEntry = performanceEntries.pop();
    if (lastEntry) {
        lcp.value = lastEntry.renderTime || lastEntry.loadTime;
    }
};

const initNavigationTiming = () => {
    const navigationInfo = window.performance.getEntriesByType('navigation')[0];
    // In Safari version 11.2 Navigation Timing isn't supported yet
    if (!navigationInfo) {
        return;
    }
    const responseStart = navigationInfo.responseStart;
    const responseEnd = navigationInfo.responseEnd;

    postMetrics('fetchTime', responseEnd - navigationInfo.fetchStart);
    // Service worker time plus response time
    postMetrics('workerTime', navigationInfo.workerStart > 0 ? responseEnd - navigationInfo.workerStart : 0);
    // Request plus response time (network only)
    postMetrics('totalTime', responseEnd - navigationInfo.requestStart);
    // Response time only (download)
    postMetrics('downloadTime', responseEnd - responseStart);
    // Time to First Byte (TTFB)
    postMetrics('timeToFirstByte', responseStart - navigationInfo.requestStart);
    // HTTP header size
    postMetrics('headerSize', navigationInfo.transferSize - navigationInfo.encodedBodySize || 0);
    // Measuring DNS lookup time
    postMetrics('dnsLookupTime', navigationInfo.domainLookupEnd - navigationInfo.domainLookupStart);
};

const disconnectPO = () => {
    if (poList['l-paint']) {
        postMetrics('largest_content_paint_final', lcp.value);
        poDisconnect('l-paint');
    }
    if (poList['cls']) {
        if (typeof poList['cls'].takeRecords === 'function') {
            poList['cls'].takeRecords();
        }
        postMetrics('cumulative_layout_final', cls.value);
        poDisconnect('cls');
    }
};

const postMetrics = function(name, value) {
    if (window && window.gtag) {
        window.gtag('event', 'timing_complete', {
            name,
            value,
            'event_category': 'JS Dependencies'
        });
    } else {
        console.log(`Post metrics arguments ${JSON.stringify(arguments)}`);
    }
};