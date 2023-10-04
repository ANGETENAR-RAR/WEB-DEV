

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
document.body.style.cursor = 'none';
// var timeout;

function firstpageanim(){
    var tl = gsap.timeline();

    tl.from(".nav",{
        y: "-10",
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
     .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1.5,
        stagger: .2
     })
     .from(".footer",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay: -1.5,
        ease: Expo.easeInOut
     })
}

function mouseskew(){
    // clearTimeout(timeout);
    var xscale = 1;
    var yscale = 1;

    var xprev =0;
    var yprev =0;
    window.addEventListener("mousemove",(dets)=>{
        xscale = gsap.utils.clamp(0.6,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.6,1.2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;
        mousemove(xscale, yscale);

    //    timeout =  setTimeout(function(){
    //         document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1, 1)`;
    //     },100)
    })
}

function mousemove(xscale, yscale){
    window.addEventListener("mousemove",function (dets){
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}




mouseskew();
mousemove();
firstpageanim();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });