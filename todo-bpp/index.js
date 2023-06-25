const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const mysql = require('mysql');
const app = express()
const port = 3001


app.use(cors())
app.use(bodyParser.json());

// route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/backend', (req, res) => {
  res.send({data:"Hello from Backend"})
})

// App Listener
/* app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

connection.connect(function(err) {
  if (err) {throw err;}
  else{
      console.log("Connected!");
      app.listen(port,function(){
          console.log("Listening on HTTP://localhost:"+port)
      });
  }
});

function getAll(req, res) {
  // Create connection
  const conecction = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "crud"
  });
  conecction.connect(function(err) {
      // Connection Failed
      if (err) res.status(200).send({"conecction": "Database connection error"});
      // Get todo_list data
      conecction.query("select * from todo_list", function (err, result) {
          // String to JSON
          const json = JSON.stringify(result);
          // Send JSON
          res.send(json);
      });
      // End connection
      conecction.end();
  });
}

// Rute
app.get('/todo_list', getAll)

// Function to post
function addData(req, res) {
  // Params
  const body = req.body;

  // See params TODO Temporal
  console.log(body);

  let dataToSave = JSON.stringify(body)
  // Create connection
  const conecction = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "crud"
  });
  conecction.connect(function(err) {
      // Connection Failed
      if (err) res.status(200).send({"conecction": "Database connection error"});
      // Post user
      conecction.query("INSERT todo_list (data) VALUES (?);",[dataToSave], function (err, result) {
          // if error
          if(err){res.status(200).send(err);}
          // if not
          else{res.status(200).send(result);}
      });
      // End connection
      conecction.end();
  });
}

// Rute
app.post('/todo_list', addData)