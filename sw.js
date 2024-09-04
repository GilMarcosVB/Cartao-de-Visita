const catchName = "cartao-pessoal";

const filesToCache = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./img/dog.jpg",
  "./script/main.js",
];

// Instalar o Service Woker e armaznar em cache
self.addEventListener('instal',event =>{
    event.waiUntil(
        caches.open(cacheName).then(cache =>{
            return cache.addAll(filesToCache);
        })
    )
})


//Utuliza os arquivos do cache quando estiver offline 
self.addEventListener('fetch', Event => {
    Event.respondwitch(
        caches.match( Event.request).then(response => {
           return response || fetch(Event.request);
        })
    )
})