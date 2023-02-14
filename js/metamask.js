/* $(function(){
  if(window.web3){
    console.log("有安裝 ＭetaMask");
      // 有安裝 MetaMask
  }else{
    window.open("https://metamask.io/download/");  
  }
}); */

/* 
let connectBtn = document.getElementById("connectBtnId")
connectBtn.addEventListener("click", function(){

  window.web3 = new Web3(window.web3.currentProvider);
    ethereum.request({ method: 'eth_requestAccounts' }).then((result) =>  {  
        address = result[0];
        //console.log(address);
        alert('錢包連接成功');
    }).catch((error) => {
        console.log("error",error);
    });
});


let hexData = window.web3.utils.utf8ToHex(nonce);

window.web3.eth.personal.sign(hexData, address, function(result, signature){
	  console.log(result); // 結果
    console.log(signature); // Signature
});
 */

'use strict';

let address;

document.addEventListener("DOMContentLoaded", function(){
  if(JSON.parse(localStorage.getItem('connect')) === 1){
    connectMetaMask()
  }
  else if(JSON.parse(localStorage.getItem('connect')) === 0){
  }
});


function connectMetaMask(){
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

        $(".walletMenu:first").text("Wallet: " + `${balance}` + " ETH" );

        localStorage.setItem('connect', 1);
      });


    }).catch((error) => {
      console.log("error",error);
      localStorage.setItem('connect', 0);
  });
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

$(function(){
    if (window.web3) {
    } else {
        $("#divaddr").append("<div class=\"alert alert-danger\" role=\"alert\">你似乎沒有安裝 MetaMask，可以先安裝再試。</div>");
    }
});