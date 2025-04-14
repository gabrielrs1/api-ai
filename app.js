import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

app.get("/ai", (req, res) => {
    res.send("AI APi is running. Hello World!")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});