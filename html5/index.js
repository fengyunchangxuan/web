
function drag(el) {
    el.dataTransfer.setData("Text", el.target.id);
}

function drop(el) {

    el.preventDefault();
    var data = el.dataTransfer.getData("Text");
    el.target.appendChild(document.getElementById(data));
}

function dragOver(el) {
    el.preventDefault();
}


