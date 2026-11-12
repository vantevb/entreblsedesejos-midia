/* Narna quiz engine: questions, random tie-break, result card image, 4 languages (uses lang.js) */
(function(){
  var C={
    en:{youre:"You're {n}!",save:'Save result image 📸',again:'Play again',copy:'Copy result',copied:'Copied! 🤍',saved:'Saved! Post it in your story 🤍',more:'More games →',foot:'Fan-made for Narnas &amp; THUR by @entreblsedesejos · not official',cardFoot:'Which character are you?'},
    pt:{youre:'Você é {n}!',save:'Salvar imagem do resultado 📸',again:'Jogar de novo',copy:'Copiar resultado',copied:'Copiado! 🤍',saved:'Salvo! Posta nos stories 🤍',more:'Mais jogos →',foot:'Feito por fã para Narnas &amp; THUR · @entreblsedesejos · não oficial',cardFoot:'Qual personagem é você?'},
    es:{youre:'¡Eres {n}!',save:'Guardar imagen del resultado 📸',again:'Jugar otra vez',copy:'Copiar resultado',copied:'¡Copiado! 🤍',saved:'¡Guardado! Súbelo a tus historias 🤍',more:'Más juegos →',foot:'Hecho por fans para Narnas y THUR · @entreblsedesejos · no oficial',cardFoot:'¿Qué personaje eres?'},
    th:{youre:'คุณคือ {n}!',save:'บันทึกรูปผลลัพธ์ 📸',again:'เล่นอีกครั้ง',copy:'คัดลอกผลลัพธ์',copied:'คัดลอกแล้ว! 🤍',saved:'บันทึกแล้ว! ลงสตอรี่ได้เลย 🤍',more:'เกมอื่น ๆ →',foot:'ทำโดยแฟนเพื่อ Narna &amp; THUR · @entreblsedesejos · ไม่เป็นทางการ',cardFoot:'คุณคือตัวละครไหน?'}};
  Object.keys(C).forEach(function(l){window.I18N[l]=Object.assign({},C[l],window.I18N[l]||{})});
  var Q=window.QUIZ, box=document.getElementById('box'), i=0, sc={}, res=null;
  function reset(){i=0;res=null;sc={};Q.keys.forEach(function(k){sc[k]=0})}
  function esc(s){return String(s)}
  function show(){
    if(res)return result();
    var qs=T('q'); if(i>=qs.length)return finish();
    var q=qs[i];
    box.innerHTML='<div class="prog"><i style="width:'+(i/qs.length*100)+'%"></i></div><p class="q">'+(i+1)+'. '+q[0]+'</p>'+
      q[1].map(function(o){return '<button class="opt" data-k="'+o[0]+'">'+o[1]+'</button>'}).join('');
    box.querySelectorAll('.opt').forEach(function(b){b.onclick=function(){sc[b.dataset.k]++;i++;show()}});
  }
  function finish(){
    var max=Math.max.apply(null,Q.keys.map(function(k){return sc[k]}));
    var top=Q.keys.filter(function(k){return sc[k]===max});
    res=top[Math.floor(Math.random()*top.length)];
    result();
  }
  function result(){
    var r=T('r')[res];
    box.innerHTML='<div class="big">'+Q.emoji[res]+'</div><div class="rn">'+T('youre',{n:r.n})+'</div><div class="by">'+r.by+'</div><p class="rd">'+r.d+'</p>'+
      '<div class="row"><button id="save">'+T('save')+'</button></div>'+
      '<div class="row"><button class="alt" id="again">'+T('again')+'</button><button class="alt" id="copy">'+T('copy')+'</button></div><p class="msg" id="msg"></p>';
    document.getElementById('again').onclick=function(){reset();show()};
    document.getElementById('copy').onclick=function(e){copy(T('share',{n:r.n,e:Q.emoji[res]})+' '+location.href.split('?')[0]);e.target.textContent=T('copied')};
    document.getElementById('save').onclick=function(){saveCard(r)};
  }
  function copy(t){
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).catch(fb);else fb();
    function fb(){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(_){}a.remove()}
  }
  function wrap(ctx,text,x,y,maxW,lh){
    var words=text.split(' '),line='',lines=[];
    // Thai has no spaces: fall back to character wrapping when a "word" is too wide
    words.forEach(function(w){
      var test=line?line+' '+w:w;
      if(ctx.measureText(test).width<=maxW){line=test;return}
      if(line)lines.push(line);
      if(ctx.measureText(w).width>maxW){var cur='';Array.from(w).forEach(function(ch){if(ctx.measureText(cur+ch).width>maxW){lines.push(cur);cur=ch}else cur+=ch});line=cur}
      else line=w;
    });
    if(line)lines.push(line);
    lines.forEach(function(l,k){ctx.fillText(l,x,y+k*lh)});
    return y+lines.length*lh;
  }
  function rr(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
  function saveCard(r){
    var msg=document.getElementById('msg');msg.textContent='…';
    var go=function(){
      var c=document.createElement('canvas');c.width=1080;c.height=1350;var x=c.getContext('2d');
      var g=x.createLinearGradient(0,0,0,1350);g.addColorStop(0,'#DDF2FF');g.addColorStop(.5,'#F4FAFF');g.addColorStop(1,'#FFF0F5');x.fillStyle=g;x.fillRect(0,0,1080,1350);
      x.fillStyle='#BFE0F7';rr(x,80,98,920,1172,56);x.fill();
      x.fillStyle='#fff';rr(x,80,80,920,1172,56);x.fill();
      x.setLineDash([18,14]);x.lineWidth=6;x.strokeStyle='#A9D3F2';rr(x,80,80,920,1172,56);x.stroke();x.setLineDash([]);
      var F='Fredoka, ui-rounded, system-ui, sans-serif';x.textAlign='center';
      x.fillStyle='#7FA3C8';x.font='600 34px '+F;x.fillText(T('cardTop'),540,180);
      x.font='200px '+F;x.fillText(Q.emoji[res],540,430);
      x.fillStyle='#E8638F';x.font='700 76px '+F;var y=wrap(x,T('youre',{n:r.n}),540,560,800,86);
      x.fillStyle='#7D8DA3';x.font='400 36px '+F;x.fillText(r.by.replace(/<[^>]+>/g,''),540,y+10);
      x.fillStyle='#2F4A6B';x.font='400 40px '+F;wrap(x,r.d.replace(/<[^>]+>/g,''),540,y+110,760,56);
      x.fillStyle='#3B6EA8';x.font='600 30px '+F;x.fillText('🦦 '+T('cardFoot'),540,1150);
      x.fillStyle='#9DB7D3';x.font='400 26px '+F;x.fillText('vantevb.github.io/entreblsedesejos-midia/'+Q.path+'/',540,1200);
      c.toBlob(function(blob){
        var name=Q.path+'-'+res+'.png';
        try{var file=new File([blob],name,{type:'image/png'});
          if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],text:T('share',{n:r.n,e:Q.emoji[res]})}).catch(function(){});msg.textContent='';return}}catch(e){}
        var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();msg.textContent=T('saved');
      },'image/png');
    };
    (document.fonts&&document.fonts.load?Promise.all([document.fonts.load('700 76px Fredoka'),document.fonts.load('400 40px Fredoka')]):Promise.resolve()).then(go,go);
  }
  window.onLang=function(){document.title=T('title').replace(/<br>/g,' ');show()};
  reset();
})();
