AOS.init();

/* localStorage to detecation light or dark mode */

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

document.addEventListener("DOMContentLoaded", function(){
    if(JSON.parse(localStorage.getItem('connect')) === 1){
      connectMetaMask()
    }
    else if(JSON.parse(localStorage.getItem('connect')) === 0){
    }
  });


/* Connect Wallet text change */
$(document).ready(function(){    //頁面一進來就會跑的程式
    detectionWidow();            
    $(window).resize(function() {   //當螢幕調整過尺寸（左右拖拉時），跑的程式
        detectionWidow();      
    });
});

const changeBtnDisconnet = document.querySelector("#connectBtnId");

let newHeader = function(){       //新的字串function，把你要變換的字串寫成一個function
    document.getElementById('logo').src='img/Logo_min.svg';
    changeBtnDisconnet.innerHTML = "CONNECT";
}
let originalHeader = function(){         //原始的字串function
    document.getElementById('logo').src='img/Logo.svg';
    changeBtnDisconnet.innerHTML = "CONNECT WALLET";     //內容和你本來輸入的html code一樣
}


let detectionWidow = function(){      //偵測螢幕尺寸的function
    if(window.innerWidth <= 900){ 
        newHeader();                    
    }
    else{
        originalHeader();              
    }
}



/* Header show & hide */
let bodyClass = document.body.classList,
lastScrollY = 0;
window.addEventListener('scroll', function(){
    let st = this.scrollY;
    /* console.log(st);
    console.log("scrollY" + scrollY); */

    // 判斷是向上捲動，而且捲軸超過 70px
        if( st > lastScrollY && lastScrollY > 70) {
            bodyClass.add('hideUp');
        }else{
            bodyClass.remove('hideUp');
        }
    lastScrollY = st;
});


/* swiper_1 */
let title = ['Decentralized', 'NFT Marketplace', 'Up to 100x Leverage'];
let des = ['Secured and easy to use', 'Explore, collect, and sell', 'Perpetual Futures'];
let mySwiper = new Swiper ('#swiper_1', {
    speed: 1000,
    /* autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
      }, */
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
		clickable: true,  
        renderBullet: function (index, className) {
          switch(index){
            case 0:text='<h3 class="h3 light">Decentralized</h3> <br/> <h4 class="h4 light">Secured and easy to use</h4>';break;
            case 1:text='<h3 class="h3 light">NFT Marketplace</h3> <br/> <h4 class="h4 light">Explore, collect, and sell</h4>';break;
            case 2:text='<h3 class="h3 light">100xUp Leverage</h3> <br/> <h4 class="h4 light">Perpetual Futures</h4>';break;
          }
          return '<span class="' + className + '">' + text + '</span>';
        }
    },
});

/* swiper_2 */
let swiper_topPools = new Swiper('#swiper_topPools', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 3.1,

    //设置宽度为全屏  
    /* width: window.innerWidth, */
    //设置断点宽度
    breakpoints: {
        1360: {
            slidesPerView: 2.8,
        },
        1280: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 2.2,
        },
        1000: {
            slidesPerView: 2.1,
        },
        960: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 1.8,
        },
        820: {
            slidesPerView: 2.2,
        },
        768: {           
            slidesPerView: 2.1,
        },
        680: {           
            slidesPerView: 1.8,
        },
        590: {           
            slidesPerView: 1.5,
        },
        500: {           
            slidesPerView: 1.3,
        },
        428: {           
            slidesPerView: 1.2,
        },
        400: {           
            slidesPerView: 1.15,
        },
        375: {           
            slidesPerView: 1.1,
        },
        //窗口缩放时设置width
        /* on: {
            resize: function(){
                this.params.width = window.innerWidth;
                this.update();
            },
        },   */ 
    }
});


/* swiper_3 */
let mySwiper_3 = new Swiper('#provideNFT', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 3.5,

    breakpoints: {
        1360: {
            slidesPerView: 3.4,
        },
        1336: {
            slidesPerView: 3.2,
        },
        1280: {
            slidesPerView: 2.9,
        },
        1200: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 2.4,
        },
        960: {
            slidesPerView: 2.3,
        },
        900: {
            slidesPerView: 2.1,
        },
        820: {
            slidesPerView: 1.95,
        },
        768: {           
            slidesPerView: 1.7,
        },
        680: {           
            slidesPerView: 1.6,
        },
        590: {           
            slidesPerView: 1.25,
        },
        500: {           
            slidesPerView: 1.2,
        },
        428: {           
            slidesPerView: 1,
            pagination: {
                el: '.swiper-indexNftPagination',
                bulletElement : 'li',
              },
        },
        
        //窗口缩放时设置width
        /* on: {
            resize: function(){
                this.params.width = window.innerWidth;
                this.update();
            },
        },   */ 
    }

});

