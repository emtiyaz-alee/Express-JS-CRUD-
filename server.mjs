import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

import authRouter from './apiv1/routes/auth.mjs'
import commentRouter from './apiv1/routes/comment.mjs'
import feedRouter from './apiv1/routes/feed.mjs'
import postRouter from './apiv1/routes/post.mjs'

const app = express();
app.use(express.json()); // body parser
// app.use(cors())

// /api/v1/login
app.use("/api/v1", authRouter)


app.use((req, res, next) => {
    let token = "valid"
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})


app.use("/api/v1", commentRouter)
app.use("/api/v1", feedRouter)
app.use("/api/v1", postRouter)




app.post("/api/v1/weather", (req, res, next) => {

    console.log("req.body: ", req.body);


    // res.send("weather is normal"); // not recommended



    res.send({
        message: "weather is normal",
        temp: 32,
        min: 20,
    });
})

app.post("/api/v2/weather", (req, res, next) => {

    console.log("req.body: ", req.body);


    // res.send("weather is normal"); // not recommended



    res.send({
        message: "weather is normal",
        temp: 32,
        min: 20,
    });
})






//     /static/vscode_windows.exe
app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})
