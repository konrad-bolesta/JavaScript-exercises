var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
    animal = 'Zielone słonie';
    animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased)

var textCharsAfter = text.replace('Papugi', animalUpperCased)

console.log(textCharsAfter);

console.log(textCharsAfter.length);

var halfOfTextCharsAfter = textCharsAfter.slice(0,45);
console.log(halfOfTextCharsAfter);