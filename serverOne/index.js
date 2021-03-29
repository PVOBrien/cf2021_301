'use strict';

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

app.get('/', function (request, response) {
  response.send('Hello World!')
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));