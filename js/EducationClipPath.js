const mainTextinEducation2 = document.getElementById('mainTextinEducation2')
const mainTextinEducation1 = document.getElementById('mainTextinEducation1')
const innerMainTextInEducation2 = document.getElementById('innerMainTextInEducation2')
const innerMainTextInEducation1 = document.getElementById('innerMainTextInEducation1')
const mainTextIneducation = document.getElementById('mainTextIneducation')
const mainEducationDiv = document.getElementById('mainEducationDiv')

window.addEventListener('mousemove', (e)=>{
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);


    gsap.to(mainTextinEducation2, {
        '--EduX': `${x}%`,
        '--EduY': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
})


mainTextIneducation.addEventListener('mouseenter', ()=>{
    mainTextinEducation2.classList.add( "clipPathForEducation" )
    cursor.classList.add('curserVanis')
})

mainTextIneducation.addEventListener('mouseleave', ()=>{
    mainTextinEducation2.classList.remove( "clipPathForEducation" )
    cursor.classList.remove( "curserVanis" )
})

