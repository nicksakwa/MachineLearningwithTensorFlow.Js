const express = require('express');
const app= express();
const fs=require('fs').promises;
const path = require('path');
function extractData(obj) {
    return {x: obj.Horsepower, y: obj.Miles_per_Gallon };
}
function removeErrors(obj){
    return obj.x !=null && obj.y != null;
}
async function processingData(){
    try{
        const filePath =path.join(__dirname,'cardata.json');
        const data = await fs.readFile(filePath, 'utf8');
        const values=JSON.parse(data).map(extractData).filter(removeErrors);
        return values;
    }catch (error){
        console.error("Error in processingData", error);
        throw error;
    }
}

app.use(express.static(__dirname));
app.get('/data', async (req, res)=>{
    try{
        const data = await processingData();
        res.json(data);
    }catch(error){
        res.status(500).json('Error fetching data');
    }
});
const port =3000;
app.listen(port, ()=>{
    console.log('Server listening on port ${port}');
})
