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
      console.log(`New connection: ${socket.id}`)
      socket.on('disconnect', () => {
        console.log('socket disconnected')
      })
      socket.on('message', (message) => {
        socket.emit('message', randomAnswer())
      })
    })
    return this
  }

  close() {
    this.io.close()
  }
}
module.exports = { IoServer }
