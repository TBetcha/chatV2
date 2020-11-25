/** @format */
import express from 'express';
import socketIO from 'socket.io';
import path from 'path';
import http from 'http';
import Websocket from './websocket';
import app from './index';
import { SocketConstructorOpts } from 'net';
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';

export default class websocket {
  //stuff;
  private io: socketIO.Server;

  constructor(server: http.Server) {
    this.io = this.io = require('socket.io')(http);
    this.io.on('connection', websocket.connection);
  }

  private static connection(socket: socketIO.Socket) {
    socket.on('init', (socket) => {
      console.log('inside inti');
      socket.emit('init');
    });
  }
}
