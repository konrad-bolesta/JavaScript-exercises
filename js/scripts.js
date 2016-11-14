var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marian', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);
var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

else {
    allNames.push(allNames.splice(allNames.indexOf(newName), 1)[0]);
}

console.log(allNames)