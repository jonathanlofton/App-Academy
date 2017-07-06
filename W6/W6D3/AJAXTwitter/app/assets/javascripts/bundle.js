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

const FollowToggle = __webpack_require__(2);

$(() => {
  $("button.follow-toggle").each (( _, button) =>  new FollowToggle(button));
});


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__ (3);

class FollowToggle {
  constructor(el, options){
    this.$el = $(el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = this.$el.data("initial-follow-state") || options.followState;
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render () {
    if (this.followState ===  "followed") {
      this.$el.html("Unfollow!");
    } else if (this.followState === "unfollowed"){
      this.$el.html("Follow!");
    }
  }

  handleClick (e) {
    e.preventDefault();


    if (this.followState === 'unfollowed') {
      // this.followState = "followed"
      // this.render();

      APIUtil.followUser(this.userId).then(() => {
        this.followState = "followed";
        this.render();

      // $.ajax({
      //   url: `/users/${this.userId}/follow`,
      //   method: 'POST',
      //   success: response => {
      //     this.followState = "followed";
      //     this.render();
      //   }
      });
    } else if (this.followState === 'followed'){
      APIUtil.unfollowUser(this.userId).then(() => {
        this.followState = "unfollowed";
        this.render();
      });
    //   $.ajax({
    //     url: `/users/${this.userId}/follow`,
    //     method: 'DELETE',
    //     success: response => {
    //       this.followState = "unfollowed";
    //       this.render();
    //     }
    //   });
    }
  }


}

module.exports = FollowToggle;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(2);
const APIUtil = {

  followUser: id => APIUtil.changeFollowStatus(id, "POST"),

  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),

  changeFollowStatus: (id, method) =>

  $.ajax({
    url: `/users/${id}/follow`,
    method,
    dataType: "json",

  }),

};

module.exports = APIUtil;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map