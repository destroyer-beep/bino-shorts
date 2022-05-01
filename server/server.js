const dataBase = require('./dataBase.js');
const express = require('express');
const app = express();

app.post('/regist', (req, res) => {
  // try {
    console.log(req.body)
    const body = req.body;
    console.log(body);
  //   const {userName, email, subject, message} = body;
  //   const getUser = dataBase.keys(email);
  //   if (getUser) {
  //     throw new Error('Данная почта уже зарегистрирована');
  //   } else {
  //     dataBase.set(email, {
  //       userName,
  //       subject,
  //       message
  //     });
  //     res.status(200).send('Пользователь сохранен');
  //   }
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }
})

app.listen(3000, () => console.log('Server started!'))