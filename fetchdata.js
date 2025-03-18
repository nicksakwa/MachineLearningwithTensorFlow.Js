function extractData(obj) {
    return { x: obj.Horsepower, y: obj.Miles_per_Gallon };
  }
  
  let carData = [
    { Make: "Toyota", Model: "Camry", Horsepower: 150, Miles_per_Gallon: 30, Color: "Silver" },
    { Make: "Honda", Model: "Civic", Horsepower: 120, Miles_per_Gallon: 35, Color: "Blue" },
    { Make: "Ford", Model: "Mustang", Horsepower: 300, Miles_per_Gallon: 20, Color: "Red" },
    { Make: "Chevrolet", Model: "Impala", Horsepower: null, Miles_per_Gallon: 25, Color: "Black" }
  ];
  
  let extractedCarData = carData.map(extractData);
  
  console.log(extractedCarData);