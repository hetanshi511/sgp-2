const mongoose = require("mongoose");

const DB = "mongodb+srv://heta:2004@cluster0.phzzsit.mongodb.net/sgp?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})