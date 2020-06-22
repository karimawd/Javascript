/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function questions() {

'use strict';
    alert("Answer the next 3 questions");
    let age = prompt ("How old are you?");
    let gender = prompt ("what is your gender?");
    let city = prompt ("in which city do you live?");
    if (confirm(`you are ${age} years old, you are a ${gender}, you live in ${city}`)) {
    } else {
        questions();
    }
})();
