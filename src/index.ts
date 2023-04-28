console.log('hello')

let age: number = 20;

if (age > 50)
    age += 10;

    // <===PRIMITIVES===>

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

// <===ARRAYS===>
let numbers = [1, 2, '3'];
// string and numbers mixed, yet no error because valid in JS

// let numbers: number[] = [1, 2, '3'];
// ts would throw an error because it recognizes the string in the numbers array

let trueNumbers: number[] = [1,2,3]
// the : number[] is optional
// empty array would turn it "any"
// see syntax above if you wanna make sure the array can't be mixed

// <===TUPLES===>

// = fixed length array where each element has a perticular type, like id:number and name:string

let user: [number, string] = [1, 'Andi'];

// let user2: [number, string] = [1, 'Andi', 12];
// doesn't work because the tuple is declared as number, string. If it was number, string, number, then it would work.

// user.push(1);
// possible, but problematic

// KEEP TUPLES SHORT! JUST 2 VALUES!

// <===ENUMS===>

const small = 1;
const medium = 2;
const large = 3;

const enum size{ small =1, medium, large }
// you could also set values as you wish inside the {}

let newSize: size = size.medium;
console.log(newSize);

// <===FUNCTIONS===>

function calculateTax(income: number) {
    
}
// void because no defined return value

function calculateTax2(income: number) {
    return 0;
}
// returns number now, but types need to be properly annotated

function calculateTax3(income: number):number {
    return 0;
}

// immediate compilation error when wrong values are to be returned; if you want it to return an empty vale, use :void instead of :number between the brackets

// to ensure you don't forget never read values and implicit returns, go to tsconfig.json and activate 
// "noUnusedParameters";true,
// "noImplicitReturns":true,

function calculateTax4(income: number):number {
    if (income < 50_000)
        return income * 1.2;
    //without code below it would return undefined when >50_000; the else is optional here
    return income * 1.3
    
    let x;
    // no unused variables => set tsconfig "noUnusedLocals":true,
}

function calculateTax5(income: number, taxYear: number): number{
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}

// now if you wanna call that function, you need exactly 2 parameters: income and taxYear
//any extra parameters would throw compilation errors in TS but not in JS

calculateTax5(10_000, 2022)

// if you wanna make parameters optional, add a ? and adjust syntax in if()

function calculateTax6(income: number, taxYear?: number): number{
    if ((taxYear || 2022) < 2023)
        return income * 1.2;
    return income * 1.3;
}

// alternatively you could assign a fixed value. If you don't assign a value when calling the function, it'll automatically take the fixed, else it will overwrite it with the one you assigned on call

function calculateTax7(income: number, taxYear=2022): number{
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax7(10_000)
// would automatically assign 2022 as the 2nd parameter; the double parenteses aren't needed anymore

calculateTax7(10_000, 2023)
// overwrites 2022 with 2023

// <===OBJECTS===>

let employee = { id: 1 };

// employee.name = 'Andi';
// would work in JS, but doesn't in TS because the TS compiler assumes the value to be a number, not a string

let employee2: {
    id: number,
    name:string
} = { id: 1, name: 'Andi' }

// fixed it :-), empty string works too, if you don't want to declare it now

// with this syntax you can change the values anytime, which may be unwanted
//fix this by adding the readonly property before the values

let employee3: {
    readonly id: number,
    readonly name:string
} = { id: 1, name: 'Andi' }

// employee3.name = 'affe'; wouldn't work anymore

// methods inside objects:

let employee4: {
    readonly id: number,
    readonly name: string,
    retire: (date: Date) => void;
    // you could return something else, of course but you have to add the retire to the declaration in either case
} = {
    id: 1,
    name: 'Andi',
    retire: (date: Date) => {
        console.log(date)
    }
}

// kinda messy code