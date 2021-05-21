
let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-plnValue");
let currencyElement = document.querySelector(".js-currencyOption");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.56;
let rateGBP = 5.31;
let rateUSD = 3.81;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +plnElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

    }

    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;



});

