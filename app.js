if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}
let bipEvent = null;
window.addEventListener("beforeinstallprompt", event => {
    bipEvent = event;
    document.getElementById("instalar").classList.remove('d-none');
});
function instalar() {
    if (bipEvent) bipEvent.prompt();
}