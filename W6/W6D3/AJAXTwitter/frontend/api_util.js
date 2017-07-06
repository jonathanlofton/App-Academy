const FollowToggle = require('./follow_toggle');
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
