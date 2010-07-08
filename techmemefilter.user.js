// ==UserScript==
// @name           Tech Meme filter
// @namespace      bookseeker
// @description    Remove iphone/android news from Techmeme
// @match          http://techmeme.com/*
// @match          http://www.techmeme.com/*
// ==/UserScript==

arr = document.querySelectorAll('div.sitems div.item, div.clus, div.heditem');

for(i=0;i<arr.length;i++){
    if(arr[i].innerHTML && (arr[i].innerHTML.match(/Android|iPod|iPhone|iOS|Droid/))){
	arr[i].parentNode.removeChild(arr[i]);
    }
}
