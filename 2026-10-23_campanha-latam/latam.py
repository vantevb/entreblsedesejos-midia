exec(open('/tmp/claude-0/-home-claude/038b6549-e79f-5c84-9156-d66fcce19ad9/scratchpad/ellecards.py').read().split("make('icon.jpg'")[0])
import os
O='/home/claude/midia/2026-10-23_campanha-latam/'; os.makedirs(O,exist_ok=True)
GREEN=(0,156,59); YEL=(255,223,0)
W=1080
photo=Image.open(D+'br_boss.jpg').convert('RGB')

def base(H):
    bg=photo.resize((int(photo.width*H/photo.height),H)).filter(ImageFilter.GaussianBlur(45))
    bg=bg.crop(((bg.width-W)//2,0,(bg.width-W)//2+W,H))
    return Image.blend(Image.new('RGB',(W,H),BG),bg,0.20)

def header(d,tag,W=1080):
    x=64
    d.text((x,44),'Entre BLs',font=SER(34),fill=TXT);x+=d.textlength('Entre BLs ',font=SER(34))
    d.text((x,44),'&',font=SERI(34),fill=MAGS);x+=d.textlength('& ',font=SERI(34))
    d.text((x,44),'Desejos',font=SER(34),fill=TXT)
    tf=SANS(20,700);tw=sum(d.textlength(ch,font=tf)+4 for ch in tag)
    d.rounded_rectangle([W-64-tw-32,42,W-64,84],4,fill=MAG);xx=W-64-tw-16
    for ch in tag: d.text((xx,51),ch,font=tf,fill=(255,255,255));xx+=d.textlength(ch,font=tf)+4

def ctext(d,y,s,f,fill):
    d.text(((W-d.textlength(s,font=f))/2,y),s,font=f,fill=fill)

def mixed(d,y,parts,size):
    f1,f2=SER(size),SERI(size)
    w=sum(d.textlength(t,font=(f2 if it else f1)) for t,it in parts); x=(W-w)/2
    for t,it in parts:
        d.text((x,y),t,font=(f2 if it else f1),fill=(MAGS if it else TXT)); x+=d.textlength(t,font=(f2 if it else f1))

def footer(d,H,n):
    f=SANS(20,600)
    ctext(d,H-70,'#BossNoeulLATAM  ·  #BossNoeulBrasil',f,MAGS)
    if n:
        ctext(d,H-40,n,SANS(16,500),MUTED)

def pastephoto(c,top,h,crop=None):
    p=photo if crop is None else photo.crop(crop)
    pw=int(p.width*h/p.height)
    if pw>W-128:
        pw=W-128; h=int(p.height*pw/p.width)
    im=rounded(p.resize((pw,h),Image.LANCZOS),18); c.paste(im,((W-pw)//2,top),im); return top+h

# ---------- Slide 1: cover
H=1350; c=base(H); d=ImageDraw.Draw(c); header(d,'CAMPANHA · LATAM')
y=pastephoto(c,140,560)
y+=60
mixed(d,y,[('A LATAM quer ',False),('BossNoeul',True)],84); y+=100
mixed(d,y,[('de volta ',False),('— e maior.',True)],84); y+=135
ctext(d,y,'LATAM quiere a BossNoeul de vuelta  ·  LATAM wants BossNoeul back',SANS(25,500),MUTED); y+=80
ctext(d,y,'Fanmeeting + Show + Lunch:',SANS(30,700),TXT); y+=44
ctext(d,y,'comente e mostre que a gente lota tudo.',SANS(30,700),TXT); y+=70
ctext(d,y,'Arrasta pro lado  >',SANS(24,700),MAG)
footer(d,H,'Foto: Boss & Noeul Fan Meeting in Brazil · 10.10.2026 · via @Bossckm_')
c.save(O+'LATAM_1_capa.jpg',quality=93)

# ---------- Slide 2: history
c=base(H); d=ImageDraw.Draw(c); header(d,'CAMPANHA · LATAM')
y=190
mixed(d,y,[('O que ',False),('já vivemos',True),(' aqui',False)],70); y+=90
ctext(d,y,'Lo que ya vivimos  ·  What we already lived',SANS(24,500),MUTED); y+=90
items=[('12.07.2025','Fan Meeting · São Paulo','The Boy Next World: Boss&Noeul · Studio Stage'),
       ('10.10.2026','Fan Meeting in Brazil · São Paulo','Carioca Club Pinheiros'),
       ('OUT · 2026','Crazy Love Lunch','almoço exclusivo · 60 fãs · Hi-Bye, selfie e conversa')]
for dt,t,s in items:
    d.rounded_rectangle([90,y,W-90,y+150],18,fill=(48,30,58),outline=(90,55,100),width=2)
    d.rounded_rectangle([90,y,100,y+150],4,fill=MAG)
    d.text((130,y+24),dt,font=SANS(22,800),fill=MAGS)
    d.text((130,y+56),t,font=SER(44),fill=TXT)
    d.text((130,y+108),s,font=SANS(20,500),fill=MUTED)
    y+=176
y+=50
mixed(d,y,[('“Vocês têm um lugar especial',True)],50); y+=62
mixed(d,y,[('no meu coração.”',True)],50); y+=74
ctext(d,y,'— Boss, depois do fanmeeting no Brasil (via @Bossckm_)',SANS(22,500),MUTED)
footer(d,H,'Fontes: SAM Entretenimento · Me Mind Y · @Bossckm_')
c.save(O+'LATAM_2_historia.jpg',quality=93)

# ---------- Slide 3: dream combo
c=base(H); d=ImageDraw.Draw(c); header(d,'CAMPANHA · LATAM')
y=150
mixed(d,y,[('O ',False),('combo',True),(' dos sonhos',False)],76); y+=96
ctext(d,y,'El combo soñado  ·  The dream combo',SANS(24,500),MUTED); y+=90
opts=[('A','Fanmeeting','jogos, conversa, hi-touch'),('B','Show','eles cantando ao vivo, só pra gente'),
      ('C','Lunch','tipo o Crazy Love Lunch, pertinho'),('D','TUDO!','o combo completo, sem dó do cartão')]
for L,t,s in opts:
    d.rounded_rectangle([90,y,W-90,y+150],18,fill=(48,30,58),outline=(90,55,100),width=2)
    d.ellipse([120,y+30,210,y+120],fill=MAG)
    lf=SER(64); d.text((165-d.textlength(L,font=lf)/2,y+28),L,font=lf,fill=(255,255,255))
    d.text((240,y+26),t,font=SER(54),fill=TXT)
    d.text((242,y+96),s,font=SANS(22,500),fill=MUTED)
    y+=172
y+=20
ctext(d,y,'Qual você escolhe? Responde nos comentários!',SANS(28,700),TXT)
footer(d,H,'')
c.save(O+'LATAM_3_combo.jpg',quality=93)

# ---------- Slide 4: how to participate
c=base(H); d=ImageDraw.Draw(c); header(d,'CAMPANHA · LATAM')
y=150
mixed(d,y,[('Como ',False),('participar',True)],80); y+=100
ctext(d,y,'Cómo participar  ·  How to join',SANS(24,500),MUTED); y+=90
steps=[('1','Comente sua cidade e país','Comenta tu ciudad y país · Your city & country'),
       ('2','A, B, C ou D','qual combo você iria · which combo you’d go to'),
       ('3','A melhor época pra vinda','mês ou estação · mes o temporada · month or season'),
       ('4','Compartilhe e marque amigas','comparte · share & tag your friends')]
for n,t,s in steps:
    d.text((110,y-6),n,font=SERI(96),fill=MAG)
    d.text((200,y+8),t,font=SER(50),fill=TXT)
    d.text((202,y+72),s,font=SANS(21,500),fill=MUTED)
    y+=150
y+=10
d.rounded_rectangle([90,y,W-90,y+120],18,fill=MAG)
ctext(d,y+22,'Vamos mostrar as respostas pra eles!',SANS(30,800),(255,255,255))
ctext(d,y+70,'Mostrémosles · Let’s show them LATAM is ready',SANS(21,600),(255,230,244))
footer(d,H,'Campanha de fãs · fan-made · não oficial')
c.save(O+'LATAM_4_participar.jpg',quality=93)

# ---------- Story 9:16
H=1920; c=base(H); d=ImageDraw.Draw(c); header(d,'CAMPANHA · LATAM')
y=pastephoto(c,150,560)
y+=60
mixed(d,y,[('A LATAM quer',False)],86); y+=104
mixed(d,y,[('BossNoeul',True),(' de volta',False)],86); y+=140
for L,t in [('A','Fanmeeting'),('B','Show'),('C','Lunch'),('D','Tudo!')]:
    d.rounded_rectangle([180,y,W-180,y+96],48,fill=(48,30,58),outline=MAG,width=2)
    d.text((220,y+14),L,font=SER(60),fill=MAGS); d.text((300,y+18),t,font=SER(54),fill=TXT)
    y+=118
y+=30
ctext(d,y,'Vota na enquete e comenta no post!',SANS(32,700),TXT); y+=54
ctext(d,y,'Vota y comenta · Vote & comment',SANS(24,500),MUTED)
footer(d,H,'Foto: Fan Meeting in Brazil 10.10.2026 · via @Bossckm_')
c.save(O+'LATAM_story.jpg',quality=93)
print('ok')
