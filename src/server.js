import url from "url"
import path from "path"
import express from "express";
import http from "http";
import { Server } from "socket.io";
import { log } from "console";

const app = express()
const PORT = process.env.PORT || 3000

const currentPath = url.fileURLToPath(import.meta.url)
const publicDIr = path.join(currentPath, "../..", "public")
app.use(express.static(publicDIr))

const httpServer = http.createServer(app)

httpServer.listen(PORT, () => console.log(`Listening in PORT ${PORT}`))

const io = new Server(httpServer)

io.on("connection", () => {
    console.log("client login successfully done!")
})