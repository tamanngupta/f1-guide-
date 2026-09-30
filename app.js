/* Box Box Box v2 — card lessons + quiz per module. Edit MODULES below. Progress in localStorage. */
const M=(id,icon,title,cards,quiz)=>({id,icon,title,cards,quiz});
const MODULES=[
M("welcome","👋","Welcome to F1",[
["What is F1?","The top tier of single-seater racing: ~24 races a year, worldwide, in the fastest circuit cars on earth. It's also an engineering contest as much as a driving one."],
["Teams vs drivers","Each team builds its own car and runs two drivers. Through 2025 that meant 10 teams and 20 cars; Cadillac joined in 2026 to make it 11 and 22. Teammates are rivals AND colleagues."],
["Two championships","Drivers' title = individual points. Constructors' title = both drivers' points added together. Teams care about the second one, because that's where the prize money is."],
["A weekend in one line","Practice → Qualifying → Race. Some weekends add a short Sprint race. Season runs roughly March to December."],
["Your 2-minute pitch","'Teams design cars, drivers race them, points across a season crown a champion and a constructor. The winner is often decided by engineering and strategy, not just who's bravest.'"]],
[["How many championships?","One","Two","Three",1],["Constructors' points are...","One driver's","Both drivers' combined","Fans' votes",1],["Roughly how many races a season?","10","24","50",1]]),

M("weekend","🏁","The F1 Weekend",[
["Practice 1, 2 & 3","Free sessions where teams learn the track, test tyres and tune the setup. No points, but it decides everything that follows."],
["Qualifying: Q1 → Q2 → Q3","Three knockout rounds. Slowest cars are cut after Q1 and Q2; the top 10 fight for pole in Q3. Fastest lap sets the grid."],
["Sprint weekends","A ~100 km Saturday race with its own qualifying and points (8 to 1). These weekends get only one practice, so there's less time to get the car right."],
["Formation lap & lights out","Cars do a warm-up lap, line up on the grid, then five red lights go out. That's the start. ~305 km, max 2 hours (Monaco is shorter)."],
["Chequered flag & podium","First across the line wins. Top 3 go to the podium. The FIA inspects cars afterwards, and a failed check means disqualification."],
["Parc fermé","After qualifying the cars are largely locked: teams can't freely change setup, so you commit to a car for race day."]],
[["Sets the starting grid?","Practice","Qualifying","Podium",1],["Sprint race length?","~100 km","~305 km","~500 km",0],["Lights out means...","Race start","Safety Car","Pit entry",0]]),

M("car","🔧","The F1 Car",[
["Front wing","First thing to meet the air. It makes downforce and steers airflow around the front tyres and down the car."],
["Rear wing","Makes downforce on the rear axle. It houses the DRS flap (2011–2025)."],
["Floor & diffuser","The floor is the biggest downforce source. Venturi tunnels under it speed the air, dropping pressure so the car is sucked down (ground effect). The diffuser is the rising exit at the back."],
["Sidepods, halo & chassis","Sidepods hold radiators and guide air rearwards. The halo is a titanium hoop that protects the driver's head. The carbon 'tub' is the survival cell."],
["Suspension, brakes, wheel","Suspension keeps the floor at the right height. Carbon brakes run at 1000°C+. The steering wheel is a computer: radio, brake balance, differential settings."],
["Downforce vs drag","Downforce pushes the car down for grip. Drag slows it on straights. Both grow with speed squared, so wings aren't 'for speed'; they trade top speed for cornering grip."],
["Dirty air & DRS","A car's wake is turbulent 'dirty air', so the car behind loses front grip and can't follow closely. DRS (opening a rear flap to cut drag) was the artificial fix. 2026 swaps it for active aero."]],
[["Main purpose of wings?","Cooling","Downforce for grip","Looks",1],["Ground effect works via...","Floor tunnels","Bigger engine","Heavy ballast",0],["Dirty air hurts the car...","Ahead","Behind","Both",1]]),

M("pu","⚡","The Power Unit",[
["The engine (ICE)","A 1.6L V6 turbo revving to ~15,000 rpm. It's half of the story."],
["Turbocharger","Exhaust gas spins a turbine that drives a compressor, forcing more air into the engine for more power."],
["MGU-K","Recovers energy under braking and turns it into electricity, then pushes it back as a boost on the way out."],
["MGU-H","Recovers heat energy from the turbo exhaust. Brilliant but expensive, and it's gone from 2026."],
["Energy Store & ERS","The battery stores what MGU-K/H harvest. ERS is the whole package. Regeneration: braking becomes electricity, electricity becomes speed."],
["Why hybrid? Why suppliers?","Hybrids hit >50% thermal efficiency and keep carmakers interested. Teams depend on suppliers (Mercedes, Ferrari, Honda, Audi, Red Bull-Ford), and a weak PU sinks a season."]],
[["What does MGU-K recover?","Braking energy","Exhaust heat","Fuel",0],["Turbo is driven by...","Exhaust gas","Battery","Wheels",0],["F1 cars are hybrids to...","Save weight only","Raise efficiency and relevance","Cut costs only",1]]),

M("tyres","🛞","Tyres",[
["Soft, Medium, Hard","Red/yellow/white slicks. Softer = more grip but fast wear. Harder = slower but lasts."],
["Inters & full wets","Green intermediates for damp, blue full wets for heavy rain. Their grooves clear water."],
["Temperature & grip","Tyres only work in a narrow temperature window. Too cold and they slide, too hot and they fall apart."],
["Wear, graining, blistering","Degradation is the gradual loss of grip. Graining: rubber tears into little rolls, making the tyre slippery. Blistering: overheating bubbles the surface."],
["Why not always soft?","They might last just a few laps. Plus you must use two different dry compounds. Fastest lap ≠ fastest race strategy."],
["Pit stops","The car is stationary for ~2–3 seconds, but the whole stop costs ~20s in lost time. That price is what strategy weighs."]],
[["Yellow tyre?","Soft","Medium","Hard",1],["Blistering is caused by...","Cold","Overheating","Rain",1],["Dry race minimum compounds?","1","2","3",1]]),

M("racing","⚔️","Racing & Overtaking",[
["Racing line & apex","The fastest route: go wide, clip the apex (innermost point), exit wide. Corner exit speed matters most because it carries down the straight."],
["Braking zones","Most passes happen here: dive late into the braking zone. F1 cars brake from 300 km/h in ~4 seconds."],
["Slipstream & DRS","The car ahead punches a hole in the air. Follow closely and you use less energy; DRS added an extra boost on top."],
["Attack & defend","Attackers line up a lunge; defenders take the inside line. Rules: leave a car's width and don't weave under braking."],
["Why some tracks are hard","Narrow tracks, slow corners and dirty air make passing rare (Monaco). Long straights and heavy braking invite it (Monza)."],
["Track position & undercut","Sometimes you pass in the pits, not on track. Track position is gold at tracks where overtaking is hard."]],
[["Where do most passes occur?","Braking zones","Pit entry","Start line",0],["Hardest track to overtake?","Monza","Monaco","Spa",1],["The apex is...","Corner's innermost point","Pit entry","Finish line",0]]),

M("strategy","🧠","Race Strategy",[
["One-stop vs two-stop","One stop = less time in the pits but older tyres. Two stops = fresher tyres and more pace, but more time lost in the pits."],
["Undercut & overcut","Undercut: pit first, use fresh-tyre pace to jump ahead. Overcut: stay out in clear air and emerge ahead once they've stopped."],
["Tyre offset & pit windows","A fresh tyre vs an old one is an 'offset': the fresher car attacks. Pit windows are the laps when a stop makes sense."],
["Safety Car, VSC, red flag","SC/VSC give cheap pit stops. A red flag lets everyone change tyres free. Teams gamble in these moments."],
["Weather, traffic, pace","Rain resets everything. Traffic can ruin a pit exit. Pace management means driving slower now to be quicker later."],
["Scenario: you're P4","The leader pits and you stay out. Goal: use clear air and fresh laps to build a gap, then emerge ahead (overcut), or protect track position if passing is hard. Think: pace, traffic, tyre life."]],
[["Undercut means...","Pit early","Pit late","Never pit",0],["Who benefits from a Safety Car?","Whoever pits cheaply","Nobody","Only leader",0],["'Pace management' means...","Driving slower to save tyres/fuel","Always max attack","Skipping pit stops",0]]),

M("flags","🚩","Flags, Rules & Penalties",[
["Green","Track is clear. Race on.","#30d158"],
["Yellow & double yellow","Yellow: danger ahead, no overtaking, slow down. Double yellow: be prepared to stop.","#ffd60a"],
["Red","Session stopped. Everyone returns to the pit lane.","#e10600"],
["Blue","A faster car is about to lap you. Let them by.","#0a84ff"],
["Black-and-white","A warning for unsportsmanlike driving. Next step is usually a penalty.","linear-gradient(135deg,#fff 50%,#111 50%)"],
["Chequered","Race over.","repeating-conic-gradient(#fff 0 25%,#111 0 50%) 0 0/12px 12px"],
["Safety Car & VSC","Safety Car leads the field at reduced speed, no overtaking. VSC: everyone must stay above a delta time, no physical car."],
["Track limits","Four wheels over the white line for advantage = warnings, then penalties."],
["Unsafe release & collisions","Releasing a car into traffic in the pit lane is an unsafe release. Causing a collision draws penalties."],
["Penalties","Time penalties (5s/10s), grid penalties (e.g. engine changes), pit-lane penalties (speeding, unsafe release). 12 penalty points in 12 months = race ban."]],
[["Blue flag means...","Let faster car pass","Danger","Race over",0],["No overtaking under...","Yellow","Green","Blue",0],["Penalty points for a ban?","6","12","20",1]]),

M("driver","🧑‍🚀","The Driver",[
["Core skills","Braking precision, cornering, racecraft (passing and defending), consistency. Elite drivers hit the same limit lap after lap."],
["Quali vs race pace","Qualifying is one perfect lap. Race pace is managing tyres over 50+ laps. Some drivers are better at one."],
["Tyre management & wet driving","Being smooth saves rubber. Rain tests car control and judgment since there's far less grip."],
["Feedback to engineers","Drivers describe understeer/oversteer and how the car feels so engineers can tune it. Good feedback = better car."],
["Physical & mental","Up to ~5g through corners, heat, dehydration, and high heart rates. Plus decisions at 300 km/h and the noise on the radio."],
["Telemetry","Traces of speed, throttle, brake, gear, RPM and steering. Overlay two drivers' laps and you can see exactly where time is won or lost."]],
[["Understeer is...","Front loses grip","Rear loses grip","Engine issue",0],["Telemetry compares...","Drivers' laps","Fuel prices","Ticket sales",0],["Race pace is about...","One lap","Managing over a stint","Only braking",1]]),

M("team","🛠️","The Team Behind the Driver",[
["Race engineer","The driver's voice on the radio. Gives info, adjusts settings and relays calls."],
["Performance & strategy","Performance engineers monitor the car's data; the strategy team simulates pit stops and outcomes."],
["Mechanics & pit crew","Pit crews of ~20 change four tyres in ~2–3 seconds. Mechanics build and repair the car."],
["Factory departments","Aerodynamics, vehicle dynamics, power-unit engineers and more work at the factory, often hundreds of people, with the trackside team taking the car to races."],
["Team principal","The boss: sets direction, deals with regulators and handles media."],
["The chain of command","Driver → Engineer → Strategy → Pit Wall. Every call you hear on team radio passes through this chain."]],
[["Who talks to the driver on the radio?","Race engineer","Mechanic","Marshal",0],["Pit crew size?","~5","~20","~100",1],["Who runs the team?","Team principal","Marshal","Steward",0]]),

M("champ","🏆","Championships & Constructors",[
["Drivers' & Constructors'","Two titles, both decided by season-long points."],
["Points system","P1–P10: 25, 18, 15, 12, 10, 8, 6, 4, 2, 1. Sprints: 8 to 1 for the top eight."],
["Ties","Decided by countback: most wins, then most second places, and so on."],
["Why every position matters","Constructors' prize money depends on championship position, so P6 vs P7 can be millions."],
["Teammate comparison","Same car, so teammates are the purest benchmark of a driver."],
["Legendary battles","Hunt–Lauda 1976, Senna–Prost 1988–90, Hamilton–Rosberg 2016, Hamilton–Verstappen 2021 (decided on the last lap in Abu Dhabi)."]],
[["Points for a win?","10","25","50",1],["Ties decided by...","Coin flip","Most wins","Age",1],["Why do constructors' places matter?","Prize money","Nothing","Only pride",0]]),

M("circuits","🗺️","F1 Circuits",[
["Corner vocabulary","Straights, hairpins (tight 180°), chicanes (S-shaped kinks), esses (flowing series). Corners are either high-speed (grip/downforce) or low-speed (traction)."],
["DRS zones","Long straights where DRS was allowed. Track designers put them after a corner to encourage passing."],
["Speed & power: Monza, Spa","Monza is the 'Temple of Speed': low-drag wings and full-throttle straights. Spa has huge elevation and Eau Rouge, plus famously mixed weather."],
["Street circuits: Monaco, Singapore, Baku","Walls, tight corners, little margin. Monaco: qualifying is king. Baku: a huge straight plus a narrow medieval section."],
["Downforce & technical: Hungary, Suzuka","Hungary is twisty and needs max wings. Suzuka's figure-eight layout and its esses punish small mistakes."]],
[["Low-drag wings suit...","Monza","Monaco","Hungary",0],["Hairpin is...","Tight 180° corner","Long straight","Pit entry",0],["Where is qualifying king?","Monaco","Monza","Spa",0]])
];

