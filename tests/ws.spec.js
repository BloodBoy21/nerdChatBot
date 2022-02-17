const app = require('../app.js')
const { IoServer } = require('../ws')
const IoClient = require('socket.io-client')
let ioServer
let server
let socket
describe('Test websocket api', () => {
  beforeAll(() => {
    server = app.listen(3000)
    ioServer = new IoServer(server)
    ioServer.init()
    socket = new IoClient('http://localhost:3000')
  })
  afterAll(async () => {
    await server.close()
    await ioServer.close()
    await socket.disconnect(0)
  })
  test('Test connection', () => {
    socket.on('connect', () => {
      expect(socket.connected).toBe(true)
      socket.disconnect()
    })
  })
  test('Should return a message as answer', () => {
    socket.on('connect', () => {
      socket.emit('message', 'hello')
      socket.on('message', (message) => {
        expect(message).toBeInstanceOf(String)
        expect(message.length).toBeGreaterThan(0)
        socket.disconnect()
      })
    })
  })
})
