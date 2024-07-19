import express from 'express';

const app = express();
const PORT_Number = 3000;

app.get("/",(req,res,next) => {
    return res.status(200).json({
        message : "API is running"
    })
})

app.get("/health",(req,res,next) => {
    res.status(200).json({
        message : "App is healthy"
    })
})

app.listen(PORT_Number,() => {
    console.log(`Server is running on ${PORT_Number}`);
})

