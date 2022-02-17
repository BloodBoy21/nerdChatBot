<script>
  import { createEventDispatcher } from 'svelte'
  export let message
  let textMessage
  let inputField
  const dispatch = createEventDispatcher()
  const sendMessage = () => {
    textMessage = inputField.value
    if (textMessage.length <= 0) {
      return
    }
    message.sendMessage(textMessage)
    inputField.value = ''
    dispatch('messageSent')
  }
  const onInput = (event) => {
    if (event.key !== 'Enter') return
    sendMessage()
  }
</script>

<div>
  <input
    type="text"
    bind:value={textMessage}
    placeholder="Writte a question"
    on:keydown={onInput}
    bind:this={inputField}
  />
  <button on:click={sendMessage}>Send</button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6d6875;
    padding: 0.5rem;
  }
  input {
    width: 200px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
  }
  input:focus {
    outline: none;
  }
  button {
    width: 100px;
    height: 30px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
