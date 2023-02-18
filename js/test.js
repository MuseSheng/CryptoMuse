//   https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=3

let x = 1;


let btnClick = document.getElementById("btn")
btnClick.addEventListener("click", function(){
    console.log(x);
});


var dataUrl= "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=3"
var xhr = new XMLHttpRequest()
xhr.open('GET',dataUrl, true)
xhr.send()
xhr.onload = function(){
    var data = JSON.parse(this.responseText);
    //console.log(data);
    console.log(data["prices"][72][1]);
}


var family = {
    name: "小明家",
    deposit: 1000,
    members: {
     mom: "老媽",
     ming: "小明"
    }
   };
   console.log(family.name); // 小明家
   console.log(family.members.mom); // 老媽
   console.log(family['name']); // 小明家







var obj = JSON.parse(json);

// Define recursive function to print nested values
function printValues(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else {
            document.write(obj[k] + "<br>");
        };
    }
};

// Printing all the values from the resulting object
printValues(obj);

document.write("<hr>");

// Printing a single value
document.write(obj["book"]["author"] + "<br>");  // Prints: J. K. Rowling
document.write(obj["book"]["characters"][0] + "<br>");  // Prints: Harry Potter
document.write(obj["book"]["price"]["hardcover"]);  // Prints: $20.32