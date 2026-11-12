const BR='#8E5F3D', DK='#73492D', CR='#EED6B6', INK='#2A1A10', BL='#F59FAE', BLUE='#3B6EA8';
const heart=(x,y,s,c)=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 8 C-14 -6 -6 -20 0 -10 C6 -20 14 -6 0 8Z" fill="${c}"/>`;

function eyes(t){
  const L=-44,R=44,Y=-78;
  if(t==='happy') return `<path d="M${L-13} ${Y+4} Q${L} ${Y-12} ${L+13} ${Y+4}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><path d="M${R-13} ${Y+4} Q${R} ${Y-12} ${R+13} ${Y+4}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`;
  if(t==='sleep') return `<path d="M${L-13} ${Y-2} Q${L} ${Y+10} ${L+13} ${Y-2}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><path d="M${R-13} ${Y-2} Q${R} ${Y+10} ${R+13} ${Y-2}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`;
  if(t==='heart') return heart(L,Y,1.6,'#E84A7F')+heart(R,Y,1.6,'#E84A7F');
  if(t==='teary') return `<ellipse cx="${L}" cy="${Y}" rx="15" ry="16" fill="${INK}"/><circle cx="${L+5}" cy="${Y-6}" r="6" fill="#fff"/><circle cx="${L-5}" cy="${Y+6}" r="3" fill="#fff"/>
     <ellipse cx="${R}" cy="${Y}" rx="15" ry="16" fill="${INK}"/><circle cx="${R+5}" cy="${Y-6}" r="6" fill="#fff"/><circle cx="${R-5}" cy="${Y+6}" r="3" fill="#fff"/>
     <path d="M${L-8} ${Y+18} q-6 14 0 20 q6 -6 0 -20z" fill="#7CC4F2"/><path d="M${R+8} ${Y+18} q-6 14 0 20 q6 -6 0 -20z" fill="#7CC4F2"/>`;
  if(t==='wink') return `<ellipse cx="${L}" cy="${Y}" rx="11" ry="12" fill="${INK}"/><circle cx="${L+4}" cy="${Y-4}" r="4" fill="#fff"/><path d="M${R-13} ${Y+4} Q${R} ${Y-12} ${R+13} ${Y+4}" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`;
  return `<ellipse cx="${L}" cy="${Y}" rx="11" ry="12" fill="${INK}"/><circle cx="${L+4}" cy="${Y-4}" r="4" fill="#fff"/><ellipse cx="${R}" cy="${Y}" rx="11" ry="12" fill="${INK}"/><circle cx="${R+4}" cy="${Y-4}" r="4" fill="#fff"/>`;
}
function mouth(t){
  if(t==='open') return `<path d="M-14 -26 Q0 -2 14 -26 Z" fill="#C2405E" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>`;
  if(t==='sad') return `<path d="M-12 -18 Q0 -28 12 -18" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
  return `<path d="M-15 -22 Q-7 -12 0 -24 Q7 -12 15 -22" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
}
function paws(t){
  if(t==='wave') return `<path d="M70 20 Q120 -10 130 -70" stroke="${BR}" stroke-width="44" stroke-linecap="round" fill="none"/><ellipse cx="132" cy="-80" rx="26" ry="22" fill="${DK}"/><ellipse cx="-45" cy="30" rx="26" ry="20" fill="${DK}"/>
     <path d="M160 -110 q14 -6 20 6 M166 -78 q16 0 18 12" stroke="${BLUE}" stroke-width="8" stroke-linecap="round" fill="none"/>`;
  if(t==='heart') return heart(0,62,7,'#F06292')+`<ellipse cx="-58" cy="50" rx="26" ry="21" fill="${DK}"/><ellipse cx="58" cy="50" rx="26" ry="21" fill="${DK}"/>`;
  if(t==='wai') return `<ellipse cx="-13" cy="10" rx="18" ry="34" fill="${DK}" transform="rotate(-6 -13 10)"/><ellipse cx="13" cy="10" rx="18" ry="34" fill="${DK}" transform="rotate(6 13 10)"/>`;
  if(t==='shell') return `<g transform="translate(0 55) scale(1.6)"><path d="M0 -26 L-30 14 Q0 30 30 14 Z" fill="#FFB7C9" stroke="#F08AA6" stroke-width="3" stroke-linejoin="round"/><path d="M0 -26 L-15 18 M0 -26 L0 22 M0 -26 L15 18" stroke="#F08AA6" stroke-width="3"/></g><ellipse cx="-50" cy="45" rx="26" ry="21" fill="${DK}"/><ellipse cx="50" cy="45" rx="26" ry="21" fill="${DK}"/>`;
  if(t==='face') return `<ellipse cx="-80" cy="-30" rx="26" ry="22" fill="${DK}"/><ellipse cx="80" cy="-30" rx="26" ry="22" fill="${DK}"/>`;
  return `<ellipse cx="-45" cy="30" rx="26" ry="20" fill="${DK}"/><ellipse cx="45" cy="30" rx="26" ry="20" fill="${DK}"/>`;
}
function otter(o){
  return `<g>
   <ellipse cx="0" cy="80" rx="112" ry="108" fill="${BR}"/>
   <ellipse cx="0" cy="95" rx="74" ry="78" fill="${CR}"/>
   <ellipse cx="-60" cy="178" rx="34" ry="18" fill="${DK}"/><ellipse cx="60" cy="178" rx="34" ry="18" fill="${DK}"/>
   <ellipse cx="0" cy="-58" rx="118" ry="84" fill="${BR}"/>
   <circle cx="-106" cy="-92" r="15" fill="${DK}"/><circle cx="-106" cy="-92" r="7" fill="#D2A07A"/>
   <circle cx="106" cy="-92" r="15" fill="${DK}"/><circle cx="106" cy="-92" r="7" fill="#D2A07A"/>
   <path d="M-100 -30 Q-96 22 0 22 Q96 22 100 -30 Q70 -62 0 -60 Q-70 -62 -100 -30Z" fill="${CR}"/>
   ${eyes(o.eyes)}
   <ellipse cx="-74" cy="-34" rx="17" ry="9" fill="${BL}" opacity="${o.blush||.75}"/><ellipse cx="74" cy="-34" rx="17" ry="9" fill="${BL}" opacity="${o.blush||.75}"/>
   <ellipse cx="0" cy="-44" rx="19" ry="12" fill="${INK}"/>
   ${mouth(o.mouth)}
   <g stroke="#9C7656" stroke-width="3" stroke-linecap="round"><path d="M-34 -30 L-82 -40 M-34 -22 L-84 -20 M-34 -14 L-78 -2"/><path d="M34 -30 L82 -40 M34 -22 L84 -20 M34 -14 L78 -2"/></g>
   ${paws(o.paws)}
   ${o.hat||''}
  </g>`;
}
const water=`<path d="M-190 140 Q-142 115 -95 140 T0 140 T95 140 T190 140 Q200 200 150 215 Q0 235 -150 215 Q-200 200 -190 140Z" fill="#5DA9E6"/><path d="M-190 140 Q-142 115 -95 140 T0 140 T95 140 T190 140" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`;
const nightcap=`<path d="M-70 -128 Q-10 -230 80 -190 Q40 -160 70 -125 Z" fill="#7FA8E0"/><circle cx="84" cy="-192" r="16" fill="#fff"/><path d="M-80 -128 Q0 -150 80 -128" stroke="#fff" stroke-width="16" stroke-linecap="round" fill="none"/>`;


