export function initPageEvent() {
    if(window && document) {
        postMetrics('timing_complete', {
            'name'           : 'page_component_load',
            'value'          : (window.t0 ? ((new Date()) - window.t0) : 0),
            'event_category' : 'JS Dependencies'
        })
    }
}

const postMetrics = (function() {
    if (window && gtag) {
        return ((action, parameterObject) => {
            gtag('event', action, parameterObject);
        });
    } else {
        return (() => {
            console.log(`Post metrics arguments ${JSON.stringify(arguments)}`);
        });
    }
})();