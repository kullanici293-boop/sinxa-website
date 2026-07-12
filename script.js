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
