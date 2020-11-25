/** @format */
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import http from 'http';
import Websocket from './websocket';
import consola from 'consola';

class app {
  public app: express.Application;
  private server: http.Server;
  private host: string;
  private port: number;
  private websocket: Websocket;
  constructor() {
    this.app = require('express')();
    this.server = http.createServer(this.app);
    this.port = 3000;
    this.websocket = require('socket.io')(server);
    this.host = '127.0.0.1';
  }

  public start(): void {
    this.app.get('/', (req: any, res: any) => {
      res.sendFile(path.join(__dirname, '../src/app/public/index.html'));
      this.server.listen(this.port, this.host);
      consola.ready(`Server listening on http://${this.host}:${this.port}`);
    });
  }
}
const server = new app();
server.start();

//const io = require('socket.io')(http);
