import http from 'http';
import socketIO from 'socket.io'
import consola from 'consola'
import Server from './index'

export default class websocket{
  private io: SocketIO.Server;

  constructor(server: http.server){
    this.io = SocketIO(server);
    this.io.on('connection', websocket.connection);
  }

  private static connection(socket: socketIO.Socket){
   socket.on('init', ()=> {
     console.log('hello')
     socket.emit('ahah')
   )}
  }
