(()=>{"use strict";var e,t,n,a={472:(e,t,n)=>{n(957)},957:(e,t,n)=>{n.d(t,{A:()=>d,ET:()=>s,FH:()=>a,nn:()=>c,qz:()=>o});const a="https://react-learnwords-2022.herokuapp.com/",s={words:"words",users:"users",aggregatedWords:"aggregatedWords",statistics:"statistics",settings:"settings",signin:"signin",tokens:"tokens"},d=e=>({Authorization:`Bearer ${e}`,Accept:"application/json","Content-Type":"application/json"});async function o(e){const t=await fetch(`${a}${s.words}?group=${e.group}&page=${e.page}`);return await t.json()}async function c(e){const t=await fetch(`${a}${s.words}/${e}`);return await t.json()}},579:(e,t,n)=>{n.d(t,{k8:()=>s});var a=n(957);async function s(e,t){return await fetch(`${a.FH}${a.ET.users}/${e}/words`,{method:"GET",headers:(0,a.A)(t)}).then((e=>e.json())).catch((e=>console.log(e.message)))}},671:(e,t,n)=>{n.d(t,{cU:()=>a}),n(472);class a{get token(){return JSON.parse(localStorage.getItem("token"))}get id(){return JSON.parse(localStorage.getItem("id"))}get name(){return JSON.parse(localStorage.getItem("name"))}get refreshToken(){return JSON.parse(localStorage.getItem("refreshToken"))}}},129:(e,t,n)=>{n.d(t,{rx:()=>o});var a=n(579),s=n(957),d=n(671);async function o(e,t){return e&&t?(0,a.k8)(e,t):null}!function(){const e=new URLSearchParams(document.location.search),t=e.get("page"),n=e.get("group");!function(e,t){document.querySelector(".text-group").innerText=e?`Раздел ${t}`:"Раздел 1",document.querySelector(".number-page").innerText=e||"1";const n=document.querySelector(".back-all"),a=document.querySelector(".back"),s=document.querySelector(".forward"),d=document.querySelector(".forward-all"),o=Number(e);1<o&&o<30&&(n.disabled=!1,a.disabled=!1,s.disabled=!1,d.disabled=!1),o<=1&&(n.disabled=!0,a.disabled=!0,s.disabled=!1,d.disabled=!1),o>=30&&(n.disabled=!1,a.disabled=!1,s.disabled=!0,d.disabled=!0)}(t,n);const a=document.querySelector(".link__audio-call"),c=document.querySelector(".link__sprint");let r;t&&n?(r={page:""+(Number(t)-1),group:""+(Number(n)-1)},a.href=`./audio-call.html?group=${n}&page=${t}`,c.href=`./sprint.html?group=${n}&page=${t}`):(r={page:"0",group:"0"},a.href="./audio-call.html?group=1&page=1",c.href="./sprint.html?group=1&page=1"),async function(e){const t=await(0,s.qz)(e),n=new d.cU,a=await o(n.id,n.token),c=document.querySelector(".list-textbook"),r=document.createElement("div");r.classList.add("container"),c.append(r);for(let e=0;e<t.length;e++){const d=document.createElement("div");d.classList.add("list-textbook__elem"),d.setAttribute("data-id",`${t[e].id}`),r.append(d);const o=document.createElement("img");o.classList.add("list-textbook__elem__img"),o.src=`${s.FH}${t[e].image}`,d.append(o);const c=document.createElement("div");c.classList.add("list-textbook__elem__words-container"),d.append(c);const i=document.createElement("div");i.classList.add("list-textbook__elem__word-container"),c.append(i);const l=document.createElement("div");l.classList.add("word-container__word"),l.innerText=`${t[e].word}`,i.append(l);const u=document.createElement("div");u.classList.add("word-container__transcription"),u.innerText=`${t[e].transcription}`,i.append(u);const m=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=document.createElementNS("http://www.w3.org/2000/svg","use");m.classList.add("audio"),m.setAttribute("data-id",`${t[e].id}`),p.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","assets/ico/audio-mute.svg#Capa_1"),m.append(p),i.append(m);const g=document.createElement("div");g.classList.add("word-container__wordTranslate"),g.innerText=`${t[e].wordTranslate}`,i.append(g);const _=document.createElement("div");_.classList.add("list-textbook__elem__example"),c.append(_);const x=document.createElement("div");x.classList.add("example__text"),x.innerText=`${t[e].textExample}`,_.append(x);const w=document.createElement("div");w.classList.add("example__textTranslate"),w.innerText=`${t[e].textExampleTranslate}`,_.append(w);const b=document.createElement("div");b.classList.add("list-textbook__elem__meaning"),c.append(b);const L=document.createElement("div");L.classList.add("meaning__text"),L.innerText=`${t[e].textMeaning}`,b.append(L);const h=document.createElement("div");if(h.classList.add("meaning__textTranslate"),h.innerText=`${t[e].textMeaningTranslate}`,b.append(h),n.id){const n=document.createElement("div");n.classList.add("list-textbook__cont-button"),d.append(n);const s=document.createElement("button");s.classList.add("cont-button"),s.classList.add("cont-button__add"),s.innerText="Добавить в сложные слова",n.append(s);const o=document.createElement("button");o.classList.add("cont-button"),o.classList.add("cont-button__remove"),o.innerText="Убрать из сложных слов",o.disabled=!0,n.append(o);const c=document.createElement("button");if(c.classList.add("cont-button"),c.classList.add("cont-button__studied"),c.innerText="Изученно",n.append(c),!a)return;for(let n=0;n<a.length;n++)a[n].wordId===t[e].id&&("hard"===a[n].difficulty&&(d.classList.add("hard"),s.disabled=!0,o.disabled=!1),"studied"===a[n].difficulty&&(d.classList.add("studied"),s.disabled=!0,o.disabled=!0,c.disabled=!0))}}!function(){const e=document.querySelectorAll(".list-textbook__elem");let t=0;for(let n=0;n<e.length;n++)(e[n].classList.contains("hard")||e[n].classList.contains("studied"))&&t++;const n=document.querySelector(".main"),a=document.querySelector(".number-page");t==e.length?(n.classList.add("studied-page"),a.classList.add("pagination-studied")):a.classList.contains("pagination-studied")&&n.classList.contains("studied-page")&&(n.classList.remove("studied-page"),a.classList.remove("pagination-studied"))}()}(r)}()}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return a[e](n,n.exports,d),n.exports}d.d=(e,t)=>{for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=d(957),d(579),t=d(671),n=d(129),function(){const a=new URLSearchParams(document.location.search),s=a.get("group"),d=a.get("status");!function(e,t){const n=document.querySelectorAll(".text-group");t&&"studied"===t?(n[0].innerHTML="Изученные слова",document.querySelectorAll(".link__chapter").forEach((e=>e.href+="&status=studied"))):n[0].innerHTML="Сложные слова",e?(n[1].innerHTML=`Раздел ${e}`,document.querySelectorAll(".link__status").forEach((t=>t.href+=`&group=${e}`))):n[1].innerHTML="Раздел 1"}(s,d),async function(a){const s=new t.cU,d=await(0,n.rx)(s.id,s.token),o=document.querySelector(".list-textbook"),c=document.createElement("div");if(c.classList.add("container"),o.append(c),s.token&&d)for(let t=0;t<d.length;t++){const n=await(0,e.nn)(d[t].wordId);if(a.status===d[t].difficulty&&Number(a.group)===n.group){const t=document.createElement("div");t.classList.add("list-textbook__elem"),t.setAttribute("data-id",`${n.id}`),c.append(t);const s=document.createElement("img");s.classList.add("list-textbook__elem__img"),s.src=`${e.FH}${n.image}`,t.append(s);const d=document.createElement("div");d.classList.add("list-textbook__elem__words-container"),t.append(d);const o=document.createElement("div");o.classList.add("list-textbook__elem__word-container"),d.append(o);const r=document.createElement("div");r.classList.add("word-container__word"),r.innerHTML=`${n.word}`,o.append(r);const i=document.createElement("div");i.classList.add("word-container__transcription"),i.innerHTML=`${n.transcription}`,o.append(i);const l=document.createElementNS("http://www.w3.org/2000/svg","svg"),u=document.createElementNS("http://www.w3.org/2000/svg","use");l.classList.add("audio"),l.setAttribute("data-id",`${n.id}`),u.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","assets/ico/audio-mute.svg#Capa_1"),l.append(u),o.append(l);const m=document.createElement("div");m.classList.add("word-container__wordTranslate"),m.innerHTML=`${n.wordTranslate}`,o.append(m);const p=document.createElement("div");p.classList.add("list-textbook__elem__example"),d.append(p);const g=document.createElement("div");g.classList.add("example__text"),g.innerHTML=`${n.textExample}`,p.append(g);const _=document.createElement("div");_.classList.add("example__textTranslate"),_.innerHTML=`${n.textExampleTranslate}`,p.append(_);const x=document.createElement("div");x.classList.add("list-textbook__elem__meaning"),d.append(x);const w=document.createElement("div");w.classList.add("meaning__text"),w.innerHTML=`${n.textMeaning}`,x.append(w);const b=document.createElement("div");if(b.classList.add("meaning__textTranslate"),b.innerHTML=`${n.textMeaningTranslate}`,x.append(b),"hard"===a.status){const e=document.createElement("button");e.classList.add("cont-button"),e.classList.add("cont-button__remove-to-dictionary"),e.innerText="Убрать из сложных слов",t.append(e)}}}else o.innerText="Авторизируйтесь для просмотра и редактирования"}({group:`${s?Number(s)-1:"0"}`,status:`${d||"hard"}`})}()})();