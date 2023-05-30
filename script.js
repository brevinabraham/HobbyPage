const splash = document.querySelector(".splashscreen");

document.addEventListener('DOMContentLoaded',e => {
    setTimeout(() => {
        console.log(splash.classList)
        splash.classList.add('displacenone');
    }, 2000);
})


let todayDate = new Date();

document.getElementById("showDate").innerHTML = todayDate;