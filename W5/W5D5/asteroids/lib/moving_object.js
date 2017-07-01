const MovingObject = function (objects) {
   this.pos = options.pos;
   this.vel = options.vel;
   this.radius = options.radius;
   this.color = options.color;
   this.game = options.game;
}


MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;

  ctx.beginPath();
  ctx.arc(
    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  );
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos += this.vel;
};
