const express = require("express"); 
const path = require("path");
const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/scenes", express.static(path.join(__dirname, "scenes")));
app.use("/styles", express.static(path.join(__dirname, "styles")));
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(4000, () => console.log("port is on http://localhost:4000"));