/* swiper_4 */
/* NFT Marketplace_1 */
let mySwiper_4 = new Swiper('#swiper_4', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 5.2,

    breakpoints: {
        1920: {
            slidesPerView: 5.1,
        },
        1680: {
            slidesPerView: 4.7,
        },
        1440: {
            slidesPerView: 4.5,
        },
        1360: {
            slidesPerView: 4.5,
        },
        1336: {
            slidesPerView: 4.1,
        },
        1280: {
            slidesPerView: 3.8,
        },
        1200: {
            slidesPerView: 3.1,
        },
        1000: {
            slidesPerView: 2.9,
        },
        960: {
            slidesPerView: 2.7,
        },
        900: {
            slidesPerView: 2.5,
        },
        820: {
            slidesPerView: 2.4,
        },
        768: {           
            slidesPerView: 2.1,
        },
        680: {           
            slidesPerView: 1.8,
        },
        590: {           
            slidesPerView: 1.55,
        },
        500: {           
            slidesPerView: 1.3,
        },
        428: {           
            slidesPerView: 1.2,
        /* pagination: {
            el: '.swiper-indexNftPagination',
            bulletElement : 'li',
            }, */
        },  
    }
});

/* swiper_5 */
/* NFT Marketplace_2 */
let mySwiper_5 = new Swiper('#swiper_5', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 5.2,

    breakpoints: {
        1920: {
            slidesPerView: 5.1,
        },
        1680: {
            slidesPerView: 4.7,
        },
        1440: {
            slidesPerView: 4.5,
        },
        1360: {
            slidesPerView: 4.5,
        },
        1336: {
            slidesPerView: 4.1,
        },
        1280: {
            slidesPerView: 3.8,
        },
        1200: {
            slidesPerView: 3.1,
        },
        1000: {
            slidesPerView: 2.9,
        },
        960: {
            slidesPerView: 2.7,
        },
        900: {
            slidesPerView: 2.5,
        },
        820: {
            slidesPerView: 2.4,
        },
        768: {           
            slidesPerView: 2.1,
        },
        680: {           
            slidesPerView: 1.8,
        },
        590: {           
            slidesPerView: 1.55,
        },
        500: {           
            slidesPerView: 1.3,
        },
        428: {           
            slidesPerView: 1.2,
        /* pagination: {
            el: '.swiper-indexNftPagination',
            bulletElement : 'li',
            }, */
        },  
    }
});

