const user = "johnnyboy@hotmail.com"

class Message {
  constructor(from = user, to="", subject="", body ="") {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messageDraft = new Message();


let messages = {
  sent: [
    {to: "gucci@mane.com", subject: "BURRR", body: "ITS COLD"},
    {to: "gucci@mane.com", subject: "BURRRRRRR", body: "Let me get a feature, la flare"},
    {to: "gucci@mane.com", subject: "BURRRRRRRRRRRRRRR", body: "Are you a clone?"}
  ],
  inbox: [
    {from: "gucci@mane.com", subject: "Yoo", body: "BURRRRR"},
    {from: "OJDa@juiceman.com", subject: "AYEE", body: "Ayeeeeeee"},
    {from: "kendrick@lama.com", subject: "element", body: "KUNG FU KENNY"},
    {from: "thugger@hotmail.com", subject: "DAD", body: "I LOVE YOU..."}
  ]
};

const MessageStore = {
  getInboxMessages() {
    return messages.inbox.slice();
  },
  getSentMessages() {
    return messages.sent.slice();
  },
  getMessageDraft(){
    return messageDraft;
  },
  updateDraftField(field, value) {
    messageDraft[field] = value;
  },
  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message();
  }
};

module.exports = MessageStore;
