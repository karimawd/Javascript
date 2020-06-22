/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let date = new Date();
    let currentDate = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: "2-digit", minute: '2-digit'};
    document.getElementById("target").innerHTML = new Date().toLocaleDateString("en-gb", currentDate);


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();