/* buy NFT page */
/* swiper_6 */
let mySwiper_6 = new Swiper('#swiper_6', {
	autoplay: true,
    speed: 1000,
    slidesPerView: 5.6,

    breakpoints: {
        1920: {
            slidesPerView: 5.1,
        },
        1680: {
            slidesPerView: 4.7,
        },
        1440: {
            slidesPerView: 4.5,
        },
        1360: {
            slidesPerView: 4.5,
        },
        1336: {
            slidesPerView: 4.1,
        },
        1280: {
            slidesPerView: 3.8,
        },
        1200: {
            slidesPerView: 3.1,
        },
        1000: {
            slidesPerView: 2.9,
        },
        960: {
            slidesPerView: 2.7,
        },
        900: {
            slidesPerView: 2.5,
        },
        820: {
            slidesPerView: 2.4,
        },
        768: {           
            slidesPerView: 2.1,
        },
        680: {           
            slidesPerView: 1.8,
        },
        590: {           
            slidesPerView: 1.55,
        },
        500: {           
            slidesPerView: 1.3,
        },
        428: {           
            slidesPerView: 1.2,
        /* pagination: {
            el: '.swiper-indexNftPagination',
            bulletElement : 'li',
            }, */
        },  
    }
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


/* Connect wallet lightbox close */
                /* changeButton.addEventListener('click', mode);


                let connectBtn = document.querySelector("#connectBtnId");
                let infoModal = document.querySelector("#infoModal");
                let scrollHide = document.querySelector('body');
 */
/* let close=document.querySelector("#close"); */
                /* connectBtn.addEventListener("click", function(){
                    infoModal.showModal();

                    scrollHide.style.overflow = "hidden";
                }) */
/* close.addEventListener("click", function(){
    infoModal.close();
})
 */
                /* let dialog = document.getElementsByTagName('dialog')[0];

                dialog.addEventListener('click', function (event) {
                    let rect = dialog.getBoundingClientRect();
                    let isInDialog=(rect.top <= event.clientY && event.clientY <= rect.top + rect.height
                        && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
                    if (!isInDialog) {
                        scrollHide.style.overflow = "auto";
                        dialog.close();
                    }
                }); */

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


/* Connect Wallet */

let lightbox_el = document.getElementById("lightbox");
let scrollHide = document.querySelector('body');
// 頁面上的按鈕
let btn_modal = document.getElementsByClassName("connectBtn")[0];
btn_modal.addEventListener("click", function(){
  lightbox_el.classList.remove("none");
  scrollHide.style.overflow = "hidden";
});

/* let btn_modal_close = document.getElementsByClassName("btn_modal_close")[0];
btn_modal_close.addEventListener("click", function(){
  lightbox_el.classList.add("none");
  scrollHide.style.overflow = "auto";
}); */

lightbox_el.addEventListener("click", function(){
  this.classList.add("none");
  scrollHide.style.overflow = "auto";
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el.querySelector(".dialog").addEventListener("click", function(e){
  e.stopPropagation();
});


/* Metamusk */

let address;
function connectMetaMask(){

    $(function(){
        if(window.web3){
            console.log("有安裝MetaMask");
            // 有安裝 MetaMask

            window.web3 = new Web3(window.web3.currentProvider);
            ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
  
            address = accounts[0];
            console.log(address);

            $("#btnConnectId").css("display", "none");
            $(".walletBtn-box").css("display", "block");
            $(".walletBtn-box-text").text(`${address}`);

            ethereum.request({method: 'eth_getBalance' , params: [address, 'latest']}).then(result => {
            console.log(result);
            let assets = parseInt(result, 16);

            /* let balance = assets / (10**18); */
            let balance = (assets / (10**18)).toFixed(8);
            console.log(balance + " ETH");

            /* Show ETH */
            $(".walletMenu:first").text("Wallet: " + `${balance}` + " ETH" );

            /* Connect Wallet light box close */
            $(`#lightbox`).addClass("none")
            $(`body`).css("overflow", "auto")

            /* Localstoragfe */
            localStorage.setItem('connect', 1);
         });

    }).catch((error) => {
        console.log("error",error);
        localStorage.setItem('connect', 0);
    });

        }else{
            $("div[class = 'learnConnect'] > h2").text("Metamask is not installed");

            let metamaskImgUrl = "CryptoMuse/img/metamaskWallet.png";
            $(".walletImg").css("background-image", `url(${metamaskImgUrl})`);
            $(".learnConnectBtn").attr({
                onclick: "window.open('https://metamask.io/download/');"
            });
            $(".learnConnectBtn").text("Install Metamask");

        }
    });

/* $(function(){
  if(window.web3){
    console.log("有安裝MetaMask");
      // 有安裝 MetaMask
  }else{
    window.open("https://metamask.io/download/");  
  }
});
 */

 /*  window.web3 = new Web3(window.web3.currentProvider);
  ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
  
      address = accounts[0];
      console.log(address);

      $("#btnConnectId").css("display", "none");
      $(".walletBtn-box").css("display", "block");
      $(".walletBtn-box-text").text(`${address}`);

      ethereum.request({method: 'eth_getBalance' , params: [address, 'latest']}).then(result => {
        console.log(result);
        let assets = parseInt(result, 16);

        // let balance = assets / (10**18);
        let balance = (assets / (10**18)).toFixed(8);
        console.log(balance + " ETH");

        // Show ETH
        $(".walletMenu:first").text("Wallet: " + `${balance}` + " ETH" );

        // Connect Wallet light box close
        $(`#lightbox`).addClass("none")
        $(`body`).css("overflow", "auto")

        // Localstoragfe
        localStorage.setItem('connect', 1);
      });

    }).catch((error) => {
      console.log("error",error);
      localStorage.setItem('connect', 0);
  }); */
}

/* function disconnect(){
  awaitethereum.request({
    method: "eth_requestAccounts", 
    params: [
      {
        eth_accounts: {}
      }
    ]
  });
  console.log("disconnect");
} */


function login() {

    $("#btnLogin").attr("disabled", true);

    // get nonce
    $.ajax({
        type: "GET",
        url: "/api/metamask/nonce/"+address,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){

            $("#divaddr").append("<div class=\"alert alert-secondary\" role=\"alert\">第二步: Backend 取得 Nonce成功： <small>"+data.payload+"</small></div>");
            //$("#divaddr").append("<div class=\"alert alert-secondary\" role=\"alert\">Hex Nonce (應該同 MetaMask 顯示一致)： <small>"+window.web3.utils.utf8ToHex(data.payload)+"</small></div>");

            //var hexData = window.web3.utils.utf8ToHex(data.payload);
            var hexData = data.payload;
            //var hexData = "Hello welcome to frank.hk";

            console.log("payload", data.payload);

            $("#btnLogin").html("等待 MetaMask 認證2 ");
            window.web3.eth.personal.sign(hexData, address, function(result, signature){
                console.log(result);
                console.log(signature);
                $("#divaddr").append("<div class=\"alert alert-warning\" role=\"alert\">第三步: 取得 MetaMask 簽名： <small>"+signature+"</small></div>");

                if (!result) {
                    $.ajax({
                        type: "POST",
                        url: "/api/metamask/login",
                        data: JSON.stringify({ signature: signature, nonce:data.payload, hexNonce:hexData, address:address }),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function(loginResult){
                            if (loginResult.code == 0) {
                                // login success
                                $("#divaddr").append("<div class=\"alert alert-info\" role=\"alert\">第四步: Backend 驗證簽名成功</div>");
                                $("#divaddr").append("<div class=\"alert alert-success\" role=\"alert\">🎉 登入成功 🎉</div>");
                                $("#btnLogin").html('🎉 登入成功 🎉');
                            } else {
                                $("#divaddr").append("<div class=\"alert alert-danger\" role=\"alert\">第四步: Backend 驗證簽名失敗</div>");
                                $("#divaddr").append("<div class=\"alert alert-danger\" role=\"alert\">登入失敗</div>");
                            }
                        },
                        failure: function(errMsg) {
                            alert(errMsg);
                        }
                    });

                }
            });
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}
