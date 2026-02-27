import express from "express";
import { HOST, PORT } from "./config/env.config.js";
import { matchRouter } from "./routes/matches.js";
import http from 'http';
import { attachWebSocketServer } from "./ws/server.js";


const app = express();

app.use(express.json());
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("server running");
});

app.use("/matches", matchRouter);

const {broadCastMatchCreated} = attachWebSocketServer(server);
app.locals.broadCastMatchCreated = broadCastMatchCreated;

server.listen(PORT, HOST, () => {
    const baseUrl = HOST === '0.0.0.0' ? `http://localhost:${PORT}` : `http://${HOST}:${PORT}`;
  console.log(`Server running at ${baseUrl}`);
  console.log(`Websocket Server is running on ${baseUrl.replace('http', 'ws')}/ws`);
});
