import { WebsocketServer } from 'y-websocket/bin/server.js';

const port = process.env.PORT || 1234;
const wss = new WebsocketServer({ port });

console.log(`y-websocket server running on port ${port}`);
