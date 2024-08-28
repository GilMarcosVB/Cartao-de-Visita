
// Executa apos carregar toda a pagina
window.onload = () => {
    // Ativa o modo estrito do javascript
    'use strict';

    // Verifica se o navegador suporta o Service Worker
    if('serviceWorker' in navigator){
        navigator.serviceWorker
            .register('./sw.js');   
    }
}