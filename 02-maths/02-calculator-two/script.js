/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calc(i) {
    switch (i) {
        case "addition":
            return (parseFloat(document.getElementById("op-one").value)+
                parseFloat(document.getElementById("op-two").value));
        case "substraction":
            return (parseFloat(document.getElementById("op-one").value)-
                parseFloat(document.getElementById("op-two").value));
        case "multiplication":
            return (parseFloat(document.getElementById("op-one").value)*
                parseFloat(document.getElementById("op-two").value));
        case "division":
            return (parseFloat(document.getElementById("op-one").value)/
                parseFloat(document.getElementById("op-two").value));
    }
}

(function() {
    var btns = document.getElementsByClassName( "operator")
    console.log(btns)
    for (let i=0; i<btns.length; i++){
        btns[i].addEventListener("click", e=>{
            let operator=e.target.id;
            alert(calc(operator))

        })
}
})();
