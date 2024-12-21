// 1

const user = {
    name: "Katy",
    age: 90,
    hobby: "reading",
    premium: true,
}
user.mood = "happy";
user.hobby = "skydiving";
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// 2

function countProps(obj) {
    return Object.keys(obj).length;
}
const exampleObject = {
    name: "Sigma",
    age: 25,
    occupation: "developer",
};
console.log(countProps(exampleObject));

// 3

function findBestEmployee(employes) {
    let bestEmployee = null;
    let maxTasks = 0;
    for (const [name, tasks] of Object.entries(employes)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
}
const employes = {
    Turka: 5,
    Bob: 12,
    Babyra: 8,
};
console.log(findBestEmployee(employes));

// 4

function countTotalSalary(employees) {
    let totalSalary = 0;
    for (const salary of Object.values(employees)) {
    }

    return totalSalary;
}
const employees = {
    Nuna: 500,
    Roma: 200,
    Borba: 800,
};
console.log(countTotalSalary(employees));

// 5

function getAllPropValues(arr, prop) {
    const values = [];
    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }
    return values;
}
const prodducts = [
    { name: "Apple", price: 30, quantity: 3 },
    { name: "Banana", price: 20, quantity: 5 },
    { name: "Cherry", price: 50 },
];
console.log(getAllPropValues(prodducts, "name"));
console.log(getAllPropValues(prodducts, "quantity"));
console.log(getAllPropValues(prodducts, "price"));
console.log(getAllPropValues(prodducts, "category"));

// 6

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }

    return totalPrice;
}
const products = [
    { name: "Laptop", price: 1000, quantity: 2 },
    { name: "Phone", price: 500, quantity: 4 },
    { name: "Tablet", price: 300, quantity: 3 },
    { name: "Headphones", price: 150, quantity: 5 },
];
console.log(calculateTotalPrice(products, "Laptop")); 
console.log(calculateTotalPrice(products, "Phone")); 
console.log(calculateTotalPrice(products, "Tablet")); 
console.log(calculateTotalPrice(products, "Headphones"));
console.log(calculateTotalPrice(products, "Camera")); 

