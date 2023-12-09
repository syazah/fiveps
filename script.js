if(history.replaceState) history.replaceState({}, "", "/home");
/*mail*/
let submitMail = document.querySelector('#subMail');
submitMail.addEventListener('click', (e)=>{
    let params = {
        from_name : document.querySelector('#fullName').value,
        message: document.querySelector('#queryMsg').value,
        email_id: document.querySelector('#emailId').value,
        contact_number: document.querySelector('#numberCon').value,
        job_category: document.querySelector('#jobCat').value
    }
    emailjs.send("service_lmqompe","template_wk5181i", params, "pb1q_60WKGGV4lqrV").then(function(response){
        alert('SUCCESS! YOUR MESSAGE IS SENT WE WILL CONTACT YOU SOON', response.status, response.text);
        document.querySelector('#fullName').value = ''
        document.querySelector('#queryMsg').value = ''
        document.querySelector('#emailId').value = ''
        document.querySelector('#numberCon').value = ''
        document.querySelector('#social-handle').value = ''
    });
})

//ENQUIRE
let enquireBtn = document.querySelector('.enquireNow');
enquireBtn.addEventListener('click', ()=>{
    location.href = 'https://wa.me/9350612825';
})

function buttonMoveToWhatsapp(){
    location.href = 'https://wa.me/9350612825';
}


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

/*HEADER SLIDERS*/
const slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let bars = document.querySelectorAll('.bar');
let currentSlide = 1;

let manualNav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
    })
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn,i)=>{
    btn.addEventListener('click', ()=>{
        manualNav(i);
        currentSlide = i;
    })
})
let i = 1;

setInterval(()=>{
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    })
    btns[i].classList.add('active');
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    })
    slides[i].classList.add('active');
    i++;
    if(i == 4){
        i = 0;
    }
}, 4000);

/*MH SCROLLER*/
gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

let headText = document.querySelectorAll('.headText h1');
gsap.from(headText, {
    scrub: 1,
    duration: 1,
    ease: "bounce.out",
    y: -1000,
    stagger: 1,
})

gsap.from(".PE1Text", {
    scrollTrigger: {trigger:".PE1Img", start: "top bottom"},
    duration:1, // start the animation when ".box" enters the viewport (once)
    opacity:0,
    y:-100
  });
  gsap.from(".PE1Img", {
    scrollTrigger: {trigger:".PE1Img", start: "top bottom"},
    duration:1, // start the animation when ".box" enters the viewport (once)
    opacity:0,
    y:-200
  });

  gsap.from(".PE2C", {
    scrollTrigger: {trigger:".PE1Img", start: "top top"},
    duration:1,
    stagger:0.5, // start the animation when ".box" enters the viewport (once)
    opacity:0,
    x:-200
  });
  gsap.from(".PE3C", {
    scrollTrigger: {trigger:".PE3C", start: "top center"},
    duration:1,
    stagger:0.5, // start the animation when ".box" enters the viewport (once)
    opacity:0,
    x:-200
  });







