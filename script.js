// X3D SNOW EFFECT ❄️


const snow = document.getElementById("snow");


function createSnow(){

    const flake = document.createElement("div");

    flake.innerHTML = "❄";

    flake.style.position = "fixed";

    flake.style.top = "-20px";

    flake.style.left = Math.random()*100 + "vw";

    flake.style.fontSize =
    Math.random()*20 + 10 + "px";


    flake.style.color = "white";

    flake.style.opacity =
    Math.random();


    flake.style.filter =
    "drop-shadow(0 0 8px white)";


    flake.style.animation =
    `snowfall ${Math.random()*5+5}s linear`;



    snow.appendChild(flake);



    setTimeout(()=>{

        flake.remove();

    },10000);

}



setInterval(createSnow,150);





// плавное появление блоков


const elements =
document.querySelectorAll(
".card,.price,.creator-box,.images img"
);



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


});



elements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="1s";


observer.observe(el);


});







// добавляем анимацию снега


const style = document.createElement("style");


style.innerHTML = `


@keyframes snowfall{


from{

transform:translateY(0) rotate(0deg);

}


to{

transform:translateY(110vh) rotate(360deg);

}


}


`;



document.head.appendChild(style);