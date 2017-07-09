/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

let Router = __webpack_require__(1);
let Inbox = __webpack_require__(2);
let Sent = __webpack_require__(3)
let Compose = __webpack_require__(4)

const routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
}


document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  router = new Router(content, routes);
  router.start();
  window.location.hash = "#inbox";
  let navItems =
  Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let name = navItem.innerText.toLowerCase();
      location.hash = name;
    });
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if (component) {
      this.node.appendChild(component.render());
    }
  }

  activeRoute() {
    let hash = window.location.hash.substr(1);
    let component = this.routes[hash];
    return component;
  }
}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(5);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(5);

module.exports = {

  renderMessage(message) {
    let messageli = document.createElement('li');
    messageli.innerHTML = `
    to: ${message.to} subject: ${message.subject} body: ${message.body}
    `
    return messageli;
  },

  render() {
    let unorderedList = document.createElement('ul');
    unorderedList.className = "messages";

    let messages = MessageStore.getSentMessages();
    messages.forEach((message) => {
      // append child when you are adding a
      unorderedList.appendChild(this.renderMessage(message));
    })

    return unorderedList;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


let MessageStore = __webpack_require__(5);

module.exports = {
  renderForm(){
    let currentMessage = MessageStore.getMessageDraft();
    let content = `<p class="new-message-header">New Message</p>
    <form class="compose-form">
    <input
      placeholder='Recipient'
      name='to'
      type="text"
      value='${currentMessage.to}'>
    <input
      placeholder='Subject'
      name='subject'
      type="text"
      value='${currentMessage.subject}'>
    <textarea
      name='body'
      rows='20'>${currentMessage.body}</textarea>
    <button type="submit" class="btn btn-primary submit-message">Send</button>
    </form>`
    return content;
  },

  render() {
    let div = document.createElement('div');
    div.className = "new-message";
    div.innerHTML = this.renderForm();
    div.addEventListener("change", e => {
      let target = e.target;
      MessageStore.updateDraftField(target.name, target.value);
    });

    div.addEventListener("submit", e => {
      e.preventDefault();
      MessageStore.sendDraft();
      location.hash = "inbox";
    });

    return div;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);