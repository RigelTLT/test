(()=>{"use strict";const e="https://react-learnwords-2022.herokuapp.com/",t=e=>({Authorization:`Bearer ${e}`,Accept:"application/json","Content-Type":"application/json"});async function n(t){const n=await fetch(`${e}words/${t}`);return await n.json()}class a{get token(){return JSON.parse(localStorage.getItem("token"))}get id(){return JSON.parse(localStorage.getItem("id"))}get name(){return JSON.parse(localStorage.getItem("name"))}get refreshToken(){return JSON.parse(localStorage.getItem("refreshToken"))}}document.addEventListener("DOMContentLoaded",(function(){const s=new URLSearchParams(document.location.search),o=s.get("group"),r=s.get("status");!function(e,t){const n=document.querySelectorAll(".text-group");t&&"studied"===t?(n[0].innerHTML="Изученные слова",document.querySelectorAll(".link__chapter").forEach((e=>e.href+="&status=studied"))):n[0].innerHTML="Сложные слова",e?(n[1].innerHTML=`Раздел ${e}`,document.querySelectorAll(".link__status").forEach((t=>t.href+=`&group=${e}`))):n[1].innerHTML="Раздел 1"}(o,r),async function(s){const o=new a,r=await async function(n,a){return n&&a?async function(n,a){return await fetch(`${e}users/${n}/words`,{method:"GET",headers:t(a)}).then((e=>e.json())).catch((e=>console.log(e.message)))}(n,a):null}(o.id,o.token),c=document.querySelector(".list-textbook"),d=document.createElement("div");if(d.classList.add("container"),c.append(d),o.token&&r)for(let t=0;t<r.length;t++){const a=await n(r[t].wordId);if(s.status===r[t].difficulty&&Number(s.group)===a.group){const t=document.createElement("div");t.classList.add("list-textbook__elem"),t.setAttribute("data-id",`${a.id}`),d.append(t);const n=document.createElement("img");n.classList.add("list-textbook__elem__img"),n.src=`${e}${a.image}`,t.append(n);const o=document.createElement("div");o.classList.add("list-textbook__elem__words-container"),t.append(o);const r=document.createElement("div");r.classList.add("list-textbook__elem__word-container"),o.append(r);const c=document.createElement("div");c.classList.add("word-container__word"),c.innerHTML=`${a.word}`,r.append(c);const i=document.createElement("div");i.classList.add("word-container__transcription"),i.innerHTML=`${a.transcription}`,r.append(i);const l=document.createElementNS("http://www.w3.org/2000/svg","svg"),u=document.createElementNS("http://www.w3.org/2000/svg","use");l.classList.add("audio"),l.setAttribute("data-id",`${a.id}`),u.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","assets/ico/audio-mute.svg#Capa_1"),l.append(u),r.append(l);const m=document.createElement("div");m.classList.add("word-container__wordTranslate"),m.innerHTML=`${a.wordTranslate}`,r.append(m);const p=document.createElement("div");p.classList.add("list-textbook__elem__example"),o.append(p);const _=document.createElement("div");_.classList.add("example__text"),_.innerHTML=`${a.textExample}`,p.append(_);const g=document.createElement("div");g.classList.add("example__textTranslate"),g.innerHTML=`${a.textExampleTranslate}`,p.append(g);const w=document.createElement("div");w.classList.add("list-textbook__elem__meaning"),o.append(w);const L=document.createElement("div");L.classList.add("meaning__text"),L.innerHTML=`${a.textMeaning}`,w.append(L);const h=document.createElement("div");if(h.classList.add("meaning__textTranslate"),h.innerHTML=`${a.textMeaningTranslate}`,w.append(h),"hard"===s.status){const e=document.createElement("button");e.classList.add("cont-button"),e.classList.add("cont-button__remove-to-dictionary"),e.innerText="Убрать из сложных слов",t.append(e)}}}else c.innerText="Авторизируйтесь для просмотра и редактирования"}({group:`${o?Number(o)-1:"0"}`,status:`${r||"hard"}`})}))})();