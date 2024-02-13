const express = require("express");
const app = express();

const http = require("http").createServer(app);
const server = require("socket.io")(http);

