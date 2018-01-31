"use strict";

document.querySelectorAll('nav input')
    .forEach(el => el.addEventListener('click', showOnDisplay));

let entry = '';
let current = '';
let newCurrent = '';
let answer = '';

function showOnDisplay() {
    document.getElementsByTagName('nav input');
    entry = this.value;
    console.log(entry);
    current = document.getElementById('display').innerHTML += entry;

    if (entry === 'C') {
        current = '';
        document.getElementById('display').innerHTML = current;
    }
    else if (entry === 'CE') {
        answer = current.substring(0, current.length - 3);
        document.getElementById('display').innerHTML = answer;
    }
    else if (entry === "=") {
        newCurrent = current.substring(0, current.length - 1);
        answer = eval(newCurrent)
        document.getElementById('display').innerHTML = answer;
    }
}

























/*    if (entry === "=") {
        let string = current.split('/\W/').pop().join(' ');
        console.log(string);
        answer = eval(string); 
        document.getElementById('display').innerHTML = answer;
    }*/


/*    else if (entry === '=') {
    newCurrent = current.split('(?:\d+\.)?\d*(?:e[+\-]?\d+)?|[\s\-\/()+*%=]');
    console.log(newCurrent);
    document.getElementById('display').innerHTML = newCurrent;
}*/
/* (entry === '+' || entry === '&minus;' || entry === '&times;' || entry === '&divide;' || entry === '%' || entry === '%' || entry === '&radic;' || entry === '&radic;')
 */
