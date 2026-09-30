/* Box Box Box — edit MODULES to add/change content. Progress saved in localStorage. */
const F=(c,t,d)=>`<div class="flag"><i style="background:${c}"></i><div><b>${t}</b><br>${d}</div></div>`;
const MODULES=[
{id:"basics",icon:"🏁",title:"The Basics",html:`
<div class="card"><h3>What is F1?</h3><p>Ten teams, two drivers each, ~24 races a year across the world. Two championships run at once: <b>Drivers'</b> (glory) and <b>Constructors'</b> (team, and the money).</p></div>
<div class="card"><h3>Race weekend</h3><ul><li><b>Practice (FP1–3):</b> setup and tyre testing.</li><li><b>Qualifying (Q1→Q2→Q3):</b> slowest cut each round; fastest in Q3 gets pole.</li><li><b>Race:</b> ~305 km (Monaco shorter), about 90 min–2 hrs.</li><li><b>Sprint weekends:</b> a short ~100 km race on Saturday with its own qualifying.</li></ul></div>
<div class="card"><h3>Points</h3><div class="formula">P1–P10: 25 · 18 · 15 · 12 · 10 · 8 · 6 · 4 · 2 · 1<br>Sprint P1–P8: 8 · 7 · 6 · 5 · 4 · 3 · 2 · 1</div><p>The fastest-lap bonus point was dropped from 2025.</p></div>`,
quiz:[["Who gets pole position?",["Fastest in Q3","Winner of the sprint","Fastest in FP1","Points leader"],0,"Pole = fastest lap in the final qualifying session (Q3)."],["How many points for a win (grand prix)?",["10","18","25","30"],2,"25 for P1, then 18, 15, 12…"],["Which two titles are contested?",["Drivers' and Constructors'","Drivers' and Rookie","Teams' and Fans'","Pole and Podium"],0,"Individual glory and team glory."]]},

{id:"car",icon:"🔧",title:"The Car & Power Unit",html:`
<div class="card"><h3>It's an engineering sport</h3><p>An F1 car is ~800 kg with driver, ~1000 hp, and sees over 5 g under braking and cornering. Performance is a war between <b>power, grip and weight</b>.</p></div>
<div class="card"><h3>Power unit (2014–2025)</h3><ul><li><b>1.6L V6 turbo</b> engine (ICE), ~15,000 rpm limit.</li><li><b>MGU-K:</b> recovers braking energy and deploys it as electric boost.</li><li><b>MGU-H:</b> recovered heat from the turbo exhaust (deleted for 2026).</li><li><b>Energy Store (battery)</b> + <b>Control Electronics</b>. Together this is ERS.</li></ul><p>Thermal efficiency is above 50% — far better than a road car.</p></div>
<div class="card"><h3>2026 reset</h3><p>New regs: much bigger electrical share of power, sustainable fuel, smaller and lighter cars, and active aero. Check the latest specs — this changes fast.</p></div>
<div class="card"><h3>Other key parts</h3><ul><li><b>Halo:</b> titanium cockpit protection.</li><li><b>Floor:</b> makes most of the downforce (see aero).</li><li><b>Brakes:</b> carbon discs work at 1000°C+ and stop the car from 300 km/h in ~4 seconds.</li></ul></div>`,
quiz:[["What does the MGU-K do?",["Cools the engine","Recovers braking energy","Steers the car","Controls DRS"],1,"It harvests kinetic energy under braking and redeploys it."],["Engine size (2014–25)?",["2.4L V8","3.0L V10","1.6L V6 turbo hybrid","5.0L V12"],2,"1.6L V6 turbo + hybrid systems."],["What is the halo?",["Wing","Cockpit protection","Tyre type","Radio system"],1,"A titanium safety structure over the cockpit."]]},

{id:"aero",icon:"🌪️",title:"Aero, Downforce & DRS",html:`
<div class="card"><h3>Downforce = fake weight</h3><p>Wings and the floor push the car into the track. More downforce means more grip, so faster corners. At high speed an F1 car makes more downforce than its own weight (the "drive on the ceiling" fact).</p><div class="formula">Downforce ∝ ½ · ρ · v² · A · C<sub>L</sub><br>Drag ∝ ½ · ρ · v² · A · C<sub>D</sub></div><p>Both scale with <b>v²</b>: double the speed, four times the force. That's why aero matters more the faster you go.</p></div>
<div class="card"><h3>The trade-off</h3><p>Downforce comes with drag, which limits top speed. Monza runs low-drag wings; Monaco runs huge wings for grip. Setup is choosing your compromise.</p></div>
<div class="card"><h3>Ground effect</h3><p>Since 2022 the underfloor has <b>Venturi tunnels</b>: air accelerates underneath, pressure drops (Bernoulli), and the car is sucked to the tarmac. Downforce is less sensitive to following another car, so racing is closer. Downside: <b>porpoising</b> (bouncing) when the floor stalls.</p></div>
<div class="card"><h3>DRS — Drag Reduction System</h3><span class="tag">2011–2025</span><ul><li>A driver within <b>1 second</b> of the car ahead at a detection point can open the rear wing flap in the DRS zone.</li><li>The flap opens (~85 mm gap), slashing drag <i>and</i> rear downforce, worth roughly 10–15 km/h on a straight.</li><li>Off in the rain; closes automatically when the driver brakes.</li><li>Purpose: turbulent "dirty air" from the lead car ruins your front grip, making passing hard. DRS is artificial help.</li></ul><p><b>2026:</b> DRS is replaced by <b>active aerodynamics</b> (movable front and rear wings) plus an electrical overtake boost. Same idea, smarter execution.</p></div>`,
quiz:[["What does DRS reduce?",["Weight","Drag","Tyre wear","Fuel use"],1,"Opening the flap cuts drag (and some downforce)."],["Detection gap to use DRS?",["Within 1 second","Within 5 seconds","Any time","Leader only"],0,"Within 1 second at the detection point."],["Force scales with…?",["v","v²","√v","Constant"],1,"Aero forces go with speed squared."],["Ground effect works via…?",["Bigger engine","Venturi tunnels under the floor","Heavier car","Softer tyres"],1,"Low pressure under the floor sucks the car down."]]},

{id:"tyres",icon:"🛞",title:"Tyres & Strategy",html:`
<div class="card"><h3>Pirelli compounds</h3><ul><li><b style="color:#ff3b30">Soft (red):</b> fastest, degrades quickly.</li><li><b style="color:#ffd60a">Medium (yellow):</b> balanced.</li><li><b style="color:#fff">Hard (white):</b> slowest, lasts longest.</li><li><b style="color:#30d158">Intermediate (green)</b> for damp, <b style="color:#0a84ff">Full wet (blue)</b> for heavy rain.</li></ul><p>In a dry race you must use <b>at least two different compounds</b>, so at least one pit stop.</p></div>
<div class="card"><h3>Strategy toolbox</h3><ul><li><b>Undercut:</b> pit earlier, use fresh-tyre pace to jump the car ahead when they stop.</li><li><b>Overcut:</b> stay out longer when the track is clear and pace holds.</li><li><b>Tyre degradation ("deg"):</b> grip fades as rubber overheats and wears. Managing it wins races.</li><li><b>Track position vs pace:</b> sometimes staying ahead on old tyres beats fresh rubber behind traffic.</li><li><b>Safety Car gamble:</b> a free pit stop is huge, so teams pit under it.</li></ul><p>Strategy is a live maths game: pit-stop loss (~20–25 s), tyre life, traffic, weather. This is the origin of all Ferrari strategy tears.</p></div>`,
quiz:[["Yellow tyre is…?",["Soft","Medium","Hard","Wet"],1,"Red soft, yellow medium, white hard."],["Minimum compounds in a dry race?",["1","2","3","4"],1,"Two different dry compounds, so at least one stop."],["Undercut means…?",["Pit earlier to gain track position","Pit later","Slow down","Change driver"],0,"Fresh tyres give the pace to jump ahead."]]},

{id:"flags",icon:"🚩",title:"Flags & Safety",html:`
<div class="card"><h3>Flags</h3><div class="flags">
${F("#ffd60a","Yellow","Danger ahead. No overtaking, slow down. Double yellow: be ready to stop.")}
${F("#e10600","Red","Session stopped. Cars return to pit lane.")}
${F("#30d158","Green","Track clear, hazard over.")}
${F("#0a84ff","Blue","Let a faster, lapping car by.")}
${F("linear-gradient(#ffd60a 50%,#e10600 50%)","Yellow/red stripes","Slippery surface (oil, debris, water).")}
${F("#fff","White","Slow vehicle on track (e.g. medical car).")}
${F("#111","Black","Driver disqualified. Return to pits.")}
${F("repeating-conic-gradient(#fff 0 25%,#111 0 50%) 0 0/9px 9px","Chequered","Race or session over.")}
</div></div>
<div class="card"><h3>Safety Car & VSC</h3><ul><li><b>Safety Car (SC):</b> field bunches behind it at reduced speed; no overtaking.</li><li><b>Virtual SC (VSC):</b> cars must stay above a delta time (roughly 30–40% slower); no physical car.</li><li><b>Red flag:</b> race halted; tyres can be changed freely, so it resets strategy.</li></ul></div>
<div class="card"><h3>Safety tech</h3><p>Halo, HANS device, crash structures, fireproof suits, medical car and doctors on every lap. Crashes that once killed now end with a walk.</p></div>`,
quiz:[["Blue flag means…?",["Danger","Let faster car pass","Race over","Rain"],1,"You're being lapped. Yield."],["No overtaking under…?",["Yellow","Green","Blue","White"],0,"Yellow means danger, hold position."],["Which tyre rule change is allowed under red flag?",["None","Free tyre change","Engine swap","Driver swap"],1,"Teams can change tyres during a red flag."]]},

{id:"rules",icon:"⚖️",title:"Rules & Penalties",html:`
<div class="card"><h3>Stewards & penalties</h3><ul><li><b>Time penalty:</b> 5 s or 10 s added to race time (served in the pits or added at the end).</li><li><b>Drive-through / stop-go:</b> serve through the pits.</li><li><b>Grid penalty:</b> places dropped, often for new engine parts beyond the allowance.</li><li><b>Track limits:</b> going wide over the white line for an advantage draws warnings, then penalties.</li></ul></div>
<div class="card"><h3>Superlicence points</h3><p>Drivers collect penalty points; <b>12 within 12 months</b> triggers a one-race ban.</p></div>
<div class="card"><h3>Parc fermé & cost cap</h3><ul><li><b>Parc fermé:</b> after qualifying, cars are largely locked, limiting setup changes.</li><li><b>Cost cap:</b> teams have a yearly spending limit, and breaches are punished. It keeps rich teams from buying everything.</li><li><b>Sporting vs Technical regs:</b> the sporting rules govern racing behaviour; the technical rules govern car design.</li></ul></div>`,
quiz:[["Points for a race ban?",["6","12","20","3"],1,"12 points in 12 months means a one-race ban."],["What does the cost cap do?",["Limits ticket prices","Limits team spending","Limits fuel","Limits laps"],1,"It caps annual team spending."],["Parc fermé means…?",["Restricted setup changes","Party time","Pit-lane closed","Wet race"],0,"The car is largely locked after qualifying."]]},

{id:"culture",icon:"🏆",title:"Teams, Drivers & Lore",html:`
<div class="card"><h3>Grid basics</h3><p>Teams: Ferrari, Mercedes, Red Bull, McLaren, Aston Martin, Alpine, Williams, Haas, and the rest. Rosters change every year, so keep an eye on the news.</p></div>
<div class="card"><h3>Why people cry over F1</h3><ul><li><b>Ferrari:</b> oldest, most romantic team, most famous for heartbreak by strategy.</li><li><b>Rivalries:</b> Senna–Prost, Hamilton–Verstappen (Abu Dhabi 2021), Hunt–Lauda.</li><li><b>Drive to Survive</b> is a fine on-ramp; the real drama is in team radio.</li></ul></div>
<div class="card"><h3>Vocabulary</h3><ul><li><b>Box box:</b> "pit this lap".</li><li><b>Dirty air:</b> turbulent wake behind a car.</li><li><b>Lift and coast:</b> saving fuel or brakes.</li><li><b>Delta:</b> time difference vs a reference.</li></ul></div>`,
quiz:[["'Box box' means…?",["Pit now","Speed up","Retire","Safety car"],0,"The team calls you into the pits."],["Dirty air is…?",["Turbulent wake behind a car","Rain","Engine smoke","Fuel"],0,"It reduces the following car's downforce."]]}
];

