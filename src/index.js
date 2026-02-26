import express from 'express';
import { PORT } from './config/env.config.js';

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("server running")
});

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
    
})

