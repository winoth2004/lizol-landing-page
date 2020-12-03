export function initPageEvent() {
    if(window && document) {
        postMetrics('metrics', {
            'name'           : 'page_component_load',
            'value'          : (window.t0 ? ((new Date()) - window.t0) : 0)
        })
    }
}

const postMetrics = function(action, parameterObject) {
    if (window && gtag) {
        gtag('event', action, parameterObject);
    } else {
        console.log(`Post metrics arguments ${JSON.stringify(arguments)}`);
    }
};