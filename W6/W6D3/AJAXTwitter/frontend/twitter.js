const FollowToggle = require('./follow_toggle');

$(() => {
  $("button.follow-toggle").each (( _, button) =>  new FollowToggle(button));
});
