const mainText2 = document.getElementById('mainText2')
const innerText2 = document.getElementById('innerText2')
const innerText1 = document.getElementById('innerText1')

const projectDivText2 = document.getElementById('projectDivText2')
const projectDivText = document.getElementById('projectDivText')



window.addEventListener('mousemove', (e)=>{
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(mainText2, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })

    gsap.to(projectDivText2, {
        '--ProX': `${x}%`,
        '--ProY': `${y}%`,
        duration: 0.3,
        ease: 'sine.out'
    })
})

projectDivText.addEventListener('mouseenter', ()=>{
    projectDivText2.classList.add( "clipPathForProject" )
    cursor.classList.add('curserVanis')
})

projectDivText.addEventListener('mouseleave', ()=>{
    projectDivText2.classList.remove( "clipPathForProject" )
    cursor.classList.remove( "curserVanis" )
})

innerText1.addEventListener('mouseenter', ()=>{
    mainText2.classList.add( "clipPath" )
    cursor.classList.add('curserVanis')
})

innerText1.addEventListener('mouseleave', ()=>{
    mainText2.classList.remove( "clipPath" )
    cursor.classList.remove( "curserVanis" )
})

innerText2.addEventListener('mouseenter', ()=>{
    mainText2.classList.add( "clipPath" )
    cursor.classList.add('curserVanis')
})

innerText2.addEventListener('mouseleave', ()=>{
    mainText2.classList.remove( "clipPath" )
    cursor.classList.remove( "curserVanis" )
})