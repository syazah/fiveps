if(history.replaceState) history.replaceState({}, "", "/contact");
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