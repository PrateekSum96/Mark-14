const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const msgOutput = document.querySelector("#output-msg");

submitBtn.addEventListener("click", function clickListener() {
  const ip = Number(initialPrice.value);
  const quantity = Number(quantityOfStocks.value);
  const curr = Number(currentPrice.value);
  if (ip && quantity && curr) {
    calculateProfitAndLoss(ip, quantity, curr);
  } else {
    showOutput(`Please fill the boxes!!!`);
  }
});

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}
function showOutput(msg) {
  msgOutput.innerHTML = msg;
}
