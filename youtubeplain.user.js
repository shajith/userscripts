// ==UserScript==
// @name           Youtube Plain
// @namespace      http://github.com/shajith
// @description    Remove everything but title and video from youtube video pages.
// @include        http://www.youtube.com/watch*
// ==/UserScript==

arr = document.querySelectorAll('#pagetop, #pagebottom, #watch-main-container')

for(i=0;i<arr.length;i++){
    arr[i].parentNode.removeChild(arr[i]);
}
