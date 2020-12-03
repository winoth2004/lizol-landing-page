export const poList = {};

/**
 * PerformanceObserver subscribes to performance events as they happen
 * and respond to them asynchronously.
 */
export const po = (eventType, callback) => {
    try {
        const perfObserver = new PerformanceObserver(entryList => {
            callback(entryList.getEntries());
        });

        perfObserver.observe({ type: eventType, buffered: true });
        return perfObserver;
    } catch (e) {
        console.error("PerformanceObserver error:", e);
    }
    return null;
};

export const poDisconnect = (observer) => {
    if (poList[observer]) {
        poList[observer].disconnect();
    }
    delete poList[observer];
}