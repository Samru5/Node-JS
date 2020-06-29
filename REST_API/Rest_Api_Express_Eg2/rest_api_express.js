/*Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
 It facilitates the rapid development of Node based Web applications. */
const express = require('express');
const app = express();

/*joi allows you to create blueprints or schemas for JavaScript objects (an object that stores information) to ensure validation of key information.
 */
const Joi = require('joi');

app.use(express.json());

const courses = [
    { id: 1, name: 'Course1' },
    { id: 2, name: 'Course2' },
    { id: 3, name: 'Course3' }
];


app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.get('/api/courses', (req, res) => {
    //res.send([1, 2, 3]);
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Cousre with given Id was not found");
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);       //gives {"year":"2020","month":"06"} on localhost:3000
    //res.send(req.params.year);    //gives 2020
    //res.send(req.params.month);   //gives 06
    //res.send(req.query);    //http://localhost:3000/api/courses/2020/06?sortBy=month gives {"sortBy":"month"}
});

app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));

    //If not existing return 404
    if (!course) return res.status(404).send("Cousre with given Id was not found");

    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }


    //update cousre return the updated course
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    //Look Up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));

    //Not existing return 404
    if (!course) return res.status(404).send("Cousre with given Id was not found")

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;    //on console do set PORT=5000
app.listen(port, () => console.log(`Listening port ${port}...`));  //Listening port 3000... because 5000 is not available otherwise takes 5000 port
//app.listen(3000,()=>console.log("Listening port 3000..."));

