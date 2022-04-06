type Person = {
  name: string;
  age: number;
};

type Company = {
  companyName: string;
  boss: Person;
  employees: Person[];
  employeeOfTheMonth: Person;
};

let personObj: Person = {
  name: "me",
  age: 23,
};

let companyObj: Company = {
  companyName: "Test",
  boss: personObj,
  employees: [personObj, personObj, personObj],
  employeeOfTheMonth: personObj,
};

const employeeMaker = (object: Company) => {
  const result = object.employees;
  console.log(result);
  return result;
};

// employeeMaker(companyObj);

enum Numbers {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
}

type mathFunc = (a: number, b: number) => number;

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const wrongAdd = (a: number, b: number) => a + `${b}`;

const mathsGuy = (func: mathFunc, a: Numbers, b: Numbers) => {
  const result = func(a, b);

  console.log(result);

  return result;
};

mathsGuy(add, Numbers.One, Numbers.Two);

enum IDs {
  Sam = 0,
  Miranda = 1,
  Row = 2,
  Barney = 3,
}

type ChristmasObj = { customer: Person; id: IDs; sorted: boolean };

type ChristmasDecorations<T> = {
  tree: T;
  decorations: T[];
  people: [T, T];
};

let christmasTime: ChristmasDecorations<string> = {
  tree: "Pine",
  decorations: ["baubles", "lights", "tinsel"],
  people: ["Santa", "Mrs Claus"],
};

let christmasBool: ChristmasDecorations<boolean> = {
  tree: true,
  decorations: [true, true, true],
  people: [false, false],
};

let christmasFullObj: ChristmasDecorations<ChristmasObj> = {
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

const getFilledArray = <T>(value: T, n: number): T[] => {
  const result = Array(n).fill(value);
  console.log(result);
  return result;
};

type Address = {
  first_line: string;
  second_line: string;
  city: string;
  postcode: string;
};

enum Sizes {
  Small = "100g",
  Medium = "200g",
  Large = "300g",
  Vat = "50kg",
}

enum Sauces {
  Tomato = "0123",
  Barbecue = "0124",
  Sriracha = "0125",
}

enum Marinades {
  Curry = "1234",
  Sticky_Glaze = "1235",
}

type Sauce = {
  id: Sauces;
  size: Sizes;
};

type Marinade = {
  id: Marinades;
  size: Sizes;
};

type Everything = Sauce | Marinade;

type Order = {
  order_id: number;
  orders: Everything[];
  address: Address;
  order_time: string;
};

let orderOne: Order = {
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
