const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

// temporary to hold our messages, need a db
var messages = []

app.use(cors());
app.use(express.json())


app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

app.get('/health', (req, res) => res.status(200).send());


app.get('/cartermusic', (request, response) => {
    response.json({ info: 'sample text' })
});

app.get("/cartername", (request, response)=> {
    response.json({username: "carter"})
});

app.post("/submit_message", (req, res) => {
    console.log(req.body);
    messages.push(req.body.data.text);
})

app.get("/messages", (req, res) => {
    res.json({list_of_messages: messages})
})


app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
















