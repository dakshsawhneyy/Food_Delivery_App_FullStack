const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/yumdrop"

async function connectToMongo(){
    await mongoose.connect(mongoURI).then(async() => {console.log("Connected to Mongo Successfully")}).catch(err => console.log(err))}

 // Run by npm run dev
module.exports = connectToMongo;



//package.json mei scripts wale folder mei bhi kuch dala hai usko dekh lo


/* const fetched_data = await mongoose.connection.db.collection("FoodData");
fetched_data.find({}).toArray(function(err, data){
    if(err) console.log(err)
    else{
        global.FoodData = data;
        console.log(global.FoodData);
}
}) */