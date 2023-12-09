if(history.replaceState) history.replaceState({}, "", "/ourwork");
/*OVERLAYBAR*/
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

// MOCKUPS 
let mockupBtn = document.querySelectorAll('.mockup-buttons');
let websitesMockups = document.querySelector('#websitesMockups');
let digitalMarkMockups = document.querySelector('#digitalMarkMockups');
mockupBtn.forEach((e)=>{
    e.addEventListener('click', ()=>{
        mockupBtn.forEach((el)=>{
            el.classList.remove('mockup-buttons-active')
        })
        e.classList.add('mockup-buttons-active')
        if(e.id == 'websiteMockupButton'){
            gsap.from('#webMockUpCard', {
                opacity:0,
                x:-100,
                scale:0.2,
                duration:1,
                stagger:0.2
            })
            digitalMarkMockups.classList.add('mockup-hide');
            websitesMockups.classList.remove('mockup-hide');
        }
        else{
            gsap.from('#digMockUpCard', {
                opacity:0,
                x:-100,
                scale:0.2,
                duration:1,
                stagger:0.2
            })
            digitalMarkMockups.classList.remove('mockup-hide');
            websitesMockups.classList.add('mockup-hide');
        }
    })
})

