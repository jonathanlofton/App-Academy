const MessageStore = require('./message_store.js');

module.exports = {

  renderMessage(message) {
    let messageli = document.createElement('li');
    messageli.innerHTML = `
    from: ${message.from} subject: ${message.subject} body: ${message.body}
    `
    return messageli;
  },

  render() {
    let unorderedList = document.createElement('ul');
    unorderedList.className = "messages";

    let messages = MessageStore.getInboxMessages();
    messages.forEach((message) => {
      // append child when you are adding a
      unorderedList.appendChild(this.renderMessage(message));
    })

    return unorderedList;
  }
}
