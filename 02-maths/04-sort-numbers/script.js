/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */


(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        let numArray = [2, 4, 14, 10, 90, 23, 16];
        numArray.sort(function(a, b) {
            return a - b;
        });

        console.log(numArray);
        alert(numArray)
    });

})();
