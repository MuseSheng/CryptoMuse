AOS.init();

document.addEventListener("DOMContentLoaded", function(){
    if(JSON.parse(localStorage.getItem('mode')) === 1){
        let y=document.querySelectorAll(".dark");
        
        for (let i = 0; i < y.length; i++) {                  
            y[i].classList.remove('dark');
            y[i].classList.add('light');
            document.getElementById("switchIcon").textContent="dark_mode";
            light=1;
            y[i].style.transition = 'all, 0s';
        }
    }
    else if(JSON.parse(localStorage.getItem('mode')) === 0){
        let y=document.querySelectorAll(".light");

        for (let i = 0; i < y.length; i++) {                    
            y[i].classList.remove('light');
            y[i].classList.add('dark');
            document.getElementById("switchIcon").textContent="wb_sunny";
            light=0;
            y[i].style.transition = 'all, 0s';
        }
    }
});

/* swiper_1 */

let title = ['Decentralized', 'NFT Marketplace', 'Up to 100x Leverage'];
let des = ['Secured and easy to use', 'Explore, collect, and sell', 'Perpetual Futures'];
let mySwiper = new Swiper ('#swiper_1', {
    speed: 1000,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
      },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
		clickable: true,  
        renderBullet: function (index, className) {
          switch(index){
            case 0:text='<h3 class="h3 light">Decentralized</h3> <br/> <h4 class="h4 light">Secured and easy to use</h4>';break;
            case 1:text='<h3 class="h3 light">NFT Marketplace</h3> <br/> <h4 class="h4 light">Explore, collect, and sell</h4>';break;
            case 2:text='<h3 class="h3 light">100x Up Leverage</h3> <br/> <h4 class="h4 light">Perpetual Futures</h4>';break;
          }
          return '<span class="' + className + '">' + text + '</span>';
        }
    },
});

/* swiper_2 */

let mySwiper_2 = new Swiper('#swiper_2', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 3.2,
});

/* swiper_3 */

let mySwiper_3 = new Swiper('#swiper_3', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 3.5,
});

/* swiper_4 */

let mySwiper_4 = new Swiper('#swiper_4', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 4.5,
});

/* swiper_5 */

let mySwiper_5 = new Swiper('#swiper_5', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 4.5,
});

/* swiper_6 */

let mySwiper_6 = new Swiper('#swiper_6', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 4.5,
});

/* light or dark mode */

const changeButton = document.querySelector('#switchIcon');
changeButton.addEventListener('click', mode);
let light = 1;
console.log(light);

function mode(){
    let body = document.getElementById('body');
    if(light==1){
        let y=document.querySelectorAll(".light");
        
        localStorage.setItem('mode', 0);

        /* body.style.backgroundColor= 'rgb(255,255,255)'; */
        for (let i = 0; i < y.length; i++) {                    
            y[i].classList.remove('light');
            y[i].classList.add('dark');
            document.getElementById("switchIcon").textContent="dark_mode";
            light=0;
        }
    }else{
        let y=document.querySelectorAll(".dark");

        localStorage.setItem('mode', 1);

        /* body.style.backgroundColor= 'rgb(0,0,0)'; */
        for (let i = 0; i < y.length; i++) {                  
            y[i].classList.remove('dark');
            y[i].classList.add('light');
            document.getElementById("switchIcon").textContent="wb_sunny";
            light=1;
        }
    }
} 

let connectBtn=document.querySelector("#show");
let infoModal=document.querySelector("#infoModal");

let scrollHide = document.querySelector('body');

/* let close=document.querySelector("#close"); */
connectBtn.addEventListener("click", function(){
    infoModal.showModal();

    scrollHide.style.overflow = "hidden";
})
/* close.addEventListener("click", function(){
    infoModal.close();
})
 */
let dialog = document.getElementsByTagName('dialog')[0];

    dialog.addEventListener('click', function (event) {
        let rect = dialog.getBoundingClientRect();
        let isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
          && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        if (!isInDialog) {
            scrollHide.style.overflow = "auto";
            dialog.close();
        }
    });

/* AOS */

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });