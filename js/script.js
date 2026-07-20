/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1500);

    }

});

/*=========================================
        SMOOTH SCROLL BUTTON
=========================================*/

function scrollToSection(id){

    document.getElementById(id).scrollIntoView({

        behavior:"smooth"

    });

}

/*=========================================
            COUNTDOWN
=========================================*/

const countdown = document.getElementById("countdown");

if(countdown){

    function updateCountdown(){

        const targetDate = new Date("September 20, 2026 00:00:00").getTime();

        const now = new Date().getTime();

        const difference = targetDate - now;

        if(difference <= 0){

            countdown.innerHTML =
            "❤️ Happy 10 Months My Love ❤️";

            return;

        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdown.innerHTML =

        `${days} Days <br>
         ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }

    updateCountdown();

    setInterval(updateCountdown,1000);

}

/*=========================================
            SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll("section");

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();

/*=========================================
        HEARTS ON CLICK
=========================================*/

document.addEventListener("click",(e)=>{

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1500);

});

/*=========================================
        SUNFLOWER PETALS
=========================================*/

function createSunflower(){

    const flower=document.createElement("div");

    flower.className="sunflower";

    flower.innerHTML="🌻";

    flower.style.left=Math.random()*100+"vw";

    flower.style.fontSize=(20+Math.random()*25)+"px";

    flower.style.animationDuration=(6+Math.random()*6)+"s";

    document.body.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },12000);

}

setInterval(createSunflower,900);

/*=========================================
        WELCOME MESSAGE
=========================================*/

setTimeout(()=>{

    alert(
`💛

Welcome Reabetswe!

This little website was made with so much love by Remoratile.

I hope it reminds you just how proud she is of you.

Enjoy your surprise ❤️`
    );

},2200);

/*=========================================
        FOOTER SURPRISE
=========================================*/

window.addEventListener("scroll",()=>{

    const scrollTop=window.scrollY;

    const pageHeight=document.documentElement.scrollHeight-window.innerHeight;

    if(scrollTop>pageHeight-20){

        const footer=document.querySelector("footer");

        if(!footer.dataset.message){

            footer.dataset.message="shown";

            setTimeout(()=>{

                alert(
`🌻

Reabetswe,

Good luck with your final semester.

Keep building your dreams.

I'll always be your biggest supporter.

❤️ Love,
Remoratile`
                );

            },1000);

        }

    }

});

/*=========================================
        BUTTON HOVER SOUND (OPTIONAL)
=========================================*/

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log(`
❤️

Made with love.

For Reabetswe.

By Remoratile.

Good luck with your final semester!

🌻
`);
