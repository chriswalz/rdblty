// ==UserScript==
// @name         Rdblty
// @namespace    com.joltimate.rdblty
// @version      0.11
// @description  Makes it easier to read stuff
// @author       Joltimate
// @grant        none
// @include      /https?:\/\/www\.(gnu)\.org\/.*/
// @updateURL    https://github.com/chriswalz/rdblty/blob/master/main.js
// ==/UserScript==
/* jshint -W097 */
'use strict';
// test change
console.log('GNU rdblty enabled');
var body = document.querySelector('body');
body.style.margin = '64px';
body.style.fontSize = '1.5em';
body.style.maxWidth="30em";
body.style.marginLeft = 'auto';
body.style.marginRight = 'auto';
body.style.fontFamily = "Helvetica";
body.style.lineHeight = '1.5em';
//body.style.text = '#FFF';
body.style.letterSpacing = '0.03em';
