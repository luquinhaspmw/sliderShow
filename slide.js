const slideshow = document.getElementById("containerSlideShow");
const listaSlideShow = document.getElementById("listSlides");

// slideshow.addEventListener("mouseover",()=>{
//     listaSlideShow.style.animationPlayState = "paused";
// })
// slideshow.addEventListener("mouseout",()=>{
//     listaSlideShow.style.animationPlayState = "running";
// })

slideshow.addEventListener("mousedown",()=>{
    listaSlideShow.style.animationPlayState = "paused";
})
slideshow.addEventListener("mouseup",()=>{
    listaSlideShow.style.animationPlayState = "running";
})

setInterval(()=>{
    document.body.onresize = ()=>{
        let px = window.innerWidth+"px";
        document.documentElement.style.setProperty("--screenActive", px)
    
        if(window.innerWidth > 700 && window.innerWidth < 900){
            slideshow.classList.add("active-grid");
        }else{
            slideshow.classList.remove("active-grid");
        }
    }
    let px = window.innerWidth+"px";
    document.documentElement.style.setProperty("--screenActive", px)
},1)

