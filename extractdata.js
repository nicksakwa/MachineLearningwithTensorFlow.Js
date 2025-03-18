function extractData(obj){
    return { x: obj.Horsepower, y: obj.Miles_per_Gallon};
}

let car={
    Make: "Toyota",
    Model: "Camry",
    Horsepower: 150,
    Miles_per_Gallon: 30,
    Color: "Silver",
};
 
let extracted = extractData(car);
console.log(extracted);