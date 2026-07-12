// SINXA Web3 Animations


// Scroll reveal animation

const elements = document.querySelectorAll(
".section, .hero-content, .hero-coin"
);


elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

});



function reveal(){

    elements.forEach(el=>{

        let position = el.getBoundingClientRect().top;

        let screen = window.innerHeight;


        if(position < screen - 100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }


    });

}


window.addEventListener("scroll",reveal);

reveal();






// Connect Wallet simulation


const walletButtons = document.querySelectorAll(
"#connectWallet, #heroWallet"
);



walletButtons.forEach(button=>{


button.addEventListener("click",()=>{


button.innerHTML="Connecting...";


setTimeout(()=>{


button.innerHTML="Wallet Connected ✓";


button.style.background="#00ff88";


alert(
"🚀 SINXA Web3 Wallet\n\nWallet connection will be available soon."
);


},1500);



});


});






// Mouse glow movement


document.addEventListener(
"mousemove",
(e)=>{


const x = e.clientX / window.innerWidth;

const y = e.clientY / window.innerHeight;


document.body.style.setProperty(
"--mouse-x",
x
);


document.body.style.setProperty(
"--mouse-y",
y
);


});







// Button animation


const buttons=document.querySelectorAll(
"button, a"
);



buttons.forEach(btn=>{


btn.addEventListener(
"mouseenter",
()=>{

btn.style.transform="scale(1.05)";

});


btn.addEventListener(
"mouseleave",
()=>{

btn.style.transform="scale(1)";

});


});






// Floating coin effect


const coin=document.querySelector(".hero-coin");


if(coin){


document.addEventListener(
"mousemove",
(e)=>{


let moveX =
(e.clientX-window.innerWidth/2)/50;


let moveY =
(e.clientY-window.innerHeight/2)/50;


coin.style.transform =
`translate(${moveX}px,${moveY}px)`;


});

}
// SINXA Assistant


const chatButton =
document.getElementById("chatButton");


const chatBox =
document.getElementById("chatBox");



chatButton.onclick = ()=>{

if(chatBox.style.display==="block"){

chatBox.style.display="none";

}

else{

chatBox.style.display="block";

}

};



function botReply(type){


const chat =
document.getElementById("chatContent");


let answer="";


if(type==="about"){

answer=
"SINXA is a community-driven Web3 project focused on innovation and long-term growth.";

}



if(type==="roadmap"){

answer=
"Our roadmap focuses on community growth, partnerships and building the SINXA ecosystem.";

}



if(type==="community"){

answer=
"Join our community on X and Telegram to follow updates.";

}



if(type==="token"){

answer=
"SINXA tokenomics and ecosystem details will be shared with the community.";

}



chat.innerHTML =
"<p>"+answer+"</p>";

// =============================
// SINXA Launch Countdown
// =============================

const launchDate = new Date(2026, 6, 17, 20, 0, 0).getTime();

function updateCountdown() {

const countdown = document.querySelector(".countdown");

if(!countdown) return;

const now = Date.now();

const distance = launchDate - now;

if(distance <= 0){

countdown.innerHTML = `
<h1 style="
color:#FFD700;
font-size:48px;
text-align:center;
text-shadow:0 0 20px gold;">
🚀 SINXA IS NOW LIVE 🚀
</h1>`;

return;

}

document.getElementById("days").textContent =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("hours").textContent =
Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

document.getElementById("minutes").textContent =
Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

document.getElementById("seconds").textContent =
Math.floor((distance % (1000 * 60)) / 1000);

}

updateCountdown();

setInterval(updateCountdown,1000);
