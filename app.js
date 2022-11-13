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
    if (ip > 0 && quantity > 0 && curr > 0) {
      calculateProfitAndLoss(ip, quantity, curr);
    } else {
      showOutput(`You are entering NEGATIVE input!!`);
    }
  } else {
    showOutput(`Please fill the boxes!!!`);
  }
});

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    const loss = ((initial - current) * quantity).toFixed(2);
    const lossPercentage = ((loss / initial) * 100).toFixed(2);

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    const profit = ((current - initial) * quantity).toFixed(2);
    const profitPercentage = ((profit / initial) * 100).toFixed(2);

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
