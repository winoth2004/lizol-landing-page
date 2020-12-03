export function initPageEvent() {
    if(window && document) {
        postMetrics('timing_complete', {
            'name'           : 'page_component_load',
            'value'          : (window.t0 ? ((new Date()) - window.t0) : 0),
            'event_category' : 'JS Dependencies'
        });

        var performanceObserver = new PerformanceObserver((performanceEntries, performanceObserver) => {
            performanceEntries.getEntries().forEach(entry => {
                console.log(`Name is ${entry.name} and startTime is ${entry.startTime}`);
            });
        });
        performanceObserver.observe({ type: ['paint'] });
    }
}

const postMetrics = function(action, parameterObject) {
    if (window && window.gtag) {
        window.gtag('event', action, parameterObject);
    } else {
        console.log(`Post metrics arguments ${JSON.stringify(arguments)}`);
    }
};