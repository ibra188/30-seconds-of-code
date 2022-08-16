//URL parameters as object
// Creates an object containing the parameters of the current URL
// this is made my ebrima sonko 

const getURLParameters = url => 
(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
  (a, v) => (
    (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
  ),
  {}
);

gitURLParameters('google.com'); // {}
gitURLParameters('http://url.com/page?name=Adam&surname=Smith')
//{name: '', surname: ''}


//Create HTML element
const createElement = str => {
  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstChild;
};

//template reteral

const el = createElement(
  `<div class="container">
      <p>Hello</p>
   </div>`
);
console.log(el.className); // container