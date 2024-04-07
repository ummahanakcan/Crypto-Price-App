var settings = {
  async: true,
  crossDomain: false,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cripple%2Cdogecoin%2Cethereum&vs_currencies=usd&symbol&include_24hr_change=true",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  const coinList = document.querySelector(".coin-list");
  const coins = Object.getOwnPropertyNames(response);
  console.log(response);
  for (let coin of coins) {
    const coinInfo = response[`${coin}`];
    const price = coinInfo.usd.toFixed(2);
    const change = coinInfo.usd_24h_change.toFixed(2);
    coinList.innerHTML += `
                  <div class="coin">
                    <img src="images/${coin}.png">
                    <div class="coin-price">
                    <h3>${coin.toUpperCase()} <span>/USD</span></h3>
                    <h4>$ <span>${price}</span></h4>
                    <h5 class="${
                      change < 0 ? "falling" : "rising"
                    }">${change}%</h5>
                    </div>
                  </div>
          `;
  }
});
