//import socket.io from 'socket.io';
import { io } from 'socket.io-client'


//declere url string
// const url = process.env.REACT_APP_BASE_URL;
const url = 'http://localhost:8080'
console.log(typeof process.env.REACT_APP_BASE_URL);

const socket = io(url)

export default socket
