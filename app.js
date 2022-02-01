const express = require('express');
const app = express();
app.use(express.static('public'));
/*
const path = path.require('path')
*/

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/views/home.html')
});

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/views/login.html')
});

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/views/register.html')
});

/*process.env.PORT */
app.listen ( process.env.PORT || 3030 , ()=> {
console.log('app corriendo en el puerto 3000')
});


