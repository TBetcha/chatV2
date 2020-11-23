/** @format */
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import http from 'http';
import Websocket from './websocket';

class app {
  public express: express.Application;
  private server: http.Server;
  private port: number;
  //  private websocket: Websocket;
  constructor() {
    this.express = require('express').express();
    this.server = http.createServer(this.express);
    this.port = 3000;
    //  this.websocket = new Websocket(this.server);
  }

  public start(): void {
    this.express.get('/', (req: any, res: any) => {
      res.send('hello world');
    });
  }

  //const io = require('socket.io')(http);
}
