"use strict";
console.log('hello');
let age = 20;
if (age > 50)
    age += 10;
let sales = 123456789;
let sales2 = 321;
let course = 'TypeScript';
let is_published = true;
let affe;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, '3'];
let trueNumbers = [1, 2, 3];
let user = [1, 'Andi'];
const small = 1;
const medium = 2;
const large = 3;
let newSize = 2;
console.log(newSize);
function calculateTax(income) {
}
function calculateTax2(income) {
    return 0;
}
function calculateTax3(income) {
    return 0;
}
function calculateTax4(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
    let x;
}
function calculateTax5(income, taxYear) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax5(10000, 2022);
function calculateTax6(income, taxYear) {
    if ((taxYear || 2022) < 2023)
        return income * 1.2;
    return income * 1.3;
}
function calculateTax7(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax7(10000);
calculateTax7(10000, 2023);
let employee = { id: 1 };
let employee2 = { id: 1, name: 'Andi' };
let employee3 = { id: 1, name: 'Andi' };
let employee4 = {
    id: 1,
    name: 'Andi',
    retire: (date) => {
        console.log(date);
    }
};
let employee5 = {
    id: 1,
    name: 'Andi',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map