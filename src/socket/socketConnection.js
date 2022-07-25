import { io } from "socket.io-client";

let socket;

export const connectWithSocketServer = () => {
  socket = io(process.env.REACT_APP_API_URL);

  socket.on("connect", () => {
    console.log(`Connected to socket.io server with id ${socket.id}...`);
  });
};

export const getSocketInstance = () => {
  return socket;
};
