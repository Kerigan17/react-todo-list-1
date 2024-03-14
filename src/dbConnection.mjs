import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Alex109728Mik",
    database:"taskList"
})

// to send from html body
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
});

app.get("/tasks",(req,res)=>{
    const q="SELECT * FROM tasks"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.listen(8800,()=>{
    console.log("Connect to backend.")
});