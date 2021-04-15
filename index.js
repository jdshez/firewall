/************
   NAV MENU
 ***********/

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}







/*$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".zoom img").css({
          transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
          //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
          "-webkit-filter": "blur(" + (scroll/200) + "px)",
          filter: "blur(" + (scroll/200) + "px)"
      });
  });*/

  let t1 = gsap.timeline({
      scrollTrigger: {
          trigger: '.virt-fw',
          start: "top top"
      }
  });

  t1.from(".an-h4", {
      x:200,
      opacity:0,
      duration:1.5    
  })
//transform: scale(10),


/*
function animations() {
  let windowWidth = window.innerWidth;

  if (windowWidth >= 800) {
    const tl = new TimelineLite();

    tl.to(".first-hero-img", 2, {
      transform: "scale(10)",
      ease: Power2.easeOut,
    });

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      triggerElement: ".page-container",
      duration: 4000,
      triggerHook: 0,
    })
      .setTween(tl)
      .addTo(controller)}};*/
