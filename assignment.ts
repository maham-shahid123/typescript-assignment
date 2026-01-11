// ================= Task 1 =================
// Variables declaration

let userName: string = "Maham";
let age: number = 22;
let isStudent: boolean = true;

console.log("User Name:", userName);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// any & unknown examples
let randomData: any = "Hello";
let unknownValue: unknown = 123;

console.log("Any type value:", randomData);
console.log("Unknown type value:", unknownValue);

// Function add
function add(a: number, b: number): number {
    return a + b;
}

let addResult = add(10, 20);
console.log("Addition Result:", addResult);

// Function returning formatted string
function getUserInfo(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}

console.log(getUserInfo("Maham", 22));

// Array and sum
let numbers: number[] = [10, 20, 30, 40];
let total: number = 0;

for (let num of numbers) {
    total += num;
}

console.log("Numbers Array:", numbers);
console.log("Sum of numbers:", total);

// Tuple example
let userTuple: [number, string] = [1, "Maham"];
console.log("Tuple Value:", userTuple);


// ================= Task 2 =================
// Interface example

interface User {
    readonly id: number;
    name: string;
    email?: string;
    isActive: boolean;
}

// Object using interface
let user1: User = {
    id: 1,
    name: "Ali",
    isActive: true
};

console.log("User Object:", user1);

// Function using interface
function getUserNameUpper(user: User): string {
    return user.name.toUpperCase();
}

console.log("Uppercase Name:", getUserNameUpper(user1));


// ================= Task 3 =================
// Type Alias example
type ID = string | number;

function checkIdType(id: ID): void {
    console.log("ID Value:", id);
    console.log("ID Type:", typeof id);
}

checkIdType(101);
checkIdType("ABC123");

// Function type (Calculator)
type Calculator = (a: number, b: number) => number;

let addCalc: Calculator = (a, b) => a + b;
let subCalc: Calculator = (a, b) => a - b;
let mulCalc: Calculator = (a, b) => a * b;

console.log("Add:", addCalc(5, 3));
console.log("Subtract:", subCalc(5, 3));
console.log("Multiply:", mulCalc(5, 3));

// Void function
function showMessage(): void {
    console.log("This is a void function example");
}

showMessage();


// ================= Task 4 =================
// OOP Concepts

class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }

    // Method override
    getAge(): number {
        return super.getAge();
    }
}

let student1 = new Student("Maham", 22);
console.log("Student Name:", student1.name);
console.log("Student Age:", student1.getAge());
