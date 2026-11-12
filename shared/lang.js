/* Narna games: shared language picker (EN · PT · ES · ไทย) */
(function(){
  var L=['en','pt','es','th'],N={en:'EN',pt:'PT',es:'ES',th:'ไทย'};
  var q=new URLSearchParams(location.search).get('lang'),lang=null;
  if(L.indexOf(q)>-1)lang=q;
  if(!lang){try{var s=localStorage.getItem('narnaLang');if(L.indexOf(s)>-1)lang=s}catch(e){}}
  if(!lang){var n=(navigator.language||'en').slice(0,2).toLowerCase();lang=L.indexOf(n)>-1?n:'en'}
  window.LANG=lang;
  window.T=function(k,v){
    var d=window.I18N||{},s=(d[lang]&&d[lang][k]!==undefined)?d[lang][k]:(d.en&&d.en[k]!==undefined?d.en[k]:k);
    if(v&&typeof s==='string')for(var x in v)s=s.split('{'+x+'}').join(v[x]);
    return s;
  };
  function apply(){
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(function(e){e.innerHTML=T(e.getAttribute('data-i18n'))});
    document.querySelectorAll('.langpick button').forEach(function(b){b.classList.toggle('on',b.dataset.l===lang)});
    if(typeof window.onLang==='function')window.onLang(lang);
  }
  window.applyLang=apply;
  function picker(){
    var css=document.createElement('style');
    css.textContent='.langpick{display:flex;gap:4px;justify-content:center;margin:0 0 12px}.langpick.fixed{position:fixed;top:8px;right:8px;z-index:9999;margin:0}'+
      '.langpick button{font:600 13px Fredoka,ui-rounded,system-ui,sans-serif;padding:5px 9px;border-radius:12px;border:2px solid #A9D3F2;background:#fff;color:#3B6EA8;cursor:pointer;box-shadow:none;width:auto;margin:0}'+
      '.langpick button.on{background:#3B6EA8;color:#fff;border-color:#3B6EA8}';
    document.head.appendChild(css);
    var boxes=document.querySelectorAll('.langbox');
    if(!boxes.length){var f=document.createElement('div');f.className='langbox fixed';document.body.appendChild(f);boxes=[f]}
    Array.prototype.forEach.call(boxes,function(box){
      var w=document.createElement('div');w.className='langpick'+(box.classList.contains('fixed')?' fixed':'');
      L.forEach(function(l){var b=document.createElement('button');b.type='button';b.dataset.l=l;b.textContent=N[l];
        b.onclick=function(){lang=window.LANG=l;try{localStorage.setItem('narnaLang',l)}catch(e){}apply()};w.appendChild(b)});
      box.appendChild(w);
    });
  }
  function init(){picker();apply()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
