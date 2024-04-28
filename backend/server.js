import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import cors from "cors";
import path from "path";
import { log } from 'console';
const app= express();
const port= 8080

app.use(express.json());
app.use(express.urlencoded(({extended:true})));
app.use(cors())



app.get('/mydata',(req,res)=>{
    return res.status(200).json({
        message:"Data Backend se aa gya maza karo"
    })
})
const __dirname=path.resolve();
if(process.env.NODE_ENV === "production"){
    console.log("hii");
    app.use(express.static(path.join(__dirname,'frontend','build')));
    app.get('*',(req,res)=>{
        return res.sendFile(path.join(__dirname,'frontend','build','index.js'))
    })
}else{
    app.get('/*',(req,res)=>{
        return res.json({
            message:"API is working"
        })
    })
}


app.listen(port,()=>{
    console.log(`Server is running on the port :: ${port}`);
})