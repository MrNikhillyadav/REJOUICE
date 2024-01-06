gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


function cursoreffect(){
    var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener('mousemove', function(dets){
    // console.log(det);
    // cursor.style.left = dets.x + "px";
    // cursor.style.top = dets.y + "px";
    // i am using GSAP animation Library to make it more smooth
    gsap.to(cursor, {
        x: dets.x,
        y : dets.y,
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        scale : 1,
        opacity: 1,
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        scale : 0,
        opacity: 0,
    })

})
 }

 cursoreffect()

function animationPage2(){
    gsap.from("#page2 h1",{
        y:210,
        stagger:0.2,
        duration : .5,
        scrollTrigger:{
            trigger : "#page2",
            scroller: "#main",
            start : "top 40%",
            end : "top 37%",
            // markers: true,
            scrub : 2
        }
        
    })
    gsap.from("#small-heading  h2 ",{
        y:210,
        stagger:0.2,
        duration : .5,
        scrollTrigger:{
            trigger : "#page2",
            scroller: "#main",
            start : "top 70%",
            end : "top 71%",
            // markers: true,
            scrub : 2
        }
        
    })
    gsap.from("#small-heading  span ",{
        y:210,
        stagger:0.2,
        duration : .5,
        scrollTrigger:{
            trigger : "#page2",
            scroller: "#main",
            start : "top 70%",
            end : "top 71%",
            // markers: true,
            scrub : 2
        }
        
    })
}

animationPage2()


