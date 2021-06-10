require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/api/imgcount", (req, res) => {
    const files = fs.readdirSync(`${__dirname}/public/images/`);
    res.json(files);
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${listener.address().port}`);
});
