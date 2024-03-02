const myText = new SplitType('#my-text')
gsap.registerPlugin(ScrollTrigger)

gsap.from(myText.chars, {
    y: 130,
    stagger:0.01
})

var delayInMilliseconds = 1830;

setTimeout(function() {
    gsap.to(myText.chars, {
        y: -130,
        stagger:0.01
    })
}, delayInMilliseconds);