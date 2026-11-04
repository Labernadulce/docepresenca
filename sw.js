// Service worker mínimo — existe só pra cumprir o critério de "PWA instalável"
// que navegadores modernos (inclusive o novo "Abrir como app web" do iOS) exigem
// pra confiar no manifest/ícones em vez de cair num ícone genérico de fallback.
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
