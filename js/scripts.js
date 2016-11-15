var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var newLi = document.createElement("li");
    newLi.innerHTML = 'item' + " " + document.getElementsByTagName('li').length;
    list.appendChild(newLi);
});