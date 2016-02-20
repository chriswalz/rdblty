// ==UserScript==
// @name         Readablity
// @version      0.1
// @description  Makes it easier to read stuff
// @author       Joltimate
// @grant        none
// @include      /https?:\/\/www\.(gnu)\.org\/.*/
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
