const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());

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



app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
















