import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));

const API_KEY = "2787464fa9bbe37e7b1e7d7bb52382e3";

app.get("/", async (req,res) => {
     res.render("index.ejs");
});


app.post("/details/send",async (req,res) => {

    const {lat,lon} = req.body;
    
    try{

        const result = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
            params:{
               lat:lat,
               lon:lon,
               appid:API_KEY,
               units: "metric",

            },
        });

        res.render("info.ejs",{ data: result.data})

    }catch(error){
        console.log('error has been ocured');
    }

})










app.listen(port , () => {
    console.log(`server running at port ${port}`);
});