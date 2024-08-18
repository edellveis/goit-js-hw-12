import{S as i,i as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function f(s){return fetch(`https://pixabay.com/api/?key=45416284-694200f21ad4df97e05eb7dcc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(t.ok){if(s==="")return}else throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)})}function p(s){return`
        <div class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
                <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <span class="info-label">Likes:</span>
                    <span class="info-value">${s.likes}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Views:</span>
                    <span class="info-value">${s.views}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Comments:</span>
                    <span class="info-value">${s.comments}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Downloads:</span>
                    <span class="info-value">${s.downloads}</span>
                </p>
            </div>
        </div>
    `}let u=new i(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});const a={form:document.querySelector("form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.form.addEventListener("submit",s=>{s.preventDefault();const t=a.form.elements.user_select.value;a.gallery.innerHTML="",a.loader.style.display="block",f(t).then(r=>{const l=r.hits.map(p).join("");r.hits.length===0?c.show({title:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1}):(a.gallery.innerHTML=l,u.refresh())}).catch(r=>{console.error(r)}).finally(()=>{a.loader.style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
