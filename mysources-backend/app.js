import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";

import indexRouter from "./routes/index.js";
import sourcesRouter from "./routes/sources.js";
import argumentsRouter from "./routes/arguments.js";
import { closeBrowserInstance } from "./util/BrowserManager.js";

dotenv.config();
const port = process.env.PORT || "3030";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/sources", sourcesRouter);
app.use("/arguments", argumentsRouter);

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", (err) => console.log(err));
server.on("listening", () => console.log("listening on port " + port));

process.on("SIGINT", async () => {
  await closeBrowserInstance();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await closeBrowserInstance();
  process.exit(0);
});
