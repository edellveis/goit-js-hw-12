import{a as i,S as c,i as p}from"./assets/vendor-f144e563.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();i.defaults.baseURL="https://pixabay.com/api/";function f(s){const a={params:{key:"45416284-694200f21ad4df97e05eb7dcc",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}};return i.get("",a)}function u(s){return`
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
    `}let d=new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});const o={form:document.querySelector("form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",async s=>{try{s.preventDefault();const a=o.form.elements.user_select.value;o.gallery.innerHTML="",o.loader.style.display="block";const r=await f(a);r.data.hits.length===0&&p.show({title:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1});const n=r.data.hits.map(u).join("");o.gallery.innerHTML=n,d.refresh()}catch(a){console.log(a)}finally{o.loader.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
