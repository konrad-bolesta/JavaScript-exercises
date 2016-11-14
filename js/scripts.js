var a = 3;
var b = 4;
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

if (value === 0) {
    console.log('Wynik wynosi zero');
}

else {
    value > 0 ? console.log('Wynik dodatni') : console.log('Wynik ujemny');
}