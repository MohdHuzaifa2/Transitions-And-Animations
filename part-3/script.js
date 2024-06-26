var tl = gsap.timeline();

tl.from("nav img, nav span, nav button", {
  y:-100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2
})

tl.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.2
})

tl.from(".image-group img", {
  scale: 0,
  opacity: 0,
  stagger: 0.2
})

tl.from(".scroll", {
  scale: 0,
  opacity: 0,
})
tl.to(".scroll", {
  y: 30,
  repeat: -1,
  duration: 0.5,
  yoyo: true
})