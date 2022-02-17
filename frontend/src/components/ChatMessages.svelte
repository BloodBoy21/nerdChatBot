<script>
  import Message from './Message.svelte'
  import { storeFE } from './store.js'
  export let chat
  $storeFE = [{ name: 'Bot', text: 'Hello, how can I help you?', side: 'left' }]
</script>

<!-- TODO: fix height of chat -->
<section class="msger-chat" bind:this={chat}>
  {#each $storeFE as message}
    <svelte:component this={Message} {message} />
  {/each}
</section>

<style>
  .msger-chat {
    width: auto;
    height: 95%;
    padding: 0.7em;
    overflow-y: auto;
  }
  .msger-chat::-webkit-scrollbar {
    width: 6px;
  }
  .msger-chat::-webkit-scrollbar-track {
    background: #ddd;
  }
  .msger-chat::-webkit-scrollbar-thumb {
    background: #bdbdbd;
  }
</style>
