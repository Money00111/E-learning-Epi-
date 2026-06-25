const content=document.getElementById("lessonBox");

let lessons=[];

let current=0;

const script=document.createElement("script");

const subject=

localStorage.getItem(

"subject"

);

script.src=

"data/"

+

subject

+

".js";

script.onload=()=>{

lessons=window.lessons;

showLesson();

updateProgress();

};

document.body.appendChild(script);



function showLesson(){

const l=lessons[current];

content.innerHTML=`

<div class="lesson-card">


<img src="${l.image}"

class="lesson-image">


<h2>${l.title}</h2>


<p>${l.text}</p>


<button onclick="toggleAnswer()">

Show Answer

</button>



<div id="answer"

style="display:none;">


${l.answer}


</div>


</div>

`;

}


function toggleAnswer(){

const a=document.getElementById("answer");

a.style.display=

a.style.display==="none"

?

"block"

:

"none";

}



function nextLesson(){

if(

current<lessons.length-1

){

current++;

showLesson();

updateProgress();

}

}



function previousLesson(){

if(current>0){

current--;

showLesson();

updateProgress();

}

}



function updateProgress(){

let p=Math.round(

((current+1)

/lessons.length)

*100

);



document.getElementById(

"bar"

).style.width=

p+"%";



document.getElementById(

"percent"

).innerHTML=

p+"%";

}

const lessons = [
  {
    title: "Driving Position",
    image: "images/driving_position.png",
    text: "Wicara neza ku ntebe, ugafata steering wheel neza."
  },
  {
    title: "Give Way",
    image: "images/giveway.png",
    text: "Tanga inzira ku bandi batwaye ibinyabiziga."
  },
  {
    title: "Green Arrow",
    image: "images/green_arrow.png",
    text: "Icyatsi kerekana ko wemerewe kunyura."
  },
  {
    title: "Indicator Use",
    image: "images/indicator_use.png",
    text: "Koresha indangururamucyo mbere yo guhindura direction."
  },
  {
    title: "Mirror Check",
    image: "images/mirror_check.png",
    text: "Reba indorerwamo mbere yo guhindura lane."
  },
  {
    title: "No Entry",
    image: "images/no_entry.png",
    text: "Aha ntibyemewe kwinjira."
  },
  {
    title: "No Parking",
    image: "images/no_parking.png",
    text: "Ntibyemewe guhagarara aha."
  },
  {
    title: "Pedestrian Crossing",
    image: "images/pedestrian_crossing.png",
    text: "Hita witonda aho abanyamaguru banyura."
  },
  {
    title: "Red Pedestrian Light",
    image: "images/red_pedestrian.png",
    text: "Aha abanyamaguru bagomba guhagarara."
  },
  {
    title: "Road Works",
    image: "images/road_works.png",
    text: "Hari imirimo y'umuhanda, genda buhoro."
  },
  {
    title: "Roundabout",
    image: "images/roundabout.png",
    text: "Inzira y’izunguruka, ugomba kuyitaho."
  },
  {
    title: "School Crossing",
    image: "images/school_crossing.png",
    text: "Aha abana bambuka, genda gahoro."
  },
  {
    title: "Seat Belt",
    image: "images/seat_belt.png",
    text: "Ambara umukandara w’umutekano."
  },
  {
    title: "Slippery Road",
    image: "images/slippery_road.png",
    text: "Umuhanda unyerera, genda witonze."
  },
  {
    title: "Speed Limit",
    image: "images/speed_limit.png",
    text: "Ntukarenge umuvuduko wagenwe."
  },
  {
    title: "Stop",
    image: "images/stop.png",
    text: "Hagarara burundu mbere yo gukomeza."
  },
  {
    title: "Traffic Light (All)",
    image: "images/traffic_light_all.png",
    text: "Amatara yose y’ibarabara."
  },
  {
    title: "Traffic Light Green",
    image: "images/traffic_light_green.png",
    text: "Icyatsi: genda."
  },
  {
    title: "Traffic Light Red",
    image: "images/traffic_light_red.png",
    text: "Umutuku: hagarara."
  },
  {
    title: "Traffic Light Yellow",
    image: "images/traffic_light_yellow.png",
    text: "Umuhondo: tegereza."
  },
  {
    title: "Turn Left",
    image: "images/turn_left.png",
    text: "Erekana cyangwa hindukira ibumoso."
  },
  {
    title: "Turn Right",
    image: "images/turn_right.png",
    text: "Erekana cyangwa hindukira iburyo."
  }
];
