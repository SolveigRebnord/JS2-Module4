console.log("hello from async");

function doMe () {
    console.log("Im done")
};

try {
    doMe()
} catch (error) {
    console.log(error, "ups fail");
} finally {
    console.log("I finished yey");
}

//får både doMe og finally responsen i konsoll
// feks noe i doMe(paramterer) i try gir error, får da error og ups fail


async function getUsers() {
    //const users = await fetch("https://reqres.in/api/users")
    //const usersJS = await users.json();
    //console.log(usersJS);

    try {
        const users = await fetch("https://reqres.in/api/users")
        const usersJS = await users.json();
        console.log(usersJS)

    } catch (error) {
        console.log(error, "oh no");

    } finally {
        console.log("something anyways");
    }
};

//getUsers();
//const theUsers = getUsers();
//console.log(theUsers); // gir et promise, men result er undefined
//han sa noe om at du må ha promise for å hente ut data, med return fra try antar jeg

// her har vi en async funksjon. Alle kommandoer som er avhengig av forrige ledd inni funksjonen må ha en await

//bruker try,catch og finally under. Får resultatet to ganger i konsoll. Wrapper all kode inni try, da kan vi behandle erroren om vi får det



async function doFetch(url) {
    try {
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
};

//her gjør vi en call
doFetch('https://jsonplaceholder.typicode.com/todos/1');


// men finnes måte å gjøre flere på, med et nytt promise


async function main() {
    const data = await Promise.all(([
        doFetch('https://jsonplaceholder.typicode.com/todos/1'),
        doFetch('https://jsonplaceholder.typicode.com/todos/2'),
        doFetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]))
    console.log(data);
};

main(); // vi får en array, med objektet fra kallet.

// Totalt får vi en konsoll logg fra funksjon på 60, det er konsoll logg inni try
//Også en konsoll logg fra alle tre i try, også en array som vi har laget i funksjonen main()
// Så promise.all() er geniaaal

// du kan ta vekk function, main og det at du må kalle på den, selvkjørt funksjon
// Det er IIFE, kommer senere på moodle