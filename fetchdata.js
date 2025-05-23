const fs=require('fs').promises;
const path =require('path');
function extractData(obj){
    return {x: obj.Horsepower, y: obj.Miles_per_Gallon };
}
 function removeErrors(obj){
    return obj.x != null && obj.y != null;
 }

 async function runTF(){
    try {
    const filePath = path.join( __dirname,  'cardata.json');
    const data = await fs.readFile(filePath, 'utf8');
    const values = JSON.parse(data);

    console.log(values);
    }
    catch (error){
        console.error("Error", error);
    }
}
 
 runTF();
