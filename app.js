const sum = (a,b) => {
    return a + b
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Declaramos una función con el nombre exacto "fromDollarToYen"
const fromDollarToYen = function(valueInDolar) {
    // Convertimos el valor a Yen
    let valueInYen = valueInDolar * 156.5;
    // Retornamos el valor en yenes
    return valueInYen;
}
// Declaramos una función con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a Pound
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en pounds
    return valueInPound;
}


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
console.log(sum(7,3));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

