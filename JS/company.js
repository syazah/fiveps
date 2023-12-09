if(history.replaceState) history.replaceState({}, "", "/about");
let paraCollection = ['This stage is primarily about establishing the foundations. Exploratory discussions are held to build the project’s framework, and intelligent questioning is used to clarify the goals.', 'We develop a feeling of direction through strategic planning. We look at the competitive landscape, conduct research on the target audience, and look into new ideas.', 'The least process-driven stage is this one. We allow our creativity to run wild within the confines of our previous listening and thinking. We make, build, shape, and craft according to a set of rules.', 'Our creativity is guided by the rigour of deadlines and budgets. Our project managers maintain contact with our clients and reality because they have their feet on the ground.'];
const selectPara = document.querySelector('#selectPara');
const selectors = document.querySelectorAll('.aboutSelectors');
selectors.forEach((slect,i)=>{
    slect.addEventListener('click', ()=>{
        selectors.forEach((s)=>{
            s.classList.remove('aboutSelectorsActive');
        })
        selectors[i].classList.add('aboutSelectorsActive');
        selectPara.innerHTML = paraCollection[i];
    })
})

//MENU
/*OVERLAYBAR*/
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
gsap.registerPlugin(ScrollTrigger) 
gsap.from('.aboutImgHeader', {
    x:-100,
    y:-50,
    opacity:0,
    duration:1
})

gsap.from('.overviewImg', {
    ScrollTrigger:{
        trigger:'.aboutOverview',
        start:'bottom top ',
        scrub:1
    },
    x:-100,
    y:-50,
    opacity:0,
    duration:1
})