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
    const jsonData= await fetch('cardata.json');
    let values = await jsonData.json();
    values= values.map(extractData).filter(removeErrors);
    const surface1= document.getElementById("plot1");
    tfplot(value,surface1);
}

runTF();