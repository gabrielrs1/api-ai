import express from "express";
import axios from "axios";

const app = express();

app.use(express.json());

const url = "http://localhost:11434/api/chat"

app.post("/ai", async (req, res) => {
    const { text } = req.body;

    const returnAI = await axios.post(url, {
        "model": "llama3.2:3b",
        "messages": [
            {
                "role": "user",
                "content": text
            }
        ],
        "stream": false
    });

    res.json({ "message": returnAI.data.message.content });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});