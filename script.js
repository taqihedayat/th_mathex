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
