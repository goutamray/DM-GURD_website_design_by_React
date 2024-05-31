
import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import userRouter from "./routes/user.js"
import { errorHandler } from "./middlewares/errorHandler.js";

// initialization 
dotenv.config();
const app = express();  

// invironment var 
const PORT = process.env.PORT || 6060;


// app support 
app.use(express.json());
app.use(express.urlencoded({ extended : false })); 


// static folder 
app.use(express.static("public")); 


// app route 
app.use("/api/v1/user", userRouter); 


// error handler 
app.use(errorHandler)

// listen server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
}); 













