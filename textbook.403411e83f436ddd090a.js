(()=>{"use strict";var e,t,n,a={472:(e,t,n)=>{n(957)},957:(e,t,n)=>{n.d(t,{A:()=>d,ET:()=>s,FH:()=>a,qz:()=>o});const a="https://react-learnwords-2022.herokuapp.com/",s={words:"words",users:"users",aggregatedWords:"aggregatedWords",statistics:"statistics",settings:"settings",signin:"signin",tokens:"tokens"},d=e=>({Authorization:`Bearer ${e}`,Accept:"application/json","Content-Type":"application/json"});async function o(e){const t=await fetch(`${a}${s.words}?group=${e.group}&page=${e.page}`);return await t.json()}},579:(e,t,n)=>{n.d(t,{k8:()=>s});var a=n(957);async function s(e,t){return await fetch(`${a.FH}${a.ET.users}/${e}/words`,{method:"GET",headers:(0,a.A)(t)}).then((e=>e.json())).catch((e=>console.log(e.message)))}},671:(e,t,n)=>{n.d(t,{cU:()=>a}),n(472);class a{get token(){return JSON.parse(localStorage.getItem("token"))}get id(){return JSON.parse(localStorage.getItem("id"))}get name(){return JSON.parse(localStorage.getItem("name"))}get refreshToken(){return JSON.parse(localStorage.getItem("refreshToken"))}}}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return a[e](n,n.exports,d),n.exports}d.d=(e,t)=>{for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=d(579),t=d(957),n=d(671),"/ebook.html"===window.location.pathname&&function(){const a=new URLSearchParams(document.location.search),s=a.get("page"),d=a.get("group");!function(e,t){document.querySelector(".text-group").innerText=e?`Раздел ${t}`:"Раздел 1",document.querySelector(".number-page").innerText=e||"1";const n=document.querySelector(".back-all"),a=document.querySelector(".back"),s=document.querySelector(".forward"),d=document.querySelector(".forward-all"),o=Number(e);1<o&&o<30&&(n.disabled=!1,a.disabled=!1,s.disabled=!1,d.disabled=!1),o<=1&&(n.disabled=!0,a.disabled=!0,s.disabled=!1,d.disabled=!1),o>=30&&(n.disabled=!1,a.disabled=!1,s.disabled=!0,d.disabled=!0)}(s,d);const o=document.querySelector(".link__audio-call"),r=document.querySelector(".link__sprint");let i;s&&d?(i={page:""+(Number(s)-1),group:""+(Number(d)-1)},o.href=`./audio-call.html?group=${d}&page=${s}`,r.href=`./sprint.html?group=${d}&page=${s}`):(i={page:"0",group:"0"},o.href="./audio-call.html?group=1&page=1",r.href="./sprint.html?group=1&page=1"),async function(a){const s=await(0,t.qz)(a),d=new n.cU,o=await async function(t,n){return t&&n?(0,e.k8)(t,n):null}(d.id,d.token),r=document.querySelector(".list-textbook"),i=document.createElement("div");i.classList.add("container"),r.append(i);for(let e=0;e<s.length;e++){const n=document.createElement("div");n.classList.add("list-textbook__elem"),n.setAttribute("data-id",`${s[e].id}`),i.append(n);const a=document.createElement("img");a.classList.add("list-textbook__elem__img"),a.src=`${t.FH}${s[e].image}`,n.append(a);const r=document.createElement("div");r.classList.add("list-textbook__elem__words-container"),n.append(r);const c=document.createElement("div");c.classList.add("list-textbook__elem__word-container"),r.append(c);const l=document.createElement("div");l.classList.add("word-container__word"),l.innerText=`${s[e].word}`,c.append(l);const u=document.createElement("div");u.classList.add("word-container__transcription"),u.innerText=`${s[e].transcription}`,c.append(u);const p=document.createElementNS("http://www.w3.org/2000/svg","svg"),m=document.createElementNS("http://www.w3.org/2000/svg","use");p.classList.add("audio"),p.setAttribute("data-id",`${s[e].id}`),m.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","assets/ico/audio-mute.svg#Capa_1"),p.append(m),c.append(p);const g=document.createElement("div");g.classList.add("word-container__wordTranslate"),g.innerText=`${s[e].wordTranslate}`,c.append(g);const b=document.createElement("div");b.classList.add("list-textbook__elem__example"),r.append(b);const _=document.createElement("div");_.classList.add("example__text"),_.innerText=`${s[e].textExample}`,b.append(_);const x=document.createElement("div");x.classList.add("example__textTranslate"),x.innerText=`${s[e].textExampleTranslate}`,b.append(x);const w=document.createElement("div");w.classList.add("list-textbook__elem__meaning"),r.append(w);const h=document.createElement("div");h.classList.add("meaning__text"),h.innerText=`${s[e].textMeaning}`,w.append(h);const L=document.createElement("div");if(L.classList.add("meaning__textTranslate"),L.innerText=`${s[e].textMeaningTranslate}`,w.append(L),d.id){const t=document.createElement("div");t.classList.add("list-textbook__cont-button"),n.append(t);const a=document.createElement("button");a.classList.add("cont-button"),a.classList.add("cont-button__add"),a.innerText="Добавить в сложные слова",t.append(a);const d=document.createElement("button");d.classList.add("cont-button"),d.classList.add("cont-button__remove"),d.innerText="Убрать из сложных слов",d.disabled=!0,t.append(d);const r=document.createElement("button");if(r.classList.add("cont-button"),r.classList.add("cont-button__studied"),r.innerText="Изученно",t.append(r),!o)return;for(let t=0;t<o.length;t++)o[t].wordId===s[e].id&&("hard"===o[t].difficulty&&(n.classList.add("hard"),a.disabled=!0,d.disabled=!1),"studied"===o[t].difficulty&&(n.classList.add("studied"),a.disabled=!0,d.disabled=!0,r.disabled=!0))}}!function(){const e=document.querySelectorAll(".list-textbook__elem");let t=0;for(let n=0;n<e.length;n++)(e[n].classList.contains("hard")||e[n].classList.contains("studied"))&&t++;const n=document.querySelector(".main"),a=document.querySelector(".number-page");t==e.length?(n.classList.add("studied-page"),a.classList.add("pagination-studied")):a.classList.contains("pagination-studied")&&n.classList.contains("studied-page")&&(n.classList.remove("studied-page"),a.classList.remove("pagination-studied"))}()}(i)}()})();