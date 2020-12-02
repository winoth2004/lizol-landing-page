export function initPageEvent() {
    if(document) {
        console.log(`DOM Content loaded time is ${(new Date()) - window.t0}`);
    }
}