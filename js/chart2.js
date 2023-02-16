let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(250,174,50,1)');   
    gradient.addColorStop(1, 'rgba(250,174,50,0.2)');

const chartData = {
  labels: [],
  datasets:[
    {			
    label: 'Dogecoin (DOGE)',
    data: [],
    borderColor: 'rgba(247,147,26,1)',
    backgroundColor: gradient,
    //borderJoinStyle: 'round',
    //borderCapStyle: 'round',
    borderWidth: 3,
    pointRadius: 0,
    pointHitRadius: 10,
    fill: true
    }
  ]
};


let ctx = document.getElementById('btcChartLight').getContext('2d');
const myChart = new Chart(ctx, {
  
	type: 'line',
  data: chartData,
  	options: {
		title: {
			display: true,
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
		aspectRatio: 1,
		maintainAspectRatio: true
  	},
});

document.getElementById('chartChange').addEventListener('click', () => {
  const toDarkMode = myBarChart.options.scales.x.grid.color === lightGridLineColor;
  if (toDarkMode) {
    myBarChart.options.scales.x.grid.color = darkGridLineColor;
    myBarChart.options.scales.y.grid.color = darkGridLineColor;
  } else {
    myBarChart.options.scales.x.grid.color = lightGridLineColor;
    myBarChart.options.scales.y.grid.color = lightGridLineColor;
  }

  myBarChart.update();
});



axios.get('https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=3')
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

/* ///  Calling API and modeling data for each chart ///
const btcData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const cosmosData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ATOM&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


const ethereumData = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
  const json = await response.json();
  const data = json.Data.Data
  const times = data.map(obj => obj.time)
  const prices = data.map(obj => obj.high)
  return {
    times,
    prices
  }
}


/// Error handling ///
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}



/// Charts ///
let createBtcChart
let createCosmosChart
let createethereumChart

async function printBtcChart() {
  let { times, prices } = await btcData()

  let btcChart = document.getElementById('btcChart').getContext('2d');

  let gradient = btcChart.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(.425, 'rgba(255,193,119,0)');

  Chart.defaults.global.defaultFontFamily = 'Red Hat Text';
  Chart.defaults.global.defaultFontSize = 12;

  createBtcChart = new Chart(btcChart, {
    type: 'line',
    data: {
      labels: times,
      datasets: [{
        label: '$',
        data: prices,
        backgroundColor: gradient,
        borderColor: 'rgba(247,147,26,1)',
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: .2,
      }]
    },

    options: {
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35
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

      scales: {
        xAxes: [{
          display: false,
          gridLines: {}
        }],
        yAxes: [{
          display: false,
          gridLines: {}
        }]
      },

      tooltips: {
        callbacks: {
          //This removes the tooltip title
          title: function() {}
       },
        //this removes legend color
        displayColors: false,
        yPadding: 10,
        xPadding: 10,
        position: 'nearest',
        caretSize: 10,
        backgroundColor: 'rgba(255,255,255,.9)',
        bodyFontSize: 15,
        bodyFontColor: '#303030' 
      }
    }
  });
}


/// Update current price ///
async function updateEthereumPrice() {
  let { times, prices } = await ethereumData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("ethPrice").innerHTML = "$" + currentPrice;
}

async function updateCosmosPrice() {
  let { times, prices } = await cosmosData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("atomPrice").innerHTML = "$" + currentPrice;
}

async function updateBitcoinPrice() {
  let { times, prices } = await btcData()
  let currentPrice = prices[prices.length-1].toFixed(2);

  document.getElementById("btcPrice").innerHTML = "$" + currentPrice;
}

updateEthereumPrice()
updateCosmosPrice()
updateBitcoinPrice()

printBtcChart()
printCosmosChart()
printEthereumChart() */