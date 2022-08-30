//URL parameters as object
// Creates an object containing the parameters of the current URL
// this is made my ebrima sonko 


/**
 *
 * const getURLParameters = url =>
 * (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
 *   (a, v) => (
 *     (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
 *   ),
 *   {}
 * );
 *
 * gitURLParameters('google.com'); // {}
 * gitURLParameters('http://url.com/page?name=Adam&surname=Smith')
 * //{name: '', surname: ''}
 *
 *
 * //Create HTML element
 * const createElement = str => {
 *   const el = document.createElement('div');
 *   el.innerHTML = str;
 *   return el.firstChild;
 * };
 *
 * //template reteral
 *
 * const el = createElement(
 *   `<div class="container">
 *       <p>Hello</p>
 *    </div>`
 * );
 * console.log(el.className); // container
 */

//Finding HTML Elements id
document.getElementById("demo1").innerHTML = "Hello sonko";

//Finding HTML Elements by ClassName
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML =
    'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

//Finding HTML Elements by CSS Selectors

const x1 = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML =
    'The first paragraph (index 0) with class="intro" is: ' + x1[0].innerHTML;

//Finding HTML Elements by HTML Object Collections
const myForm = document.forms["frm1"];
let text = "";
for (let i = 0; i < myForm.length ;i++) {
    text += myForm.elements[i].value + "<br>";
}
document.getElementById("demo2").innerHTML = text;