const cursor = document.getElementById('cursor')
const socialIcons = document.getElementsByClassName('socialIcons')
const navbar = document.getElementById('navbar')

window.addEventListener( 'mousemove', (e) => {
    let posY = e.clientX;
    let posX = e.clientY;

    gsap.to(cursor, {
        '--posX':`${posX}px`,  
        '--posY': `${posY}px`,  
        duration: 0.3,
        ease: 'sine.out'
    })
})

for(let i=0; i<socialIcons.length;i++){
    socialIcons[i].addEventListener("mouseenter", ()=>{
        cursor.classList.add('semiBiggerCursor')
    })
    socialIcons[i].addEventListener("mouseleave", ()=>{
        cursor.classList.remove('semiBiggerCursor')
    })
}

navbar.addEventListener('mouseenter', ()=>{
    cursor.classList.add('smallCursor')
})

navbar.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('smallCursor')
})

const projectMenu = document.getElementById('coverContainer')
const myTextEffect = document.getElementById('myTextEffect')

projectMenu.addEventListener('mouseenter', ()=>{
    cursor.classList.add('blandeMode')
})

projectMenu.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('blandeMode')
})

myTextEffect.addEventListener('mouseenter', ()=>{
    cursor.classList.add('blandeMode')
})

myTextEffect.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('blandeMode')
})