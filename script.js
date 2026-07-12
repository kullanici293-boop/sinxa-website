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
