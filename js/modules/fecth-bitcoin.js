export default function initFecthBitcoin(url, target) {
  async function fecthBitcoin(url, target) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();

      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoinJSON.BRL.sell).toFixed(5);
    } catch (erro) {
      console.log(erro);
    }
  }

  fecthBitcoin(url, target);
}