const RANKS=[[0,"Rookie"],[60,"Backmarker"],[140,"Points Finisher"],[220,"Podium Regular"],[300,"Race Engineer"],[360,"Strategy Genius"]];
let S=JSON.parse(localStorage.getItem("f1guide")||'{"done":{}}'),cur=null;
const $=id=>document.getElementById(id);
const xp=()=>Object.values(S.done).reduce((a,b)=>a+b,0);
function hud(){const x=xp();let r=RANKS[0][1];RANKS.forEach(k=>{if(x>=k[0])r=k[1]});
 $("rank").textContent=r;$("xp").textContent=x+" XP";$("xpbar").style.width=Math.min(100,x/360*100)+"%";
 $("nav").innerHTML=`<button class="${cur===null?"on":""}" onclick="home()">🏠 Start Here</button>`+MODULES.map((m,i)=>`<button class="${cur===i?"on":""} ${S.done[m.id]!=null?"done":""}" onclick="openMod(${i})">${m.icon} ${m.title}<small>${S.done[m.id]!=null?"✔ "+S.done[m.id]:""}</small></button>`).join("")}
function home(){cur=null;hud();$("main").innerHTML=`<div class="hero"><h1>From "cool cars" to <em>crying over pit strategy</em>.</h1><p>${MODULES.length} modules. Read, then pass the quiz to earn XP and rank up. Retake anytime.</p><button class="btn" onclick="openMod(0)">LIGHTS OUT →</button></div>`}
function openMod(i){cur=i;hud();const m=MODULES[i];$("main").innerHTML=`<h2>${m.icon} ${m.title}</h2>${m.html}<button class="btn" onclick="quiz(${i})">TAKE THE QUIZ →</button>`;scrollTo(0,0)}
function quiz(i){const m=MODULES[i];let score=0,ans=0;
 $("main").innerHTML=`<h2>${m.icon} ${m.title} — Quiz</h2>`+m.quiz.map((q,qi)=>`<div class="card q" id="q${qi}"><p>${qi+1}. ${q[0]}</p>${q[1].map((o,oi)=>`<button class="opt" data-q="${qi}" data-o="${oi}">${o}</button>`).join("")}<div class="why"></div></div>`).join("")+`<div id="res"></div>`;
 document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const qi=+b.dataset.q,oi=+b.dataset.o,q=m.quiz[qi],box=$("q"+qi);if(box.dataset.d)return;box.dataset.d=1;ans++;
  box.querySelectorAll(".opt").forEach((x,xi)=>{if(xi===q[2])x.classList.add("ok")});
  if(oi===q[2])score++;else b.classList.add("no");box.querySelector(".why").textContent=q[3];
  if(ans===m.quiz.length){const pts=Math.round(score/m.quiz.length*60);if(pts>=(S.done[m.id]||0))S.done[m.id]=pts;localStorage.setItem("f1guide",JSON.stringify(S));hud();
   $("res").innerHTML=`<div class="card"><div class="score">${score}/${m.quiz.length} · +${pts} XP</div><p>${score===m.quiz.length?"P1. Absolutely clinical.":"Not bad — re-read and go again."}</p><button class="btn" onclick="openMod(${i})">RE-READ</button> <button class="btn" onclick="${i+1<MODULES.length?"openMod("+(i+1)+")":"home()"}">NEXT MODULE →</button></div>`}})}
home();
