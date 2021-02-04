function parrallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll',function(){
    parrallax("section",window.scrollY,1);
});