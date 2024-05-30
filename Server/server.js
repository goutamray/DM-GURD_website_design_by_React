
import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import userRouter from "./routes/user.js"

// env config 
dotenv.config();

// port config 
const PORT = process.env.PORT || 6060 

// initilization express
const app = express(); 


// app support 
app.use(express.json());
app.use(express.urlencoded({ extended : false })); 


// static folder 
app.use(express.static("public")); 


// app route 
app.use("/api/v1/user", userRouter); 


// listen server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
}); 













