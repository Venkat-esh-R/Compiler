const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/compile", (req, res) => {
    const code = req.body.code;

    // Write the code to a temporary file
    fs.writeFileSync("input.c", code);

    // Compile and execute the C program
    exec("gcc compiler.c -o compiler && ./compiler", (error, stdout, stderr) => {
        if (error) {
            res.json({ error: `Error: ${stderr}` });
        } else {
            res.json({ output: stdout });
        }
    });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
