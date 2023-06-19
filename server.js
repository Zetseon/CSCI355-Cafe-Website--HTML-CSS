const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

//listen for requests
app.listen(1000)
app.get('/', (req, res) => {
  res.sendFile('./index.html',{root:__dirname});
});
app.get('/index', (req, res) => {
  res.sendFile('./index.html',{root:__dirname});
});
app.get("/menu", (req, res) => {
  res.sendFile('/menu.html',{root:__dirname});
});
app.get("/Contact-Us", (req, res) => {
  res.sendFile('./ContactUs.html',{root:__dirname});
});
app.get("/blogs", (req, res) => {
  res.sendFile('./Blog.html',{root:__dirname});
});
app.get("/about", (req, res) => {
  res.redirect('./index.html#AboutUs');
});
app.get("/subscribe", (req, res) => {
  res.redirect('./index.html#Subscribe');
});
app.use('/', express.static(__dirname));
app.use((req, res) => {
  res.sendFile('./error.html',{root:__dirname});
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});