/* Curated service picker. Brand logos from Simple Icons v16 CDN. */
(()=>{'use strict';
const SERVICES=[
 {name:'Spotify',slug:'spotify',color:'#1DB954',category:'Muzyka'},
 {name:'Netflix',slug:'netflix',color:'#E50914',category:'Rozrywka'},
 {name:'YouTube Premium',slug:'youtube',color:'#FF0033',category:'Rozrywka'},
 {name:'Disney+',slug:'disneyplus',color:'#12368A',category:'Rozrywka'},
 {name:'Prime Video',slug:'primevideo',color:'#1196D9',category:'Rozrywka'},
 {name:'Max',slug:'hbo',color:'#653BB6',category:'Rozrywka'},
 {name:'Apple Music',slug:'applemusic',color:'#FA243C',category:'Muzyka'},
 {name:'Apple TV+',slug:'appletv',color:'#22252D',category:'Rozrywka'},
 {name:'ChatGPT',slug:'openai',color:'#0B887D',category:'Praca'},
 {name:'Microsoft 365',slug:'microsoft365',color:'#EA3E25',category:'Praca'},
 {name:'Google One',slug:'googleone',color:'#4285F4',category:'Praca'},
 {name:'Canva Pro',slug:'canva',color:'#00C4CC',category:'Praca'},
 {name:'Xbox Game Pass',slug:'xbox',color:'#107C10',category:'Rozrywka'},
 {name:'PlayStation Plus',slug:'playstation',color:'#236BD1',category:'Rozrywka'}
];
const byName=n=>SERVICES.find(s=>s.name.toLocaleLowerCase('pl')===n.trim().toLocaleLowerCase('pl'));
const imgUrl=s=>'https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/'+s.slug+'.svg';
const nameInput=document.getElementById('name'),category=document.getElementById('category'),modal=document.getElementById('modal'),form=document.getElementById('form');
const holder=document.createElement('div');holder.className='catalog-picker';holder.innerHTML='<label class="catalog-heading">Dodaj subskrypcję</label><div class="catalog-modes"><button type="button" class="catalog-mode" data-mode="catalog" aria-pressed="true">📚 Wybierz z katalogu</button><button type="button" class="catalog-mode" data-mode="custom" aria-pressed="false">✍️ Stwórz własną</button></div><div class="catalog-find"><label for="catalog-service">Popularne usługi</label><select id="catalog-service"><option value="">Wybierz usługę...</option></select></div><div class="catalog-preview" aria-live="polite"><div class="catalog-preview-logo">✦</div><div><b id="catalog-preview-name">Wybierz usługę</b><p id="catalog-preview-help">Nazwa i kategoria uzupełnią się automatycznie.</p></div></div>';
const firstField=form.querySelector('.field');form.insertBefore(holder,firstField);const select=document.getElementById('catalog-service');for(const service of SERVICES){const opt=document.createElement('option');opt.value=service.name;opt.textContent=service.name;select.append(opt)}
const modeButtons=[...holder.querySelectorAll('.catalog-mode')],find=holder.querySelector('.catalog-find'),preview=holder.querySelector('.catalog-preview'),previewLogo=holder.querySelector('.catalog-preview-logo'),previewName=document.getElementById('catalog-preview-name'),previewHelp=document.getElementById('catalog-preview-help');let mode='catalog';
function makeBrand(el,s){el.replaceChildren();el.style.background=s?.color||'#5D687A';if(!s){el.textContent='✦';return}const img=document.createElement('img');img.src=imgUrl(s);img.alt='Logo '+s.name;img.loading='lazy';img.decoding='async';img.onerror=()=>{img.remove();el.textContent=s.name.slice(0,1)};el.append(img)}
function drawPreview(){const s=byName(nameInput.value);previewName.textContent=s?s.name:(mode==='custom'?(nameInput.value.trim()||'Własna subskrypcja'):'Wybierz usługę');previewHelp.textContent=s?'Logo i kategoria z katalogu':mode==='custom'?'Uzupełnij kwotę, rozliczenie i datę płatności.':'Nazwa i kategoria uzupełnią się automatycznie.';makeBrand(previewLogo,s)}
function setMode(next){mode=next;modeButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===next)));find.hidden=next==='custom';preview.classList.toggle('custom',next==='custom');if(next==='custom')select.value='';drawPreview()}
modeButtons.forEach(b=>b.addEventListener('click',()=>{setMode(b.dataset.mode);if(mode==='custom')nameInput.focus()}));
select.addEventListener('change',()=>{const s=SERVICES.find(x=>x.name===select.value);if(!s)return;nameInput.value=s.name;category.value=s.category;drawPreview()});
nameInput.addEventListener('input',()=>{const s=byName(nameInput.value);if(mode==='catalog')select.value=s?.name||'';drawPreview()});
const allRows=document.getElementById('subscriptions');function decorateRows(){for(const row of allRows.querySelectorAll('.sub')){const s=byName(row.querySelector('.sub-name')?.textContent||'');const box=row.querySelector('.logo');if(s&&box&&!box.querySelector('img')){makeBrand(box,s);box.classList.add('brand-logo')}}}
new MutationObserver(decorateRows).observe(allRows,{childList:true});decorateRows();
const nextPayment=document.getElementById('next-payment');function decorateNext(){const s=byName(nextPayment.querySelector('.upcoming-info b')?.textContent||'');const dateBox=nextPayment.querySelector('.datebox');if(s&&dateBox){nextPayment.querySelector('.upcoming')?.classList.add('has-brand');if(!nextPayment.querySelector('.next-brand')){const logo=document.createElement('span');logo.className='next-brand';makeBrand(logo,s);dateBox.after(logo)}}}new MutationObserver(decorateNext).observe(nextPayment,{childList:true});decorateNext();
new MutationObserver(()=>{if(!modal.classList.contains('show'))return;const s=byName(nameInput.value);setMode(s||!nameInput.value.trim()?'catalog':'custom');select.value=s?.name||'';drawPreview()}).observe(modal,{attributes:true,attributeFilter:['class']});
})();
