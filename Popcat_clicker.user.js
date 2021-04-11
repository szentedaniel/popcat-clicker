// ==UserScript==
// @name         Popcat clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  nyet
// @author       szentedaniel
// @match        https://popcat.click/
// @icon         https://www.google.com/s2/favicons?domain=popcat.click
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const keyboardEvent = document.createEvent('KeyboardEvent');
    const initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? 'initKeyboardEvent' : 'initKeyEvent';

    keyboardEvent[initMethod](
        'keydown', // event type: keydown, keyup, keypress
        true, // bubbles
        true, // cancelable
        window, // view: should be window
        false, // ctrlKey
        false, // altKey
        false, // shiftKey
        false, // metaKey
        40, // keyCode: unsigned long - the virtual key code, else 0
        0, // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
    );


    setInterval(function(){
        try{
            document.dispatchEvent(keyboardEvent);
        }catch(err) {}
    }, 1);

})();