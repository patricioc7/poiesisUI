const api = require('express').Router();
const request = require('request');

api.get('/holis/', (req, res) => {
  res.status(200).json({ message: 'ahi va!' });
});

api.post('/login/', (req, res) => {
  request.post(
    'http://localhost:8080/user/login',
    {
      json: {
        email: req.body.email,
        password: req.body.password,
      },
      headers: {
        'Content-Type': 'application/json',
        'x-clientSecret': 'wolololoaka',
      },
    },
    (error, res2, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(body);
      res.status(200).json({ jwt: body.token, username: body.name });
    },
  );
});

module.exports = api;
