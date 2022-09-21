import './style.css'

//Reduce()----------------------------------------------------------------------------------------------------------------------

//To argumenter = callbackFunction og startingpoint (typisk 0,men kan være tom array eller object)

//I callbackFunction trenger vi en accumulator = det vi vil redusere arrayen til, og elementene i arrayene = hvert item

/*
array.reduce((accumultator, item, (index), (array)) => {
      ..kode
      return acuumulator;
}, 0/{}/[]);
*/

// Det viktigste: du kan ikke bruke {objectaccess} som parameter. Du trenger parameteret som en komponent, ikke verdien direkte


const mennesker = [
  {name: "Kyle", age: 26},
  {name: "John", age: 31},
  {name: "Sally", age: 42},
  {name: "Jill", age: 42},
];

// den skal loope gjennom hvert item, altså hver person. Samme som let item of items i for loop


const resultat = mennesker.reduce((aGroup, person) => {
  const alder = person.age;
  if (aGroup[alder] === undefined) {
      aGroup[alder] = []};
  aGroup[alder].push(person);
  //console.log(aGroup[alder]); // her har vi pushet, så jeg får fire arrays logget hver for seg.
  return aGroup;
}, {});

//console.log(resultat); // = et objekt, med tre arrays. Personene blir objekter inni, så siste array har to objekter





