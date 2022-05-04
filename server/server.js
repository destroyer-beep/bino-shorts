const dataBase = require('./dataBase.js');
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post('/reg', (req, res, next) => {
  const {name, email, subject, message} = req.body;
  if(dataBase.get(email)) {
    res.status(300);
    res.send("Пользователь уже существует");
  } else {
    dataBase.set(email, {
      name,
      subject,
      message
    })
    res.status(200);
    res.send("Пользователь добавлен");
  }
  
})

app.listen(5000, () => console.log('Server started!'))