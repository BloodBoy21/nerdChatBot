const urlPath = 'localhost:8080'
const clientMessage = 'I need help to buy a new computer{enter}'
describe('ChatBot', () => {
  beforeEach(() => {
    cy.visit(urlPath)
  })
  it('Open page', () => {
    cy.contains('h1', 'Nerd ChatBot')
  })
  it('First message loaded', () => {
    const firstMessage = 'Hello, how can I help you?'
    cy.contains('span', firstMessage)
  })
  it('Send message', () => {
    cy.get('input').type(clientMessage)
  })
  it('Message was sent', () => {
    const message = 'Hello nerd bot'
    cy.get('input').type(`${message}{enter}`)
    cy.contains('span', message)
  })
  it('Bot answers', () => {
    const messageOld = 1
    const messageContainer = '[data-test-id="messages-container"]'
    cy.get(messageContainer).children().should('have.length', messageOld)
    cy.get('input').type(clientMessage)
    cy.get(messageContainer)
      .children()
      .should('have.length', messageOld + 2)
  })
  it('Empty message is not sent', () => {
    const messageOld = 1
    const messageContainer = '[data-test-id="messages-container"]'
    cy.get(messageContainer).children().should('have.length', messageOld)
    cy.get('input').type('{enter}')
    cy.get(messageContainer).children().should('have.length', messageOld)
  })
})
