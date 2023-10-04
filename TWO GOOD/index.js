const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var buy = document.querySelector(".cool");
var bigcircle = document.querySelector(".bigc");

document.querySelector(".image").addEventListener("mouseenter",function(){
    gsap.to(buy,{
        opacity:1,
        scale:1
    })
})

document.querySelector(".image").addEventListener("mouseleave",function(){
    gsap.to(buy,{
        opacity:0,
        scale:0
    })
})




document.querySelector(".image").addEventListener("mousemove",function(dets){
    gsap.to(buy,{
        left: dets.x,
        top: dets.y
    })
})

gsap.from(".page1 h1",{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration:1,
    stagger: 0.4
})

gsap.from("img",{
    scale: 0.9,
    opacity: 0,
    delay: 0.5,
    duration:1.2 
})



var a = document.querySelectorAll(".imgur")

a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(bigcircle,{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(bigcircle,{
            opacity:0,
            scale:0
           })
    })
})

document.addEventListener("mousemove",function(dets){
    gsap.to(".bigc",{
        left: dets.x,
        top: dets.y
    })
})