


// Select Coin ID
let coinId = "bitcoin";
let labelName = "Bitcoin";
function getCoin(){
    coinId = event.target.id;
    console.log("ID: " + coinId);

	let newText = document.getElementById(`${coinId}`).innerHTML;
	
	//console.log(newText);

	$(".coinTitle > h1").text(newText);

	//let metamaskImgUrl = "CryptoMuse/img/metamaskWallet.png";
    $(".swapCoinLogo").css("background-image", `url(../CryptoMuse/img/swap/${newText}.png)`);
	$(".coinImg_1").css("background-image", `url(../CryptoMuse/img/swap/${newText}.png)`);

    // Select Coin ID price
    let dataUrl= "https://api.coingecko.com/api/v3/coins/"+`${coinId}`+"/market_chart?vs_currency=usd&days=3"
    console.log(dataUrl);
    let xhr = new XMLHttpRequest()
    let price;
    xhr.open('GET',dataUrl, true)
    xhr.send()
    xhr.onload = function(){
		let data = JSON.parse(this.responseText);
		//console.log(data);
		//console.log(data["prices"][72][1]);
		price = data["prices"][72][1];
		console.log(price);
		document.getElementById("currentPrice").innerHTML = price.toFixed(6);
	}

	// Select Coin ID chart
	axios.get("https://api.coingecko.com/api/v3/coins/"+`${coinId}`+"/market_chart?vs_currency=usd&days=3")
	.then(function (response){
		let data = response.data;
		console.log(data);
		chart.data.labels = data.prices.map(function(item) {
			return new Date(item[0]).toLocaleDateString();
		});
		chart.data.datasets[0].data = data.prices.map(function(item) {
			return item[1]; 
		});
		chart.update();
	})
	.catch(function (error) {
	console.log(error);
	});

}

// Load page current Coin price
let dataUrl= "https://api.coingecko.com/api/v3/coins/"+`${coinId}`+"/market_chart?vs_currency=usd&days=3"

console.log(dataUrl);

let xhr = new XMLHttpRequest()
let price;
xhr.open('GET',dataUrl, true)
xhr.send()
xhr.onload = function(){
    let data = JSON.parse(this.responseText);
    //console.log(data);

    // get last price, JSON 第 72 陣列的長度 2
    price = data["prices"][72][1];
    console.log(price);
    document.getElementById("currentPrice").innerHTML = price.toFixed(6);
}

// Load page current Coin chart
axios.get("https://api.coingecko.com/api/v3/coins/"+`${coinId}`+"/market_chart?vs_currency=usd&days=3")
.then(function (response){
	let data = response.data;
	console.log(data);
	chart.data.labels = data.prices.map(function(item) {
  		return new Date(item[0]).toLocaleDateString();
	});
	chart.data.datasets[0].data = data.prices.map(function(item) {
  		return item[1]; 
	});
	chart.update();
})
.catch(function (error) {
console.log(error);
});


let ctx = document.getElementById('swapChart').getContext('2d');

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(250,174,50,1)');   
    gradient.addColorStop(1, 'rgba(250,174,50,0.2)');



let chart = new Chart(ctx, {
  
	type: 'line',
  	data: {
    	labels: [],
    	datasets:[
    		{			
				label: false,
				data: [],
				borderColor: 'rgba(247, 147, 26, 0.8)',
				backgroundColor: gradient,
				//borderJoinStyle: 'round',
				//borderCapStyle: 'round',
				borderWidth: 3,
				pointRadius: 0,
				pointHitRadius: 10,
				fill: true
			}
		]
	},
  	options: {
		title: {
			display: false,
			family: "'Montserrat', 'sans-serif'",
			text: 'Dogecoin',
			fontSize: 28
		},
		scales: {
			xAxes: [{
				display: false,
				gridLines: false
			}],
			yAxes: [{
				display: true,
				gridLines: {}
			}],
			/* y: {
        		beginAtZero: false
      		} */
			x: {
				title: {
					display: true,
					text: "Last 3 days"
				}
			}
		},
		legend: {
			display: false
		},
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}
		},

		tooltips: {
			/* callbacks: {
			//This removes the tooltip title
			title: function() {}
			}, */
			//this removes legend color
			displayColors: false,
			yPadding: 20,
			xPadding: 10,
			position: 'nearest',
			caretSize: 10,
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			bodyFontSize: 18,
			bodyFontColor: 'rgba(237, 234, 243, 1)' 
    	},
		aspectRatio: 1.2,
		maintainAspectRatio: true
  	},
});