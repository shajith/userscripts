// ==UserScript==
// @name           Tech Meme filter
// @namespace      bookseeker
// @description    Remove iphone/android news from Techmeme
// @match          http://*.techmeme.com/*
// ==/UserScript==

arr = document.querySelectorAll('div.item, div.heditem');

for(i=0;i<arr.length;i++){
    if(arr[i].innerHTML && (arr[i].innerHTML.match(/Android|iPod|iPhone|iOS|Droid/))){
	arr[i].parentNode.removeChild(arr[i]);
    }
}
