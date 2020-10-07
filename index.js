const express = require("express");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

const HOST = "0.0.0.0";

app.listen(PORT, HOST);
