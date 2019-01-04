const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./models/article");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.get("/api/articles", (req, res) => {
    db.Article
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

app.post("/api/articles", (req, res) => {
    db.Article
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});