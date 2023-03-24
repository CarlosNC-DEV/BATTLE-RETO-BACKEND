import app from './src/app.js';
import './src/db.js'
import { PORT } from './src/config.js';

import http from 'http';
import { Server as WebSocketServer } from 'socket.io';
import sockets from './src/sockets.js';

const server = http.createServer(app);

const httpServer = server.listen(PORT, ()=>{
    console.log(`servidor en puerto ${PORT}`);
});

const io = new WebSocketServer(httpServer, {
    cors:{
        origin: '*'
    }
})
sockets(io);