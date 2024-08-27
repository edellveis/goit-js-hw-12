import{a as p,S as y,i as c}from"./assets/vendor-f144e563.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();p.defaults.baseURL="https://pixabay.com/api/";function f(o,s){const r={params:{key:"45416284-694200f21ad4df97e05eb7dcc",page:`${s}`,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}};return p.get("",r)}function u(o){return`
        <div class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <span class="info-label">Likes:</span>
                    <span class="info-value">${o.likes}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Views:</span>
                    <span class="info-value">${o.views}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Comments:</span>
                    <span class="info-value">${o.comments}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Downloads:</span>
                    <span class="info-value">${o.downloads}</span>
                </p>
            </div>
        </div>
    `}let h=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});const e={form:document.querySelector("form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let l=1,n="";async function g(o){try{if(o.preventDefault(),n=e.form.elements.user_select.value.trim(),!n){c.show({title:"Please enter a valid search query!",color:"red",position:"topRight",progressBar:!1});return}l=1,e.gallery.innerHTML="",e.loader.style.display="block",e.btnLoadMore.classList.add("is-hidden");const s=await f(n,l);if(s.data.hits.length===0)e.btnLoadMore.classList.add("is-hidden"),c.show({title:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1});else{const r=s.data.hits.map(u).join("");e.gallery.innerHTML=r,h.refresh();const i=Math.ceil(s.data.totalHits/20);l<i&&e.btnLoadMore.classList.remove("is-hidden")}}catch(s){console.log(s)}finally{e.loader.style.display="none"}}async function m(o){try{e.btnLoadMore.classList.add("is-hidden"),e.loader.style.display="block",l++;const s=await f(n,l);if(s.data.hits.length===0)e.btnLoadMore.classList.add("is-hidden"),c.show({title:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",progressBar:!1});else{const r=s.data.hits.map(u).join("");e.gallery.insertAdjacentHTML("beforeend",r),h.refresh();const{height:i}=e.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"});const t=Math.ceil(s.data.totalHits/20);l<t?e.btnLoadMore.classList.remove("is-hidden"):(e.btnLoadMore.classList.add("is-hidden"),c.show({title:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",progressBar:!1}))}}catch(s){console.log(s)}finally{e.loader.style.display="none"}}e.form.addEventListener("submit",g);e.btnLoadMore.addEventListener("click",m);
//# sourceMappingURL=commonHelpers.js.map
