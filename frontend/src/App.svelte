<script>
  import { io } from 'socket.io-client'
  import { storeFE, botMessage, userMessage } from './components/store.js'
  import * as animateScroll from 'svelte-scrollto'
  import ChatHeader from './components/ChatHeader.svelte'
  import ChatMessages from './components/ChatMessages.svelte'
  import SendMessage from './components/SendMessage.svelte'
  const socket = io.connect('http://localhost:3000')
  let chatHistory
  const addMessage = (message) => {
    let l = $storeFE.length
    $storeFE[l] = message
  }
  socket.on('connect', () => {
    console.log('connected')
  })

  socket.on('message', (message) => {
    addMessage(botMessage(message))
    goToBottom()
  })

  const chat = {
    sendMessage: function (message) {
      addMessage(userMessage(message))
      socket.emit('message', message)
    }
  }
  const goToBottom = () => {
    animateScroll.scrollToBottom({
      container: chatHistory,
      offset: 150
    })
  }
</script>

<main>
  <section class="chat">
    <ChatHeader />
    <ChatMessages bind:chat={chatHistory} />
    <SendMessage message={chat} on:messageSent={goToBottom} />
  </section>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #2b2d42;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .chat {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    align-items: center;
    width: 350px;
    height: 600px;
    background-color: #f3f3f3;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
