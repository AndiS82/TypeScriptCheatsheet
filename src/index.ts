console.log('hello')

let age: number = 20;

if (age > 50)
    age += 10;

    // Primitives:

let sales: number = 123_456_789;
let sales2 = 321;
// ts compiler knows it's a number, because sales2 is initialized with a number

let course: string = 'TypeScript';
let is_published: boolean = true;

let affe;
// no initialization means ts compiler assumes it's any
// any defeats the purpose of TS, though

// function render(document) {
//     console.log(document)
// }

// the function above throws an error due to implicit any, so either enable and set it to false in tsconfig.json or declare it like below:
function render(document: any) {
    console.log(document)
}

// Arrays
let numbers = [1, 2, '3'];
// string and numbers mixed, yet no error because valid in JS

// let numbers: number[] = [1, 2, '3'];
// ts would throw an error because it recognizes the string in the numbers array

let trueNumbers: number[] = [1,2,3]
// the : number[] is optional
// empty array would turn it "any"
