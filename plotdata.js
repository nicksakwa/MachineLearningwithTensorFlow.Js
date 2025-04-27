const fs = require('fs').promises
function extractData(obj){
    return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj){
    return obj.x != null && obj.y != null;
}
function tplot(values, surface){
    tfvis.render.scatterplot(surface,
        {value:values, series:['Original','Predicted']},
        {xLabel:'Horsepower', yLabel:'MPG',});
}
async function runTF(){
    try{
    const jsonData= await fs.readFile('cardata.json', 'utf-8');
    const values = JSON.parse(jsonData).map(extractData).filter(removeErrors);
    const surface1= document.getElementById("plot1");
    tfplot(value,surface1);
} catch(error) {
    console.error("Error reading or processing the JSON file:", error);
}
}

runTF();