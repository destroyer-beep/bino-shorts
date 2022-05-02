const dataBase = require('./dataBase.js');
const express = require('express');
const app = express();
app.use(express.json());

app.post('/reg', (req, res) => {
  const body = req.body;
  const name = body.get(name);
  const email = body.get(email);
  const subject = body.get(subject);
  const message = body.get(message);
  if(!dataBase.get(email)) {
    dataBase.set(email, {
      name,
      subject,
      message
    })
    res.status(200).send('User add!');
  } else {
    res.status(500).send(new Error('Пользователь уже существует!'));
  }
  
})

app.listen(5500, () => console.log('Server started!'))