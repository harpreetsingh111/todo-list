
const express = require('express');
const path = require('path');
const con = require('./config');
const bodypaser = require('body-parser')

const app = express();

app.set('view engine','ejs')

// app.use(bodypaser.urlencoded())
app.use(express.json());

const publicPath = path.join(__dirname,'public')

app.use(express.static(publicPath));




// app.post('/',(req,resp)=>{
//     const data = [req.body.taskname,req.body.taskpr,req.body.taskdate]
//     con.query(`INSERT INTO user (taskdata, taskpr, taskdate) VALUES ('${req.body.taskname}', '${req.body.taskpr}','${req.body.taskdate}')`),data,(err,result,fields)=>{
//         if(err){
//             resp.send(result)
//         }
//     }
//     console.log(req.body)
// });

app.get('/list',(req,resp)=>{
 const data = con.query(`select * from user`,(err,result)=>{
        resp.render('list',{data})
    })
});


// app.post('/',(req,resp)=>{
//     const data = {taskdata:"day2",taskpr:"admin",taskdate:"22/05/2023"}
//     con.query("insert into user set?",data,(err,result,fields)=>{
//         if(err){
//             resp.send(result)
//         }
//     });
// });

app.listen(3000);