const RANKS=[[0,"Rookie"],[100,"Backmarker"],[220,"Points Finisher"],[360,"Podium Regular"],[500,"Race Engineer"],[650,"Strategy Genius"]];
let S=JSON.parse(localStorage.getItem("f1guide2")||'{"d":{}}'),cur=null,step=0,mode="",qi=0,sc=0;
const $=id=>document.getElementById(id),save=()=>localStorage.setItem("f1guide2",JSON.stringify(S));
const pts=id=>{const d=S.d[id]||{};return (d.l?20:0)+(d.q||0)*15};
const xp=()=>MODULES.reduce((a,m)=>a+pts(m.id),0);
function hud(){const x=xp();let r="";RANKS.forEach(k=>{if(x>=k[0])r=k[1]});
 $("rank").textContent=r;$("xp").textContent=x+" XP";$("xpbar").style.width=Math.min(100,x/780*100)+"%";
 $("nav").innerHTML=`<button class="${cur===null?"on":""}" onclick="home()">🏠 Start Here</button>`+MODULES.map((m,i)=>`<button class="${cur===i?"on":""} ${S.d[m.id]&&S.d[m.id].q!=null?"done":""}" onclick="lesson(${i})">${m.icon} ${i+1}. ${m.title}<small>${S.d[m.id]&&S.d[m.id].q!=null?"✔ "+S.d[m.id].q+"/3":""}</small></button>`).join("")}
