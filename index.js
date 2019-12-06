const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./db");
const Image = require("./image/model");
const imageRouter = require("./image/router");

app.listen(port, () => console.log(`Listening on port ${port}!`));

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

app.use(imageRouter);
