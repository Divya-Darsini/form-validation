const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let users = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required!");
  }

  if (!email.includes('@')) {
    return res.status(400).send("Invalid email format.");
  }

  if (password.length < 6) {
    return res.status(400).send("Password too short.");
  }

  users.push({ name, email, password });
  res.send("Form submitted successfully!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
