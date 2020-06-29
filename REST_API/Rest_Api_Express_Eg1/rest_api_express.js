/*Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
 It facilitates the rapid development of Node based Web applications. */
const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');
const app = express();

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

let studentsData = { students: [{ name: "John" }] }

app.get('/', function (req, res) {
    res.send("Hello World!!!");
});

app.get('/people', function (req, res) {
    res.send("Hello People!!!");
});

app.get('/students', function (req, res) {
    res.json(studentsData);
    res.end();
});

app.post('/students', function (req, res) {
    if (req.body && req.body.name) {
        studentsData.students.push({ name: req.body.name });
    }
    res.json(studentsData);
    res.end();
    console.log(req.body)       //gives { name: 'Sneha' }
    console.log(req.body.name)      //gives Sneha
});


app.listen(5000);   //passing port number as 5000 ie.localhost:5000
console.log('Server started....');