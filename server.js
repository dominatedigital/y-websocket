import { setupWSConnection } from 'y-websocket/bin/utils.js'
import * as http from 'http'
import WebSocket from 'ws'

const port = process.env.PORT || 1234
const server = http.createServer()
const wss = new WebSocket.Server({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req)
})

server.listen(port)
console.log('y-websocket server running on port', port)
