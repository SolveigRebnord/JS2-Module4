console.log("hello from fetch");


//fetch tar to arguemnter
// fetch("", {})
//Urlen/endpoint og function


//fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(res => console.log(res))

//Gir hele responsen
//men det vi trenger er egentlig body
//den er i en ReadableStream, altså JSON
//Vi må parse responsen til JS

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    if (response.ok) {
        console.log("success");
        return response.json()
    }
    else {
        console.log("failed"); //den vil aldri nå else og konsolle failed når jeg bare fjerner noe i fetch urlen
    }
})
.then(data => console.log(data))
.catch(error => console.log(error))
*/

//gir deg objektet i body, brukbar som JS
//se koden til Hesh, han gjør noe med .data som ikke fungerer hos meg. Er det pga mitt API?

//fungerer ikke med JSON.parse(response)

const url = "https://noroffcors.herokuapp.com/https://reqres.in/api/users";

fetch("https://noroffcors.herokuapp.com/https://reqres.in/api/users", {
    method: "POST",
    headers :{
        "Content-Type": "application/json"
    },
    body : JSON.stringify({name:"Kevin"})
})
    // .then(res => console.log(res))
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
            return res.json();
        } else {
            console.log("NOT SUCCESSFUL");
        }
    })
    // .then(res => res.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(err => console.log(err))

//istedenfor å ha masse kode kan vi lage en variabel med nødvendig data

const fetchData = {
    method:"POST",
    headers :{
        "Content-Type": "application/json"
    },
    body : JSON.stringify({name:"Sunny"})
};


fetch(url, fetchData)
.then (response => response.json())
.then(data => console.log(data));

fetch(url, )
.then(response => response.json())
.then(data => console.log(data)) 



