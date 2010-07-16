// ==UserScript==
// @name           Wikipedia Plain
// @namespace      http://github.com/shajith
// @description    Remove everything but content from wikipedia.
// @include        http://en.wikipedia.org/wiki/*
// @include        http://*.wikipedia.org/wiki/*
// ==/UserScript==


function toggleElems(arr, hide) {
    for(i=0; i < arr.length; i++) {
	if(hide) {
	    arr[i].style.display = "none";
	}
	else {
	    arr[i].style.display = "";
	}
    }
}

function hideElems(e) {
    toggleElems(hidden_elements, false);
    e.preventDefault();
    show_ui_button = document.getElementById('show_ui_button');
    show_ui_button.parentNode.removeChild(show_ui_button);
    return false;
}

function nodeListAsArray(nodeList) {
    ret = [];
    for(i=0;i<nodeList.length;i++) {
	ret.push(nodeList[i]);
    }

    return ret;
}

var hidden_elements = nodeListAsArray(document.querySelectorAll("#p-namespaces, #right-navigation, #p-personal"));

hidden_elements = hidden_elements.concat(nodeListAsArray(document.querySelectorAll(".editsection")));

var sidebar = document.getElementById("mw-panel");

for(i=0; i < sidebar.children.length; i++) {
    elem = sidebar.children[i];
    console.log(elem.id);
    if(elem.id != "p-logo") {
	hidden_elements.push(elem);
    }
}

toggleElems(hidden_elements, true);

d=document.createElement("div");
d.style.textAlign = "center";
d.style.fontSize = "smaller";
d.innerHTML = '<a href="#" id="show_ui_button">Show UI</a>';


document.getElementById("p-logo").parentNode.appendChild(d);
document.getElementById("show_ui_button").onclick = hideElems;