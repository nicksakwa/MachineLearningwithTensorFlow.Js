const fs=require('fs');
const path =require('path');
function extractData(obj){
    return {x: obj.Horsepower, y: obj.Miles_per_Gallon };
}
 function removeErrors(obj){
    return obj.x != null && obj.y != null;
 }

 async function runTF(){
    try {
    const fetch = await import('node-fetch').then(module => module.default);
    const filePath = path.join('file://',  __dirname,  'cardata.json');
    const jsonData = await fetch(filePath);
    if (!jsonData.ok){
        throw new Error('HTTP error! status: ${jsonData.status}');
    let values = await jsonData.json();
    values = values.map(extractData).filter(removeErrors);
    console.log(values);
    }
    }
    catch (error){
        console.error("Error", error);
    }
}
 
 runTF();
