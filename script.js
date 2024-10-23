// Create an object representation of yourself. Should include:
// First Name, Last Name, Favorite food
// Best firend (object the same 3 properties as above) 

const myObject = {
    firstName:      "Mohammad Taqi",
    lastName:       "Hedayat",
    favoriteFood:   "Bolani",
    bestFirend : {
        firstName:      "Habib",
        lastName:       "Afzali",
        favoriteFood:   "Kabab",
    }
};

// Exampale Value
console.log(myObject.firstName);
// Nested object value
console.log(myObject.bestFirend.lastName);
// Printing all object properties
console.log(myObject);

// Define the valriable for address
const firstName = "Mohammad Taqi";
const lastName = "Hedayat";
const streetAdd = "56th Ave w";
const city = "Seattle";
const state = "WA";
const zipCode = "98143"

// Created a formatted address block
const formatedAdd = `
    ${firstName} ${lastName}
    ${streetAdd}
    ${city}, ${state} ${zipCode}`;

console.log("Formated Address: ");
console.log(formatedAdd);

// Regular expression (regex) validate the email format 

// varible ging the email string
const myEmail = "ta.ha@yahoo.com"; // 

// Regular expression
const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/;

// Function to check if the email is valid
function isValidEmail(myEmail) {
    return emailRegex.test(myEmail);
}

// Check the email and print the result
if (isValidEmail(myEmail)) {
    console.log(`${myEmail} is a valid email format.`);
} else {
    console.log(`${myEmail} is not a valid email format.`);
}

