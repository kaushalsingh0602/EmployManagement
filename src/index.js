import express from "express";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import { connect } from "./config/database.js";
import dotenv from "dotenv";
import cors from "cors";
import User from "./models/t_login.js"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", apiRoutes);

dotenv.config();

const PORT = process.env.PORT;

app.listen(5000, async () => {
  console.log(`server started at PORT-${PORT}`);
  await connect().then(()=>{
    console.log("mongodb connected");
    init();
})
 async function init(){
    var user= await User.findOne({name:"kaushal"});

    if(user){
        return;
    }else{

//admin
    const user=await User.create({
        name:"kaushal",
        email:"kaushalsingh8178@gamil.com",
        password:'welcome06'
    })
    console.log("admin is created")
  }
}
});
