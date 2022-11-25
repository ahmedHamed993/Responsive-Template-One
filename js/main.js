let menuIcon = document.getElementById("links-toggler");
let navLinks = document.querySelector(".navbar .nav-links");
let megaMenuToggler = document.querySelector(".navbar .link.mega-menu-toggler");
let megaMenu = document.querySelector(".navbar .mega-menu");
let skillSection = document.querySelector(".skills");
let skillDivs = document.querySelectorAll(".skills .skill") ;
let progressVals = document.querySelectorAll(".skills .skill .data span");
let progressBar = document.querySelectorAll(".skills .skill .prgrs div");
//stats seciton vars 
let statsSec = document.querySelector(".stats");
let statsAnimateStart = false;
let widthAnimateStarted = false;
let megaOpened = false;
// handle navbar icon click 
menuIcon.onclick = ()=>{
    navLinks.classList.toggle("show");
}
// toggle visibility of mega menu 
megaMenuToggler.addEventListener("click", ()=>{
    megaMenu.classList.toggle("show");
    megaOpened = !megaOpened;
});
megaMenu.querySelector(".close").onclick = ()=>{
    megaMenu.classList.remove("show");
    megaOpened = close;
}
// make countup & width animation when skills section in view
window.onscroll = ()=> {
    if(window.scrollY > skillSection.offsetTop - 100 && !widthAnimateStarted)
    {
        skillDivs.forEach(el => {
            let span = el.querySelector(".data span");

            let inc = setInterval(()=> {
                    span.textContent++;
                    if(span.textContent == el.dataset.progress)
                    {
                        clearInterval(inc);
                    }
            },.5 / el.dataset.progress);

            el.querySelector(".prgrs div").style.width = `${el.dataset.progress}%`;
            widthAnimateStarted = true;
        });
    }
    if(window.scrollY > statsSec.offsetTop - 200 && !statsAnimateStart)
    {
        let nums = statsSec.querySelectorAll('.num');
        nums.forEach((num)=> {
            let goal = num.dataset.goal;
            let counter = setInterval(()=> {
                num.textContent++;
                if(num.textContent == goal)
                {
                    clearInterval(counter);
                }

            }, 30 )
        }) 

        statsAnimateStart = true;
    }
}



let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(()=> {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));
    
    document.querySelector(".events .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }

},1000);