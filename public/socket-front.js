import {updateTextEditor} from "./document.js"

const socket = io()

function emitTextEditor(text) {
    socket.emit("text-editor", text)
}

socket.on("text-editor-customers", (text) => {
    updateTextEditor(text)
})

export {emitTextEditor}