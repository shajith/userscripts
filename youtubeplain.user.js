// ==UserScript==
// @name           Youtube Plain
// @namespace      http://github.com/shajith
// @description    Remove everything but title and video from youtube pages.
// @include        http://www.youtube.com/watch/*
// @include        http://youtube.com/watch/*
// @include        http://www.youtube.com/watch?*
// @include        http://youtube.com/watch?*
// ==/UserScript==

var _toggleCrap = function (hide) {
    arr = document.querySelectorAll('#ticker #pagetop, #pagebottom, #watch-main-container, #watch-headline-user-info')

    for(i=0;i<arr.length;i++){
	if(hide)
	    arr[i].style.display = "none";
	else
	    arr[i].style.display = "";
    }

}

d=document.createElement("div");

_toggleCrap(true);

d.innerHTML = '<button type="button" class="yt-uix-button" onclick="arr=document.querySelectorAll(\'#pagetop, #pagebottom, #watch-main-container, #watch-headline-user-info\');for(i=0;i<arr.length;i++){arr[i].style.display = \'\';};document.getElementById(\'showUIButton\').style.display=\'none\';return false;" id="showUIButton" style=""><span class="yt-uix-button-content">Show UI</span></button>';

document.getElementById("watch-headline-user-info").parentNode.appendChild(d);