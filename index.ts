// Type Narrowing 

let person: unknown = "Areeba"
person = 22
// person = true
// person = ["Nigar", 15, true]

console.log(person);

// person.length // error

// type Narrowing

if(typeof person === "string"){
    console.log(person.length);
}


// let name1: string = "Nigar"
// console.log(name1.length);


// explicitly & implicitly 

let name1 = "areeba" // type infer / implicitly type

let name2: string = "Nigar" // strong typing / explicitly type

// Explicit casting 

let language: unknown = "Typescript";

// language.length // error

console.log((language as string).length);































