import{S as i}from"./assets/vendor-338edac8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function c(t){return fetch(`https://pixabay.com/api/?key=45416284-694200f21ad4df97e05eb7dcc&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>{console.log(s)})}function f(t){return`
        <div class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <span class="info-label">Likes:</span>
                    <span class="info-value">${t.likes}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Views:</span>
                    <span class="info-value">${t.views}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Comments:</span>
                    <span class="info-value">${t.comments}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Downloads:</span>
                    <span class="info-value">${t.downloads}</span>
                </p>
            </div>
        </div>
    `}const r={form:document.querySelector("form"),gallery:document.querySelector(".gallery")};r.form.addEventListener("submit",t=>{t.preventDefault();const s=r.form.elements.user_select.value;c(s).then(n=>n.hits.map(f).join("")).then(n=>{r.gallery.innerHTML=n}).catch(n=>{console.log(n)})});new i(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});
//# sourceMappingURL=commonHelpers.js.map
