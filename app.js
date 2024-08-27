if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}
let bipEvent = null;
window.addEventListener("beforeinstallprompt", event => {
    bipEvent = event;
    if (bipEvent?.outcome){
        if (bipEvent.outcome === 'accepted') {
            document.getElementById("instalar").classList.add('d-none');        
        }else{
            document.getElementById("instalar").classList.remove('d-none');
        }
    }    
});
function instalar() {
    if (bipEvent) bipEvent.prompt();
}