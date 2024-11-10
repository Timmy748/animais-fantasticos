export default function initFecthBitcoin() {
  async function fecthBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();

      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / bitcoinJSON.BRL.sell).toFixed(5);
    } catch (erro) {
      console.log(erro);
    }
  }

  fecthBitcoin("https://blockchain.info/ticker");
}

// fetch("https://blockchain.info/ticker")
// .then((response) => {
//   return response.json();
// })
// .then((json) => {
//   const btcPreco = document.querySelector(".btc-preco");
//   btcPreco.innerText = (100 / json.BRL.sell).toFixed(5);
// })
// .catch((erro) => {
//   console.log(erro);
// });
