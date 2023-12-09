if(history.replaceState) history.replaceState({}, "", "/blog");

const overLayBar = document.querySelector('.overlayBar');
const closeBar = document.querySelector('.closeOverlay');
closeBar.addEventListener('click', (e)=>{
    overLayBar.classList.remove('overlayBarUnhide');
    gsap.from('.overlayBarUnhide', {
        y:-100,
        opacity:0,
        duration:1
    })
});
const navServices = document.querySelector('#navbarServices');
navServices.addEventListener('click', ()=>{
    overLayBar.classList.add('overlayBarUnhide');
})