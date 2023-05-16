//import socket.io from 'socket.io';
import { io } from 'socket.io-client'

//declere url string
const url = 'http://localhost:8080'

const socket = io(url)

export default socket
