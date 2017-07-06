const APIUtil = require ('./api_util');

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
