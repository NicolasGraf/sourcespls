const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { closeBrowserInstance } = require("./util/BrowserManager");
const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/index");
const urlsRouter = require("./routes/urls");
const sourcesRouter = require("./routes/sources");

const port = process.env.PORT || "3030";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/urls", urlsRouter);
app.use("/sources", sourcesRouter);

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
