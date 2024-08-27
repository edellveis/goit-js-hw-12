import{a as p,S as h,i as d}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();p.defaults.baseURL="https://pixabay.com/api/";function f(a,t){const r={params:{key:"45416284-694200f21ad4df97e05eb7dcc",page:`${t}`,per_page:15,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}};return p.get("",r)}function u(a){return`
        <div class="gallery-item">
            <a class="gallery-link" href="${a.largeImageURL}">
                <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <span class="info-label">Likes:</span>
                    <span class="info-value">${a.likes}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Views:</span>
                    <span class="info-value">${a.views}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Comments:</span>
                    <span class="info-value">${a.comments}</span>
                </p>
                <p class="info-item">
                    <span class="info-label">Downloads:</span>
                    <span class="info-value">${a.downloads}</span>
                </p>
            </div>
        </div>
    `}let y=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});const e={form:document.querySelector("form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let n=1,l="";async function m(a){try{if(a.preventDefault(),l=e.form.elements.user_select.value.trim(),!l){d.show({title:"Please enter a valid search query!",color:"red",position:"topRight",progressBar:!1});return}n=1,e.gallery.innerHTML="",e.loader.style.display="block",e.btnLoadMore.classList.add("is-hidden");const t=await f(l,n);if(t.data.hits.length===0)e.btnLoadMore.classList.add("is-hidden"),d.show({title:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1});else{const r=t.data.hits.map(u).join("");e.gallery.innerHTML=r,y.refresh();const i=Math.ceil(t.data.totalHits/20);n<i&&e.btnLoadMore.classList.remove("is-hidden")}}catch(t){console.log(t)}finally{e.loader.style.display="none"}}async function g(a){try{e.btnLoadMore.classList.add("is-hidden"),e.loader.style.display="block",n++;const t=await f(l,n);if(t.data.hits.length===0)e.btnLoadMore.classList.add("is-hidden");else{const r=t.data.hits.map(u).join("");e.gallery.insertAdjacentHTML("beforeend",r),y.refresh();const{height:i}=e.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"});const s=Math.ceil(t.data.totalHits/20);n<s?e.btnLoadMore.classList.remove("is-hidden"):(e.btnLoadMore.classList.add("is-hidden"),d.show({title:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",progressBar:!1}))}}catch(t){console.log(t)}finally{e.loader.style.display="none"}}e.form.addEventListener("submit",m);e.btnLoadMore.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
