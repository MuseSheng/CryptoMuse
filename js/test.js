var settings = {
  "url": "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=5",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "__cf_bm=Mrvc5UBvtpDpmJB4UxPHJzSPCxoNqizlUvd7htpkAVY-1676548764-0-AbinhZdfR39RfGnZ/yUWgEalYEaT4mRqJJ1F6ZdCSFa5/kWTWV6FlVNzi7IK9Dv3kfaDgvAsIM9HXs2UrQXzk5A="
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});