function home(){cur=null;mode="";hud();$("main").innerHTML=`<div class="hero"><h1>From "cool cars" to <em>crying over pit strategy</em>.</h1><p>12 modules. Swipe through bite-size cards, then beat the quiz. Earn XP, climb the ranks.</p><button class="btn" onclick="lesson(0)">LIGHTS OUT →</button></div><div class="tiles">${MODULES.map((m,i)=>`<button class="tile" onclick="lesson(${i})"><span style="font-size:28px">${m.icon}</span><b>${i+1}. ${m.title}</b></button>`).join("")}</div>`}
function lesson(i,s){cur=i;step=s||0;mode="l";hud();draw()}
function draw(){const m=MODULES[cur],c=m.cards[step],n=m.cards.length;
 $("main").innerHTML=`<div class="lp">${m.cards.map((_,k)=>`<i class="${k<=step?"on":""}"></i>`).join("")}</div><div class="slide">${c[2]?`<div class="sw" style="background:${c[2]}"></div>`:""}<small>${m.icon} ${m.title.toUpperCase()} · ${step+1}/${n}</small><h2>${c[0]}</h2><p>${c[1]}</p></div><div class="row"><button class="btn ghost" onclick="back()" ${step?"":"style='visibility:hidden'"}>← BACK</button><button class="btn" onclick="next()">${step===n-1?"START QUIZ →":"CONTINUE →"}</button></div>`;scrollTo(0,0)}
