var tl = gsap.timeline();

tl.from('.nav', {
  opacity: 0,
  duration: 1
})
tl.from('.nav h1, .nav .nav-part2 li, .nav .action-btn', {
  y: -80,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3
})
tl.from('.left h1', {
  x: -200,
  opacity: 0,
  stagger: 0.3
})
tl.from('.right img', {
  scale: 0.5,
  opacity: 0
})


gsap.from('.box', {
  scale: 0.7,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page2 .box",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
    markers: true,
  }
})