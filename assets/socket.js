import { io } from "socket.io-client";
// const socket = io.connect("http://localhost:4001");
const socket = io.connect("https://4cba-180-252-39-206.ap.ngrok.io");
export default socket;