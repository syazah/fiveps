
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


//MEME PAGE CONTENT
const memeHeader = document.querySelector('.memePageBox h3');
const memeImg = document.querySelector('.memePageBox img');

window.addEventListener('DOMContentLoaded', ()=>{
    const randomMemeIndex = Math.floor(Math.random() * 100);
    const memeApi = fetch('https://api.imgflip.com/get_memes').then((response)=>{
    return response.json();
    }).then((datas)=>{
    console.log(datas.data.memes[randomMemeIndex]);
    memeHeader.innerHTML = datas.data.memes[randomMemeIndex].name;
    memeImg.src = datas.data.memes[randomMemeIndex].url;}).catch((error)=>{
    console.log(`ERROR DETECTED ${error}`);
    }).finally(()=> console.log(`DONE`));
})
document.querySelector('.memePageBox').addEventListener('click', ()=>{
    const randomMemeIndex = Math.floor(Math.random() * 100);
    const memeApi = fetch('https://api.imgflip.com/get_memes').then((response)=>{
    return response.json();
    }).then((datas)=>{
    console.log(datas.data.memes[randomMemeIndex]);
    memeHeader.innerHTML = datas.data.memes[randomMemeIndex].name;
    memeImg.src = datas.data.memes[randomMemeIndex].url;}).catch((error)=>{
    console.log(`ERROR DETECTED ${error}`);
    }).finally(()=> console.log(`DONE`));
})