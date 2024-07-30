


// use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    // gsap code here!


    // gsap.to('.media', {
    //     scrollTrigger: {
    //         trigger: ".media",
    //         scrub: true,
    //         start: "top bottom",
    //         end: "top top",
    //         markers: true
    //     },
    //     x: 120,
    //     scaleX: 2.5,
    //     transformOrigin: "left center", 
    //     ease: "none"
        
    // });

    gsap.to('.media', {
        scrollTrigger: {
            trigger: ".content",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%",
            markers: true
        },
        // x: 120,
        scaleX: 19,
        transformOrigin: "left center", 
        ease: "none"
        
    }); 

   });


document.addEventListener("DOMContentLoaded", (event) => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)  

});


$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $(".navbar-link").click(function() {
        $(".navbar-dropdown").fadeToggle("is-hidden")
    });
  });