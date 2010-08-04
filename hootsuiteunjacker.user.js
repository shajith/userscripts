// ==UserScript==
// @name           Hootsuite Un-jacker
// @namespace      http://github.com/shajith
// @description    Kill Hootsuite's framejacking. Why: http://www.informationweek.com/788/88uwdw.htm
// @include        http://ht.ly/*
// ==/UserScript==

theFrame = document.querySelectorAll('iframe')[0];

document.location.href = theFrame['src'];

