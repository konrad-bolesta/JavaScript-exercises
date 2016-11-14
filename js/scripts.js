var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    list.innerHTML += '<li></li>';
    var itemsByTagName = document.getElementsByTagName('li');

    for (var i = 1; i < itemsByTagName.length; i++) {
    itemsByTagName[i].innerHTML = "item" + " " + i;
    }
});