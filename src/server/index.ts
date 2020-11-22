import http from 'http'
import consola from 'consola'
import express from 'express'
import Websocket from './websocket'
import path from 'path'


export default class Server{
  private readonly app: express.Application;
  private readonly host: string;
  private readonly port: number;
  private readonly server: http.Server;
  private readonly websocket: Websocket;

  constructor(){
    this.app = express();
    this.port = 3000;
    this.host = '127.0.0.1'
    this.server = http.createServer(this.app)
    this.websocket = new Websocket(this.server);
  }

  public init(): void{
    this.app.use(express.static(path.resolve('dist')))
    this.app.get('/chat2',{req, res} => {
      res.sendFile(path.resolve('dist/'));
    })'
    this.app.get('/', {req,res) => {
      res.sendFile(path.resolve('dist/index.html'))'
    })
    this.server.listen(this.port, this.host);
    consola.ready(`listening on http://${this.host}:${this.port}`); 
   }
  }
  const server = new Server();
  server.init();
