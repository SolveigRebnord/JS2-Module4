console.log("from async");



const slow = 10;
const slower = 20;

//console.log("I");

setTimeout(() => {
    //console.log(" eat");
}, 3000);

//console.log(" ice cream");

//Nå kommer eat etter ice cream, bare eat venter 3s



// Callback functions------------------------------------------------------------------------------------------------------------------

function doSomethingWithCallBack(callbackFunction) {
    //calling function
    callbackFunction();
};


doSomethingWithCallBack(exampleFunction);



function exampleFunction() {
    console.log("Yey");
};

// Funksjonen som faktisk gjør noe og funksjonen som gjennomfører en funksjon med parameter. Sammen kaller på the do'er 
// Callback funksjonen er den som har innhold, blir hentet av callet


function showName() {
    console.log("Me");
};


function whoIsEatingIceCream (callBack) {
    callBack();
};

whoIsEatingIceCream(showName);

//Ahh. Poenget er at vi ikke trenger si hva funksjonen er i parameterert i whoisEating, vi sier at det kommer en funksjon,og kjør denne funksjonen med callback(). Så kan whoIsEating kjøre hvilken som helst funksjon 



// filter() er godt sted å bruke callbacks


const values = [3,6,1,9];

function below5 (number) {
    return number < 5;
};

const numbersBelow5 = values.filter(below5);
console.log(numbersBelow5);





//Promise----------------------------------------------------------------------------------------------------

const myPromise = new Promise((resolve, reject) => {
    const value = true;
    if (value) {
        resolve("Yey success");
    }
    else {
        reject("You failed");
    };
});

console.log(myPromise);



//Chaining, for å unngå callback helvete
//basically, gjør funksjonen etter forrige, eller når andre koden er på plass

//function, .then() .then()

//fetch returnerer et promise, og .then() vil bare fortsette om forrige kode er gjennomført


fetch('https://jsonplaceholder.typicode.com/todos/1')
  // We have to asynchronously parse the data into JSON
  //   so we can make use of it
  .then((response) => response.json())
  // Data is now available as
  .then((json) => console.log(json));


//med catch() og finally()


let isLoading = true;

  const loadingP = document.getElementById("loading");






fetch("https://jsonplaceholder.typicode.com/todos/1")

  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    updateLoading();
})
  .catch((error) => console.log(error))
  .finally(() =>{
    isLoading = false
    updateLoading();
  });



  function updateLoading() {
    if (isLoading === false) {
        loadingP.innerHTML = null;
  }
};