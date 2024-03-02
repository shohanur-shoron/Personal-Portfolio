const messanger = document.getElementById("messanger");
const github = document.getElementById("github");
const facebook = document.getElementById("facebook");
const linkedIn = document.getElementById("linkedIn");

messanger.onclick = function() {
    window.open("https://www.messenger.com/t/100086789446744", "_blank");
};

github.onclick = function() {
    window.open("100% chance I read it.", "_blank");
};

facebook.onclick = function() {
    window.open("https://www.facebook.com/shohanur.rahman.shoron.bd", "_blank");
};

linkedIn.onclick = function() {
    window.open("https://www.linkedin.com/in/s-rahman-56b16b283/", "_blank");
};


//about me section scroll animation
const split = new SplitType('#myTextEffect')

gsap.registerPlugin(ScrollTrigger)

gsap.from(split.chars, {
    scrollTrigger: {
        trigger: '#myTextEffect',
        start: 'top 85%',
        end: 'bottom 85%',
        scrub: true,
        markers: false
    },
    stagger : 0.02,
    opacity: 0.2
})

const bottomTextAboutMe = document.getElementById('bottomTextAboutMe')
const aboutMe = document.getElementById('aboutMe')

bottomTextAboutMe.onclick = function(){
    aboutMe.scrollIntoView({
        behavior: "smooth"
    })
}

const bottomTextEduaction = document.getElementById('bottomTextEduaction')
const educationDiv = document.getElementById('educationDiv')

bottomTextEduaction.onclick = function(){
    educationDiv.scrollIntoView({
        behavior: "smooth"
    })
}

const bottomTextProjects = document.getElementById('bottomTextProjects')
const projectDiv = document.getElementById('projectDiv')

bottomTextProjects.onclick = function(){
    projectDiv.scrollIntoView({
        behavior: "smooth"
    })
}

const HomePageImage = document.getElementById('HomePageImage')
const mainSection = document.getElementById('mainSection')

HomePageImage.onclick = function(){
    mainSection.scrollIntoView({
        behavior: "smooth"
    })
}

const bottomTextContact = document.getElementById('bottomTextContact')
const contactDiv = document.getElementById('contactDiv')

bottomTextContact.onclick = function(){
    contactDiv.scrollIntoView({
        behavior: "smooth"
    })
}