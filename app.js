const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Uma frase nova");
});

app.listen(port, () => {
    console.log(`executando porta: ${port}`);
});
