// =========================
// SCROLL ANIMATION
// =========================


const elements = document.querySelectorAll(
    ".card, .road-card, section h2, .about p"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";


        }


    });


},{
    threshold:0.2
});



elements.forEach(el=>{


    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=
    "all .8s ease";


    observer.observe(el);


});









// =========================
// BUTTON EFFECTS
// =========================


const buttons =
document.querySelectorAll("button");


buttons.forEach(button=>{


    button.addEventListener(
        "mouseenter",
        ()=>{

            button.style.transform=
            "scale(1.05)";

        }
    );



    button.addEventListener(
        "mouseleave",
        ()=>{

            button.style.transform=
            "scale(1)";

        }
    );


});










// =========================
// BACKGROUND MOVEMENT
// =========================


const circles =
document.querySelectorAll(".circle");



document.addEventListener(
"mousemove",
(e)=>{


    let x =
    e.clientX / window.innerWidth;


    let y =
    e.clientY / window.innerHeight;



    circles.forEach((circle,index)=>{


        circle.style.transform =
        `
        translate(
        ${x * (index+1)*20}px,
        ${y * (index+1)*20}px
        )
        `;


    });



});









// =========================
// CONNECT WALLET BUTTON
// =========================


const wallet =
document.querySelector(".connect");



if(wallet){


wallet.addEventListener(
"click",
()=>{


    alert(
    "Wallet connection will be available soon!"
    );


});


}









// =========================
// SIMPLE TOKEN COUNTER
// =========================


let supply = 1000000000;


const supplyBox =
document.querySelector(".card:nth-child(2) p");



if(supplyBox){


let current = 0;



let counter =
setInterval(()=>{


    current += 50000000;



    if(current >= supply){

        current=supply;

        clearInterval(counter);

    }



    supplyBox.innerHTML =
    current.toLocaleString();



},50);



}
