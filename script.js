// SINXA PREMIUM INTERACTIONS


// Sayfa açılış efekti

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});




// Scroll ile kartların görünmesi


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


},
{
threshold:0.15
});



document.querySelectorAll(
".lux-card, .tech-box div, .road-item, .community-box"
)
.forEach((el)=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all 0.8s ease";


observer.observe(el);


});







// Mouse ışık efekti


const light = document.createElement("div");

light.className="mouse-light";

document.body.appendChild(light);



document.addEventListener("mousemove",(e)=>{


light.style.left=e.clientX+"px";

light.style.top=e.clientY+"px";


});







// Logo hareket efekti


const logo=document.querySelector(".logo");


document.addEventListener("mousemove",(e)=>{


let x=(window.innerWidth/2-e.clientX)/80;

let y=(window.innerHeight/2-e.clientY)/80;


logo.style.transform=
`translate(${x}px,${y}px)`;


});







// Buton hover sesi hazırlığı


document.querySelectorAll("a,button")
.forEach(btn=>{


btn.addEventListener("mouseenter",()=>{


btn.style.transform="scale(1.05)";


});


btn.addEventListener("mouseleave",()=>{


btn.style.transform="scale(1)";


});


});

// SINXA 5 DAY COUNTDOWN

let savedDate = localStorage.getItem("sinxaLaunch");

if(!savedDate){

savedDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

localStorage.setItem("sinxaLaunch", savedDate);

}


const launchDate = Number(savedDate);


setInterval(()=>{

const now = new Date().getTime();

const distance = launchDate - now;


const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor(
(distance % (1000*60*60*24)) /
(1000*60*60)
);

const minutes = Math.floor(
(distance % (1000*60*60)) /
(1000*60)
);

const seconds = Math.floor(
(distance % (1000*60)) /
1000
);


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;


},1000);
let launchTime = localStorage.getItem("sinxaLaunchTime");

if(!launchTime){

launchTime = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

localStorage.setItem("sinxaLaunchTime", launchTime);

}


setInterval(()=>{

let now = new Date().getTime();

let distance = launchTime - now;


let days = Math.floor(distance / (1000*60*60*24));

let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

let minutes = Math.floor((distance % (1000*60*60))/(1000*60));

let seconds = Math.floor((distance % (1000*60))/1000);


document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;


},1000);
// SINXA AI ASSISTANT

function toggleAI(){

let box = document.getElementById("aiBox");

if(box.style.display === "block"){

box.style.display = "none";

}else{

box.style.display = "block";

}

}



function askAI(question){

let chat = document.getElementById("aiChat");


let answer = "";


if(question === "launch"){

answer = "🚀 SINXA launch is coming soon. Stay tuned for official updates.";

}


if(question === "telegram"){

answer = "Join our official Telegram community: https://t.me/SINXAOfficial";

}


if(question === "x"){

answer = "Follow SINXA on X: https://x.com/sinxaToken";

}


if(question === "about"){

answer = "SINXA is a community-driven Web3 project focused on building a strong ecosystem.";

}



chat.innerHTML = "<p>" + answer + "</p>";

}
function sendAI(){

let question = document.getElementById("aiQuestion").value.toLowerCase();

let chat = document.getElementById("aiChat");

let answer = "";


if(question.includes("launch") || question.includes("when")){

answer="🚀 SINXA launch is coming soon. Follow our official channels for updates.";

}

else if(question.includes("telegram")){

answer="Join our Telegram: https://t.me/SINXAOfficial";

}

else if(question.includes("x") || question.includes("twitter")){

answer="Follow us on X: https://x.com/sinxaToken";

}

else if(question.includes("sinxa")){

answer="SINXA is a community-driven Web3 project built around a strong ecosystem and community.";

}

else if(question.includes("email") || question.includes("contact")){

answer="Contact us: team.sinxa@gmail.com";

}

else{

answer="Thanks for your question! Our team will share more details soon. 🚀";

}


chat.innerHTML="<p>"+answer+"</p>";

document.getElementById("aiQuestion").value="";

}
