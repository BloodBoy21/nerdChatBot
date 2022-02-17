const fs = require('fs')
const { join } = require('path')
const messagesFile = join(__dirname, './messages.json')
let answers = fs.readFileSync(messagesFile, 'utf8')
answers = JSON.parse(answers).map((answer) => answer.message)

function randomAnswer() {
  return answers[Math.floor(Math.random() * answers.length)]
}
module.exports = { randomAnswer }
