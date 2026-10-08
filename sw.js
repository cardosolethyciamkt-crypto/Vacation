/* Faz o site abrir sem internet: guarda as páginas, os dados e as fotos no celular.
   Ao mudar o site, troque a VERSAO abaixo para o celular baixar tudo de novo. */
const VERSAO = "viagem-v1";
const ARQUIVOS = [
  "./",
  "index.html",
  "viagem.js",
  "memorias.js",
  "manifest.webmanifest",
  "icones/icone-192.png",
  "icones/icone-512.png",
  "icones/icone-180.png",
  "fotos/miami-praia.jpg",
  "fotos/miami.jpg",
  "fotos/nova-york-neve.jpg",
  "fotos/nova-york.jpg",
  "fotos/orlando-disney.jpg",
  "fotos/orlando-outlets.jpg",
  "fotos/orlando-universal.jpg",
  "memorias/02.jpg",
  "memorias/03.jpg",
  "memorias/04.jpg",
  "memorias/05.jpg",
  "memorias/06.jpg",
  "memorias/07.jpg",
  "memorias/08.jpg",
  "memorias/09.jpg",
  "memorias/10.jpg",
  "memorias/11.jpg",
  "memorias/12.jpg",
  "memorias/13.jpg",
  "memorias/14.jpg",
  "memorias/15.jpg",
  "memorias/16.jpg",
  "memorias/17.jpg",
  "memorias/18.jpg",
  "memorias/19.jpg",
  "memorias/20.jpg",
  "memorias/21.jpg",
  "memorias/22.jpg",
  "memorias/23.jpg",
  "memorias/24.jpg",
  "memorias/25.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Previsão do tempo: sempre da internet (a página guarda a última previsão por conta própria)
  if (url.hostname === "api.open-meteo.com") return;

  // Página e dados do roteiro: tenta a internet primeiro (para pegar atualizações) e usa a cópia guardada se estiver sem sinal
  const ehDados = url.origin === location.origin && (req.mode === "navigate" || /\.(js|html|webmanifest)$/.test(url.pathname) || url.pathname.endsWith("/"));
  if (ehDados) {
    e.respondWith(
      fetch(req).then((r) => {
        if (r.ok) { const copia = r.clone(); caches.open(VERSAO).then((c) => c.put(req, copia)); }
        return r;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("index.html")))
    );
    return;
  }

  // Fotos, ícones e fontes: usa a cópia guardada e só baixa se ainda não tiver
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req).then((resp) => {
      if (resp.ok || resp.type === "opaque") { const copia = resp.clone(); caches.open(VERSAO).then((c) => c.put(req, copia)); }
      return resp;
    }))
  );
});
