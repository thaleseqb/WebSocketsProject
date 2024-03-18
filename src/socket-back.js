import io from "./server.js"

io.on("connection", (socket) => {
    console.log(`client login successfully done! ${socket.id}`)
    socket.on("text-editor", (text) => {
        socket.broadcast.emit("text-editor-customers", text)
    });
});