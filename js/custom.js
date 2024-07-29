 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!

    gsap.to('.media', {
        scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
        x: 200
    });

   });