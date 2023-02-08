const slideshow = document.getElementById("containerSlideShow");
const listaSlideShow = document.getElementById("listSlides");

slideshow.addEventListener("mouseover",()=>{
    listaSlideShow.style.animationPlayState = "paused";
})
slideshow.addEventListener("mouseout",()=>{
    listaSlideShow.style.animationPlayState = "running";
})