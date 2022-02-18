<script>
  export let message
  function formatDate(date) {
    const h = '0' + date.getHours()
    const m = '0' + date.getMinutes()

    return `${h.slice(-2)}:${m.slice(-2)}`
  }
</script>

<div class="msg {message.side}-msg">
  <div class="msg-bubble">
    <div class="msg-info">
      <div class="msg-name">
        <span>{message.name}</span>
      </div>
      <div class="msg-time">
        <span>{formatDate(new Date())}</span>
      </div>
    </div>
    <div class="msg-text">
      <span>{message.text}</span>
    </div>
  </div>
</div>

<style>
  .msg {
    display: flex;
    align-items: flex-end;
    margin-bottom: 5px;
  }
  .msg:last-of-type {
    margin: 0;
  }
  .msg-bubble {
    max-width: 150px;
    padding: 10px;
    border-radius: 12px;
  }
  .msg-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  .msg-name {
    margin-right: 5px;
    font-weight: bold;
    font-size: 13px;
  }
  .msg-time {
    font-size: 0.7em;
  }
  .msg-text {
    font-size: 0.8em;
    text-align: left;
  }
  .left-msg .msg-bubble {
    border-bottom-left-radius: 0;
    background-color: #6ecb8c;
  }

  .right-msg {
    flex-direction: row-reverse;
  }
  .left-msg .msg-bubble,
  .right-msg .msg-bubble {
    word-wrap: break-word;
  }
  .right-msg .msg-bubble {
    background: #f6eda3;
    border-bottom-right-radius: 0;
  }
</style>
