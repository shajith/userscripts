// ==UserScript==
// @name           Twitter Unlinker
// @namespace      http://github.com/shajith
// @description    Removes links from tweets (make them non clickable)
// @include        http://twitter.com/*
// ==/UserScript==

var arr = document.querySelectorAll("span.entry-content a");
for(var i=0; i < arr.length; i++) {
    var span = document.createElement("span");
    span.innerHTML = arr[i].innerHTML;
    arr[i].parentNode.replaceChild(span, arr[i]);
}

setInterval(function() {
    var arr = document.querySelectorAll("span.entry-content a");
    for(var i=0; i < arr.length; i++) {
	var span = document.createElement("span");
	span.innerHTML = arr[i].innerHTML;
	arr[i].parentNode.replaceChild(span, arr[i]);
    }}, 5000);