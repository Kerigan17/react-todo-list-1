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

app.get("/tasks",(req,res)=>{
    const q="SELECT * FROM tasks";
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/addTask", (req, res) => {
    const {task, completed} = req.body;
    const q='INSERT INTO tasks(task, completed) values(?, ?)';
    db.query(q, [task, completed], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/deleteTask", (req, res) => {
    const q='DELETE FROM tasks WHERE id=?';
    db.query(q, [req.body.id, ], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.post("/updateTask", (req, res) => {
    const q='UPDATE tasks SET completed = true WHERE id = ?';
    db.query(q, [req.body.id], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800,()=>{
    console.log("Connect to backend.");
});