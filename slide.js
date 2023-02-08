const slideshow = document.getElementById("containerSlideShow");
const listaSlideShow = document.getElementById("listSlides");

slideshow.addEventListener("mouseover",()=>{
    listaSlideShow.style.animationPlayState = "paused";
})
slideshow.addEventListener("mouseout",()=>{
    listaSlideShow.style.animationPlayState = "running";
})

document.body.onresize = ()=>{
    let px = window.innerWidth+"px";
    document.documentElement.style.setProperty("--screenActive", px)
    console.log(px)
}