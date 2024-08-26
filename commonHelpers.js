import{a as d,S as m,i as p}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();d.defaults.baseURL="https://pixabay.com/api/";function f(o,t){const r={params:{key:"45416284-694200f21ad4df97e05eb7dcc",page:`${t}`,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}};return d.get("",r)}function u(o){return`
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
    `}let y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});const s={form:document.querySelector("form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let n=1,c="";async function g(o){try{o.preventDefault(),c=s.form.elements.user_select.value,n=1,s.gallery.innerHTML="",s.loader.style.display="block";const t=await f(c,n);t.data.hits.length===0&&p.show({title:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",progressBar:!1});const r=t.data.hits.map(u).join("");s.gallery.innerHTML=r,y.refresh(),s.btnLoadMore.classList.remove("is-hidden")}catch(t){console.log(t)}finally{s.loader.style.display="none"}}async function h(o){try{s.btnLoadMore.classList.add("is-hidden"),s.loader.style.display="block",n++;const t=await f(c,n),r=t.data.hits.map(u).join("");s.gallery.insertAdjacentHTML("beforeend",r),y.refresh(),s.btnLoadMore.classList.remove("is-hidden");const{height:l}=s.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"});const e=Math.ceil(t.data.totalHits/20);n>=e&&(s.btnLoadMore.classList.add("is-hidden"),p.show({title:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",progressBar:!1}))}catch(t){console.log(t)}finally{s.loader.style.display="none"}}s.form.addEventListener("submit",g);s.btnLoadMore.addEventListener("click",h);
//# sourceMappingURL=commonHelpers.js.map
