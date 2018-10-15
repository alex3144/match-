import throng from "throng";
import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from 'cors'

let WORKERS = process.env.WEB_CONCURRENCY || 2;
const PORT = process.env.PORT || 8080;


const start = () => {
  let app = express();
  app.use(bodyParser.json(
    {
      // to support URL-encoded bodies
      limit: '10mb',
      extended: true
    }
  )); // to support JSON-encoded bodies
  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      limit: '10mb',
      extended: true
    })
  );
  app.use(cors());

  fs.readdirSync("./controllers").forEach(file => {
    console.log(file);
    if (file.substr(-3) == ".js") {
      let route = require("./controllers/" + file);
      route.controller(app);
    }
  });

  app.all("*", (req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(404, "Page introuvable !");
  });

  app.listen(PORT, function () {
    console.log("Node app is running on port new", PORT);
  });
}

const startWorker = (id) => {
  process.on("SIGTERM", () => {
    process.exit();
  });
}

throng({
  workers: WORKERS,
  lifetime: Infinity,
  master: start,
  start: startWorker
});