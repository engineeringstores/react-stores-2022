const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const apiRouter = require("./routes/apiRouter");
// serve static assets normally
const corsOptions = {
  credentials: true,
  origin: [
    process.env.CLIENT_BASE_URL,
    process.env.API_BASE_URL,
    "https://u-of-t-engineering-stores.myshopify.com/",
    "https://www.stores.skule.ca",
    "https://www.react.stores.skule.ca",
  ],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", apiRouter);
app.use(express.static(__dirname + "/client/dist"));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get("/*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(port);
console.log("server started on port " + port);
