var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
    mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
    allNames = womensNames.concat(mensNames);
    newName ='Marian'

if (allNames.indexOf(newName) == -1) {
    var addName = allNames.push('Marian');
}

console.log(allNames);