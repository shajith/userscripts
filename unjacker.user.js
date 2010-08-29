// ==UserScript==
// @name           iFrame Un-jacker
// @namespace      http://github.com/shajith
// @description    Kill framejacking by HootSuite and StumbleUpon. Why: http://www.informationweek.com/788/88uwdw.htm
// @include        http://ht.ly/*
// @include        http://www.stumbleupon.com/*
// ==/UserScript==

theFrame = document.querySelectorAll('iframe')[0];

document.location.href = theFrame['src'];

