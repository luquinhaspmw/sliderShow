window.onload = ()=>{
    const slideshow = document.getElementById("containerSlideShow");
    setInterval(()=>{
        if(window.innerWidth > 700 && window.innerWidth < 900){
            slideshow.classList.add("active-grid");
        }else{
            slideshow.classList.remove("active-grid");
        }
        document.documentElement.style.setProperty("--screenActive", window.innerWidth+"px")
    },10)
}