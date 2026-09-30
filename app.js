/* Box Box Box v2 — card lessons + quiz per module. Edit MODULES below. Progress in localStorage. */

const M = (id, icon, title, cards, quiz) => ({ id, icon, title, cards, quiz });

const MODULES = [
  M(
    "welcome",
    "👋",
    "Welcome to F1",
    [
      ["What is Formula 1?", "Formula 1 is the highest level of single-seater motor racing. Across a season of around 24 races held on several continents, teams compete with purpose-built cars that are among the fastest on any circuit in the world. It is a sport of driving skill, but just as much a contest of engineering, because every team designs and develops its own car within a strict set of regulations."],
      ["Teams and drivers", "Each team builds and runs two cars, so every team has two drivers. Through 2025 the grid had 10 teams and 20 cars, and Cadillac joined in 2026, making it 11 teams and 22 cars. Teammates drive essentially the same machinery, which makes them direct rivals within the team and the clearest measure of how good a driver really is."],
      ["Two championships", "Every race awards points, and those points feed two separate titles. The Drivers' Championship adds up each driver's individual points. The Constructors' Championship adds together the points of both drivers in a team. A driver can win the first while a different team wins the second, because the two tables measure different things."],
      ["What happens on a weekend", "A race weekend runs Friday to Sunday. Practice sessions let teams prepare the car, qualifying decides the starting order, and the Grand Prix itself is held on Sunday. On some weekends a shorter Sprint race is added on Saturday. You will see each of these in detail in the next module."],
      ["How long is a season?", "The season begins around March and finishes in early December. It consists of roughly 24 rounds, each held at a different circuit, and the championships are decided by the total points collected over all of them. Consistency across the whole year matters as much as winning individual races."],
      ["Explaining F1 in two minutes", "Teams design and build cars. Two drivers per team race them on circuits around the world, and every race awards points according to finishing position. Across the season those points decide both a Drivers' champion and a Constructors' champion. Results come from the driver, the car's engineering, and the strategy decisions made during the race."]
    ],
    [
      ["How many championships are contested?", "One", "Two", "Three", 1],
      ["Constructors' points come from...", "One driver", "Both drivers combined", "Fan votes", 1],
      ["Roughly how many races in a season?", "10", "24", "50", 1]
    ]
  ),
  M(
    "weekend",
    "🏁",
    "The F1 Weekend",
    [
      ["Practice 1, 2 and 3", "Practice sessions are one-hour, non-competitive sessions held before qualifying. Teams use them to learn how the circuit behaves, test different tyre compounds and adjust the car's setup, such as wing angles and suspension stiffness. No points are awarded, but the information gathered determines how well prepared each team is for qualifying and the race."],
      ["Qualifying: Q1, Q2, Q3", "Qualifying sets the starting grid through three knockout rounds. With 22 cars, the six slowest are eliminated after Q1 and another six after Q2, leaving ten drivers for Q3. Each driver's fastest lap counts, and the quickest in Q3 starts on pole position, the front-row spot on the inside of the grid."],
      ["Sprint weekends", "On Sprint weekends there is one practice session, followed by Sprint Qualifying, a Sprint race of about 100 km on Saturday, and then the usual qualifying for the Grand Prix. The Sprint awards points to the top eight finishers, from 8 down to 1. Because practice time is limited, teams have less opportunity to fine-tune the car."],
      ["The formation lap", "Shortly before the race, the cars leave the pits and drive one slow lap called the formation lap. It lets drivers warm their tyres and brakes, check their systems and then line up in their grid slots. Nobody may overtake during this lap."],
      ["The start and the race", "Five red lights illuminate one after another and then go out, which signals the start. The race covers at least 305 km, except at Monaco where the minimum is 260 km, and it must finish within two hours of starting unless it is interrupted. Drivers complete the laps required to reach that distance."],
      ["Chequered flag and podium", "When the leader crosses the line after the final lap, the chequered flag ends the race and everyone else finishes at the end of their own lap. The top three finishers go to the podium for the trophies. Afterwards the FIA inspects cars, and a car found to break the rules can be disqualified."],
      ["Parc fermé", "From the start of qualifying, cars are placed under parc fermé conditions. Teams may only make limited changes to the car, which means the setup chosen for qualifying largely carries over to the race. This forces teams to make a balanced compromise rather than building two different cars."]
    ],
    [
      ["What sets the starting grid?", "Practice", "Qualifying", "The podium", 1],
      ["How long is a Sprint race?", "About 100 km", "About 305 km", "About 500 km", 0],
      ["The start signal is...", "Five red lights going out", "A green flag", "A siren", 0]
    ]
  ),
  M(
    "car",
    "🔧",
    "The F1 Car",
    [
      ["Front wing", "The front wing is the first part of the car to meet the air. It generates downforce on the front axle and, equally important, directs airflow around the front tyres and towards the rest of the car. The quality of the airflow it sends backwards strongly affects how well the floor and rear wing work."],
      ["Rear wing", "The rear wing produces downforce at the back of the car, helping the rear tyres grip during acceleration and cornering. It also contains the movable flap used by the Drag Reduction System. The angle of the wing is chosen for each circuit, steeper for grip and flatter for straight-line speed."],
      ["Floor and diffuser", "The floor generates the largest share of a modern F1 car's downforce. Tunnels underneath it accelerate the air, which lowers its pressure and pulls the car towards the ground. The diffuser is the upward-curving section at the rear of the floor that lets this fast air expand smoothly back to normal speed."],
      ["Sidepods and halo", "The sidepods sit alongside the driver and hold the radiators that cool the power unit, and their shape guides air towards the rear of the car. The halo is a titanium structure above the cockpit that protects the driver's head from impacts and debris, and it has prevented serious injuries in several crashes."],
      ["Suspension, tyres and brakes", "The suspension connects the wheels to the car and keeps the floor at the correct height above the track, which is crucial for aerodynamics. Tyres are the only contact with the road. Carbon brakes can reach around 1,000°C and can stop the car from about 300 km/h in roughly four seconds."],
      ["Steering wheel", "The steering wheel works as a control panel. Drivers use its buttons, rotary switches and screen to talk to the team, adjust brake balance, change how the power unit uses its electrical energy and alter differential settings. They often change these during a single lap."],
      ["Downforce and drag", "Downforce is aerodynamic force that pushes the car into the track, giving the tyres more grip so it can corner faster. Drag is air resistance that slows the car on straights. Both grow with the square of speed, and wings that add downforce also add drag, so teams balance grip against top speed for each circuit."],
      ["Ground effect and dirty air", "Ground effect is the suction produced by the tunnels under the floor. Dirty air is the turbulent wake left behind a car, which reduces the downforce of a car following closely and makes overtaking difficult. Since 2022, cars rely more on ground effect so that following another car costs less grip."],
      ["DRS", "The Drag Reduction System, used from 2011 to 2025, allowed a driver within one second of the car ahead to open a flap on the rear wing in designated zones. Opening it reduced drag and increased speed on the straight, making a pass more likely. For 2026 it is replaced by active aerodynamics, where the wings change between cornering and straight-line modes."]
    ],
    [
      ["Wings mainly provide...", "Cooling", "Downforce", "Power", 1],
      ["Ground effect comes from...", "Tunnels under the floor", "A bigger engine", "The halo", 0],
      ["Dirty air affects the car...", "In front", "Behind", "Both equally", 1]
    ]
  ),
  M(
    "pu",
    "⚡",
    "The Power Unit",
    [
      ["The internal combustion engine", "The core of the power unit is a 1.6-litre turbocharged V6 petrol engine that revs up to about 15,000 rpm. It burns fuel to drive the wheels, and on its own it produces around 800 horsepower. The remaining output, taking the total above 1,000 horsepower, comes from the electrical systems."],
      ["The turbocharger", "The turbocharger uses exhaust gases to spin a turbine, which drives a compressor that forces extra air into the engine. More air allows more fuel to be burned in each cycle, which increases power without increasing engine size. Its energy comes from exhaust heat that would otherwise be wasted."],
      ["MGU-K", "The Motor Generator Unit – Kinetic is connected to the drivetrain. When the car brakes it works as a generator and converts some of the car's motion into electricity, and on acceleration it works as a motor, delivering that stored energy as extra power to the wheels. Through 2025 it could add about 120 kW, around 160 horsepower."],
      ["MGU-H", "The Motor Generator Unit – Heat was connected to the turbocharger. It turned exhaust heat energy into electricity, and it could also spin the turbo to eliminate lag. It was technically complex and expensive, and the MGU-H has been removed from the regulations for 2026."],
      ["Energy Store and ERS", "The Energy Store is the battery that stores electricity harvested by the MGU-K and MGU-H. The Energy Recovery System, or ERS, is the term for the whole arrangement: the two motor generators, the battery and the electronics. Drivers have a limited amount of energy they may recover and deploy each lap, so using it wisely matters."],
      ["Why hybrid, and why suppliers matter", "Hybrid systems turn energy that would be lost into speed, making F1 engines over 50% thermally efficient, much higher than a road car. Only a few manufacturers build power units, such as Mercedes, Ferrari, Honda, Audi and Red Bull-Ford, and many teams buy theirs. Because the power unit strongly affects performance, a team's supplier is a major advantage or limitation. The 2026 rules shift much more of the power to electrical energy."]
    ],
    [
      ["The MGU-K recovers...", "Braking energy", "Exhaust heat", "Fuel", 0],
      ["The turbo is driven by...", "Exhaust gas", "The battery", "The wheels", 0],
      ["F1 uses hybrid power units to...", "Improve efficiency and recover energy", "Reduce safety", "Lower speed", 0]
    ]
  ),
  M(
    "tyres",
    "🛞",
    "Tyres",
    [
      ["Soft, Medium and Hard", "For dry running there are slick tyres (no tread) in several compounds, and the three used in each race are marked with red for Soft, yellow for Medium and white for Hard. The softer the compound, the more grip it gives and the faster it wears. Harder compounds last longer but are slower over a single lap."],
      ["Intermediate and full wet tyres", "Intermediate tyres, marked green, have shallow grooves and are used on damp or drying tracks. Full wet tyres, marked blue, have deep grooves that displace large amounts of water and are used in heavy rain. Both are slower than slicks on a dry track and overheat quickly if the track dries."],
      ["Temperature and grip", "A tyre works best in a narrow temperature range. If it is too cold it cannot grip properly, and if it is too hot it slides and wears faster. Drivers and teams constantly manage tyre temperature with throttle, braking, steering inputs and how hard they push."],
      ["Degradation, graining and blistering", "Degradation is the gradual loss of grip as a tyre wears. Graining happens when a tyre slides and small rolls of rubber tear off and stick to its surface, reducing grip. Blistering happens when the inside of the tyre overheats, which causes bubbles and chunks to appear on the surface."],
      ["Why not always use the softest tyre?", "Soft tyres are fastest for a few laps but wear out quickly, so they would need many pit stops. In a dry race, drivers must also use at least two different compounds. The best plan over the whole race is therefore rarely the same as the plan for the fastest single lap."],
      ["Pit stops", "During a pit stop, the crew changes all four tyres while the car is stationary, which takes about two to three seconds. Including driving through the pit lane at the speed limit, a stop costs roughly 20 to 25 seconds compared with staying on track. Teams decide when to stop by weighing that time loss against the pace gained from fresh tyres."]
    ],
    [
      ["A yellow-marked tyre is the...", "Soft", "Medium", "Hard", 1],
      ["Blistering is caused by...", "Cold tyres", "Overheating", "Rain", 1],
      ["Minimum dry compounds in a race?", "One", "Two", "Three", 1]
    ]
  ),
  M(
    "racing",
    "⚔️",
    "Racing and Overtaking",
    [
      ["Racing line and apex", "The racing line is the fastest path through a corner. Drivers approach wide, turn in towards the apex, the innermost point of the corner, and then run wide again on exit. Usually the exit matters most, because speed carried out of a corner continues along the straight that follows."],
      ["Braking zones", "Braking zones are where most overtakes happen. A driver can brake slightly later than the car in front and move alongside before the corner. However, braking too late means missing the corner, so the attacker must judge whether the move can be completed."],
      ["Slipstream and DRS", "When a car travels closely behind another it moves in air disturbed by the car ahead, which lowers drag and lets it gain speed on the straight. This is the slipstream. Combined with DRS through 2025, it was the main way of closing in for a pass at the end of long straights."],
      ["Attacking and defending", "An attacker positions the car to get a good run and pick the right braking point. A defender usually takes the inside line to cover the corner. Drivers are allowed one defensive move to change direction, and must not make additional moves as a rival is already alongside."],
      ["Why some tracks are easier to overtake on", "Overtaking is easier on circuits with long straights followed by slow corners, such as Monza. It is difficult on narrow circuits with tight corners, like Monaco. Dirty air also matters, because a following car loses grip in medium-speed corners, which reduces its ability to stay close."],
      ["Track position and wheel-to-wheel rules", "On tracks where passing is hard, being ahead is worth a lot, so strategy focuses on gaining position. Wheel-to-wheel rules require drivers to leave room: if the front of the attacking car is alongside the defender's car at the apex, the defender must leave space for it on the exit."]
    ],
    [
      ["Where are most overtakes made?", "Braking zones", "Pit entry", "The start line", 0],
      ["The apex is the...", "Innermost point of a corner", "Pit entry", "Finish line", 0],
      ["Hardest circuit to overtake on?", "Monza", "Monaco", "Spa", 1]
    ]
  ),
  M(
    "strategy",
    "🧠",
    "Race Strategy",
    [
      ["One-stop and two-stop", "A one-stop strategy uses two sets of tyres and loses time in the pits only once, but the tyres must last longer. A two-stop strategy uses three sets, so the tyres are fresher and the car can push harder, but one more pit stop costs about 20 seconds. The better option depends on tyre wear at that circuit."],
      ["Undercut and overcut", "An undercut means stopping before the car ahead, using fresh tyres to set quicker laps, and emerging in front after that car makes its stop. An overcut is the opposite: a driver stays out longer, often when tyres still perform well and the road is clear, and gains position after rivals pit."],
      ["Tyre offset and pit windows", "A tyre offset occurs when two cars run different tyre ages or compounds. The car with fresher tyres is faster and can attack the other. A pit window is the range of laps in which stopping makes sense, given how quickly the tyres degrade."],
      ["Safety Car, VSC and red flags", "A Safety Car or Virtual Safety Car slows the field, so a pit stop costs much less time than normal, and teams often pit under these conditions. Under a red flag the race stops and cars return to the pits, where tyres can be changed without any time penalty."],
      ["Weather, traffic and pace management", "Rain changes the best tyre and often the order of the race. Traffic can ruin a pit stop if the driver rejoins behind slower cars. Pace management means driving slightly slower at times, to protect tyres or fuel, so the car can go faster later."],
      ["Scenario: you are P4 and the leader pits", "If you stay out, you are trying to use a clear track and your current tyres to build a gap while the leader is on fresh tyres, so that when you pit you rejoin ahead of rivals. You also want to avoid losing time in traffic. The decision depends on your tyre condition and on the pace difference."]
    ],
    [
      ["An undercut means...", "Pitting earlier than the rival", "Pitting later", "Never pitting", 0],
      ["A Safety Car makes a stop...", "Cheaper", "More costly", "No different", 0],
      ["Pace management is...", "Driving slower to save tyres or fuel", "Always driving flat out", "Skipping stops", 0]
    ]
  ),
  M(
    "flags",
    "🚩",
    "Flags, Rules and Penalties",
    [
      ["Green flag", "Shown at the start of a session and after a hazard has been cleared. It means the track is clear and racing can continue normally.", "#30d158"],
      ["Yellow and double yellow", "A yellow flag warns of danger ahead, such as a stopped car. Drivers must slow down and cannot overtake in that section. A double yellow means the hazard is more serious and drivers must be prepared to stop.", "#ffd60a"],
      ["Red flag", "A red flag stops the session because the track is unsafe, for example after a serious crash or heavy rain. All cars return to the pit lane, and the session restarts when it is safe.", "#e10600"],
      ["Blue flag", "A blue flag tells a driver that a faster car is about to lap them. The slower driver must let that car pass at the first reasonable opportunity.", "#0a84ff"],
      ["Black-and-white flag", "This flag is a warning to a driver for unsportsmanlike behaviour, such as blocking. It is shown together with the driver's number, and further offences can lead to penalties.", "linear-gradient(135deg,#fff 50%,#111 50%)"],
      ["Chequered flag", "The chequered flag marks the end of a session or race. Drivers finish the lap they are on and return to the pits.", "repeating-conic-gradient(#fff 0 25%,#111 0 50%) 0 0/12px 12px"],
      ["Safety Car and VSC", "The Safety Car leads the field at reduced speed while a hazard is cleared, and overtaking is not allowed. Under the Virtual Safety Car, no car leads the field. Instead, drivers must keep to a set minimum lap time, which slows everyone by a controlled amount."],
      ["Track limits", "The edges of the track are marked by white lines. Drivers who put all four wheels beyond the line and gain an advantage can have lap times deleted, receive warnings, and eventually receive time penalties."],
      ["Unsafe release and collisions", "An unsafe release happens when a car is let out of its pit box into the path of another car, or before it is safe. A driver found to have caused a collision is usually given a time penalty, and the size of the penalty reflects how much blame they carry."],
      ["Types of penalty", "Time penalties, typically 5 or 10 seconds, are added to the driver's race time. Grid penalties move a driver back from the qualifying position, often after exceeding the permitted number of engine components. Pit-lane penalties include speeding in the pit lane. A driver who accumulates 12 penalty points within 12 months receives a one-race ban."]
    ],
    [
      ["A blue flag means...", "Let the faster car by", "Danger", "Race over", 0],
      ["Overtaking is banned under...", "Yellow flag", "Green flag", "Blue flag", 0],
      ["Penalty points leading to a ban?", "6", "12", "20", 1]
    ]
  ),
  M(
    "driver",
    "🧑‍🚀",
    "The Driver",
    [
      ["Core driving skills", "A good F1 driver brakes precisely, finds the limit of grip in corners, and reacts quickly to changes such as a rival's attack. Consistency matters as much as raw speed: the ability to repeat fast laps without mistakes across a full race is what separates the best."],
      ["Qualifying and race pace", "Qualifying pace is the speed a driver can produce over one lap with fresh tyres and a light car. Race pace is the speed they can maintain over a long stint, as fuel burns off and tyres wear. Some drivers are stronger at one than the other."],
      ["Tyre management and wet weather", "Good tyre management means driving smoothly to avoid overheating or sliding the tyres, so they last longer. In wet conditions the grip is lower and changes constantly, so drivers must adjust their braking points, throttle application and racing line, and judge how much the track is drying."],
      ["Feedback to engineers", "Drivers describe how the car feels, for example if the front does not turn in (understeer) or the rear slides (oversteer). Engineers combine this with data to adjust the setup. The precision of a driver's feedback directly affects how quickly the car is improved."],
      ["Physical and mental demands", "Drivers experience up to about 5 g in corners and braking, which strains the neck and core, and they race in hot cockpits with heart rates that stay high for nearly two hours. They also make decisions at over 300 km/h while listening to radio messages and managing tyres, energy and rivals."],
      ["Telemetry", "Telemetry is data sent from the car to the pit wall. The main channels are speed, throttle position, brake pressure, gear, engine rpm and steering angle. Overlaying two drivers' laps shows exactly where one brakes later, accelerates earlier or takes a different line, which reveals where time is gained or lost."]
    ],
    [
      ["Understeer means the...", "Front loses grip", "Rear loses grip", "Engine overheats", 0],
      ["Telemetry is...", "Data sent from the car", "A type of tyre", "A flag", 0],
      ["Race pace is...", "Speed maintained over a stint", "A single lap", "Pit-stop time", 0]
    ]
  ),
  M(
    "team",
    "🛠️",
    "The Team Behind the Driver",
    [
      ["Race engineer", "The race engineer is the driver's main contact during a weekend. They communicate by radio, relay information about strategy and rivals, and work with the driver to adjust settings on the car. Drivers usually work with the same engineer for long periods, which builds trust and shared understanding."],
      ["Performance engineers and strategists", "Performance engineers monitor data on the car, such as tyres, energy use and balance, to find improvements. The strategy team uses simulations to predict pit stop timing and race outcomes, and recommends calls such as pitting or staying out."],
      ["Mechanics and the pit crew", "Mechanics assemble, maintain and repair the car throughout the weekend. During a pit stop about twenty crew members work together: some remove and fit wheels, others operate the jacks and adjust the front wing if needed. A well-drilled stop takes around two to three seconds."],
      ["Factory and trackside", "Only a portion of a team travels to races. Back at the factory, hundreds of engineers work in aerodynamics, vehicle dynamics and power unit departments, designing new parts, testing them in wind tunnels and running simulators to support the trackside team."]
    ],
    [
      ["The driver's primary contact is...", "Race engineer", "Pit stop jackman", "Wind tunnel operator", 0],
      ["A typical pit stop duration is...", "2-3 seconds", "10 seconds", "1 minute", 0],
      ["Most team staff work...", "At the factory", "At the track", "Remotely from home", 0]
    ]
  )
];
