var tl = gsap.timeline();

function time() {
    return new Promise((resolve, reject) => {
            var a = 0;
            var interval = setInterval(function() {
            a += Math.floor(Math.random()*20);
            if (a<100) {
                document.querySelector(".loader>h1").innerHTML = `${a}%`;
            } else {
                a = 100;
                document.querySelector(".loader>h1").innerHTML = `${a}%`;
                clearInterval(interval);
                resolve("yes");
            }
         },150);
    })
}
async function starter() {
    let x = await time();
    tl.to(".loader h1", {
        scale: 1.1,
    })
    tl.to(".loader", {
        y: "-100%",
        duration: 0.5,
    })
    console.log(x);
}
starter();

gsap.to(".page1 h1", {
    x: "-65%",
    fontWeight: 100,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        // markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 3,
        pin: true
    }
})