
/*const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "student.html"; }
if (!id) { window.location = "ansatt.html"; }*/


// Lage en egen url---------------------------------------------------------------------


// Get container

const container = document.getElementById("container");

// Values vi vil ha i urlen

const firstName = "Solveig";
const lastName = "Rebnord";


// create anchor tag

const url = document.createElement("a"); // en tom <a></a> tag



// Enten bakveis måte

url.href = `https://example.com/?firstName=${firstName}&lastName=${lastName}`; 
//The HTMLAnchorElement.href property is a stringifier that returns a string containing the whole URL, and allows the href to be updated

console.log(url);

url.innerHTML = "Submit"; // eller url.textContent gjør samme




// eller bare skrive dette inni når du lager href'en
// url.innerHTML += `<a href="https://example.com/?firstName=${firstName}&lastName=${lastName}" Submit></a>;

// !!!   += ved innerHTML, why?


container.appendChild(url); //Link lagt inni diven



// Så motsatt, hvis vi vil hente verdiene fra urlen til siden vår?
// Trenger window objektet

//console.log(window); // gir deg en million muligheter, men vi trenger nå location og dens search

//console.log(window.location);
//console.log(window.location.search); 



// Så vi lager et søk

const paramString = window.location.search; // dette ville gitt meg linken i nettleseren, men bare det etter ?

//console.log(url);
const queryString = url.search;
//console.log(queryString);

const searchParams = new URLSearchParams(url.search).get("lastName"); 
// Så her med url må jeg ha bare query stringen, det etter ?, og må derfor bruke .search. 
// .search skraper derfor vekk https//hovedblabla
//Da funker .get, eller loope gjennom og logge alle parameterne


console.log(searchParams);//gir Rebnord


// kan gjøre det fortere med searchParams. Er på en måte objektet pakket inni en readonly prop som gjør det kjappere
// men måtte bruke new URL(urlen), gikk ikke med url.searchParams

const what = (new URL(url).searchParams);

//const name = what.get('firstName');

//console.log(name);

let theUrl = new URL(url);

const link = new URLSearchParams(theUrl.search);

//link.set("age", 6);
//const newestLink = link.toString(); // dette gir den siste versjonen, query stringen med nytt parameter


link.append("age", 12); // gjør det samme som set, men må og her ha toString
const evenNewer = link.toString();

console.log(evenNewer); 