function back(){if(step>0){step--;draw()}}
function next(){const m=MODULES[cur];if(step<m.cards.length-1){step++;draw()}else{S.d[m.id]=S.d[m.id]||{};S.d[m.id].l=1;save();hud();qi=0;sc=0;mode="q";quiz()}}
function quiz(){const m=MODULES[cur],q=m.quiz[qi];
 $("main").innerHTML=`<div class="lp">${m.quiz.map((_,k)=>`<i class="${k<=qi?"on":""}"></i>`).join("")}</div><div class="slide"><small>QUIZ · ${qi+1}/${m.quiz.length}</small><h2>${q[0]}</h2>${q.slice(1,4).map((o,k)=>`<button class="opt" onclick="ans(${k},this)">${o}</button>`).join("")}<div id="fb" class="why"></div></div><div class="row"><span></span><button id="nb" class="btn" style="display:none" onclick="nextQ()">CONTINUE →</button></div>`}
function ans(k,b){if($("nb").style.display==="inline-block")return;const q=MODULES[cur].quiz[qi];
 document.querySelectorAll(".opt").forEach((o,j)=>{if(j===q[4])o.classList.add("ok")});
 if(k===q[4]){sc++;$("fb").textContent="Lights to green. ✅"}else{b.classList.add("no");$("fb").textContent="Box box. Review and retry. ❌"}
 $("nb").style.display="inline-block"}
function nextQ(){const m=MODULES[cur];qi++;if(qi<m.quiz.length)return quiz();
 const d=S.d[m.id];d.q=Math.max(d.q||0,sc);save();hud();
 $("main").innerHTML=`<div class="slide"><small>RESULT</small><h2 class="score">${sc}/${m.quiz.length}</h2><p>${sc===m.quiz.length?"P1. Clinical.":"Re-read the cards and go again."}</p></div><div class="row"><button class="btn ghost" onclick="lesson(${cur})">RE-READ</button><button class="btn" onclick="${cur+1<MODULES.length?"lesson("+(cur+1)+")":"home()"}">${cur+1<MODULES.length?"NEXT MODULE →":"HOME"}</button></div>`}
document.addEventListener("keydown",e=>{if(mode!=="l")return;if(e.key==="ArrowRight"||e.key==="Enter")next();if(e.key==="ArrowLeft")back()});
home();