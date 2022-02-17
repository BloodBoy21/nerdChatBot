const { Server } = require('socket.io')
const { randomAnswer } = require('./responses')
class IoServer {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: '*'
      }
    })
  }

  init() {
    this.io.on('connection', (socket) => {
      console.log('socket connected')
      socket.on('disconnect', () => {
        console.log('socket disconnected')
      })
      socket.on('message', (message) => {
        console.log('message received:', message)
        socket.emit('message', randomAnswer())
      })
    })
    return this
  }
}
module.exports = { IoServer }
