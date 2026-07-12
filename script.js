// SINXA Website Animations


// Scroll reveal effect

const sections = document.querySelectorAll(".section, .hero-content, .hero-card");


const reveal = () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};



sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});



window.addEventListener("scroll", reveal);

reveal();





// Background glow movement


const glow = document.querySelector(".background-glow");


document.addEventListener("mousemove", (e)=>{


    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;


    glow.style.transform = 
    `translate(${x * 80}px, ${y * 80}px)`;


});





// Button hover effect


const buttons = document.querySelectorAll("a, button");


buttons.forEach(button => {


button.addEventListener("mouseenter",()=>{

    button.style.transform="scale(1.05)";

});


button.addEventListener("mouseleave",()=>{

    button.style.transform="scale(1)";

});


});
