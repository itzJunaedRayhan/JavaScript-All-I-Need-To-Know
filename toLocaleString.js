var num = 2500.5
const options = {
    style : "currency",
    currency : "eur"
}
console.log(num.toLocaleString("en-US", options));
console.log(num.toLocaleString("nl-NL", options));
console.log(num.toLocaleString("de-DE", options));
console.log(num.toLocaleString("fr-FR", options));
console.log(num.toLocaleString("en-NL", options));
console.log(num.toLocaleString(undefined, options));