"use strict";
let personObj = {
    name: "me",
    age: 23,
};
let companyObj = {
    companyName: "Test",
    boss: personObj,
    employees: [personObj, personObj, personObj],
    employeeOfTheMonth: personObj,
};
const employeeMaker = (object) => {
    const result = object.employees;
    console.log(result);
    return result;
};
// employeeMaker(companyObj);
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 1] = "One";
    Numbers[Numbers["Two"] = 2] = "Two";
    Numbers[Numbers["Three"] = 3] = "Three";
    Numbers[Numbers["Four"] = 4] = "Four";
})(Numbers || (Numbers = {}));
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const wrongAdd = (a, b) => a + `${b}`;
const mathsGuy = (func, a, b) => {
    const result = func(a, b);
    console.log(result);
    return result;
};
mathsGuy(add, Numbers.One, Numbers.Two);
var IDs;
(function (IDs) {
    IDs[IDs["Sam"] = 0] = "Sam";
    IDs[IDs["Miranda"] = 1] = "Miranda";
    IDs[IDs["Row"] = 2] = "Row";
    IDs[IDs["Barney"] = 3] = "Barney";
})(IDs || (IDs = {}));
let christmasTime = {
    tree: "Pine",
    decorations: ["baubles", "lights", "tinsel"],
    people: ["Santa", "Mrs Claus"],
};
let christmasBool = {
    tree: true,
    decorations: [true, true, true],
    people: [false, false],
};
let christmasFullObj = {
    tree: {
        customer: {
            name: "Name",
            age: 34,
        },
        id: IDs.Miranda,
        sorted: true,
    },
    decorations: [
        {
            customer: {
                name: "Name",
                age: 34,
            },
            id: IDs.Miranda,
            sorted: true,
        },
        {
            customer: {
                name: "Name",
                age: 34,
            },
            id: IDs.Sam,
            sorted: false,
        },
        {
            customer: {
                name: "Name",
                age: 34,
            },
            id: IDs.Miranda,
            sorted: true,
        },
    ],
    people: [
        {
            customer: {
                name: "Name",
                age: 34,
            },
            id: IDs.Miranda,
            sorted: true,
        },
        {
            customer: {
                name: "Name",
                age: 34,
            },
            id: IDs.Miranda,
            sorted: true,
        },
    ],
};
const getFilledArray = (value, n) => {
    const result = Array(n).fill(value);
    console.log(result);
    return result;
};
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "100g";
    Sizes["Medium"] = "200g";
    Sizes["Large"] = "300g";
    Sizes["Vat"] = "50kg";
})(Sizes || (Sizes = {}));
var Sauces;
(function (Sauces) {
    Sauces["Tomato"] = "0123";
    Sauces["Barbecue"] = "0124";
    Sauces["Sriracha"] = "0125";
})(Sauces || (Sauces = {}));
var Marinades;
(function (Marinades) {
    Marinades["Curry"] = "1234";
    Marinades["Sticky_Glaze"] = "1235";
})(Marinades || (Marinades = {}));
let orderOne = {
    order_id: 1,
    orders: [
        { id: Sauces.Tomato, size: Sizes.Small },
        { id: Marinades.Curry, size: Sizes.Medium },
    ],
    address: {
        first_line: "string",
        second_line: "string",
        city: "string",
        postcode: "string",
    },
    order_time: Date.now().toString(),
};
