var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var textAfterReplecement = text.replace(/^\S+/g, animalUpperCased);

console.log(textAfterReplecement);

var halfOfTextAfterReplecement = textAfterReplecement.slice(0, textAfterReplecement.length / 2);

console.log(halfOfTextAfterReplecement);