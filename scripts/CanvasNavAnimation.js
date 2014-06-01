window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame || 
  window.oRequestAnimationFrame || 
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

// Nav Canvas animations
var CanvasNavAnimation = function(canvasElement){
  this.canvas = document.getElementById('navCanvas');
  this.context = this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.WIDTH = 45;
  this.HEIGHT = 5;
  this.toX = 0;
  this.toY = 0;
  this.toWidth = 0;
  this.toHeight = 5;
  this.speed = 5;
  this.barHeight = 2;
  this.barWidth = 50;
  this.rectX = 0;
  this.rectY = 0;
  this.linearSpeed = 15;
  this.newX = 0;
  this.newWidth = 0;
  this.stopAnim = false;
}

CanvasNavAnimation.prototype.rect = function(x,y,w,h) {
  this.ctx.fillStyle = "#ee7f38"
  this.ctx.fillRect(x,y,w,h);
  this.x = x;
  this.y = y;
  this.WIDTH = w;
  this.HEIGHT = h;
}

CanvasNavAnimation.prototype.clear = function() {
  this.ctx.clearRect(this.x, this.y, this.WIDTH, this.HEIGHT);
}

CanvasNavAnimation.prototype.startAnimation = function(x,y,w,h){
  this.toX = x;
  this.toY = y;
  this.toWidth = w;
  this.toHeight = h;
  setTimeout(function(self){return self.draw();}(this), 100);
}


CanvasNavAnimation.prototype.animate = function(canvas, context, left, width) {
  this.newWidth = width;

  if(this.rectX < left && !this.stopAnim) {
    this.newX = this.rectX + this.linearSpeed;
    this.rectX = this.newX;
    // clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw new rectangle
    this.context.beginPath();
    this.context.rect(this.rectX, this.rectY, width, this.barHeight);
    this.context.fillStyle = "#f06607"
    this.context.fill();

    // request new frame
    requestAnimFrame(function() {
      window.navAnim.animate(window.navAnim.canvas, window.navAnim.context, left, width);
    });

    if(this.rectX >= left){
      this.stopAnim = true;
      // clear
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.rectX = left;
      // draw new rectangle
      this.context.beginPath();
      this.context.rect(this.rectX, this.rectY, width, this.barHeight);
      this.context.fillStyle = "#f06607"
      this.context.fill();
    }
  } else if(this.rectX > left && !this.stopAnim){
    this.newX = this.rectX - this.linearSpeed;
    this.rectX = this.newX;
    // clear
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw new rectangle
    this.context.beginPath();
    this.context.rect(this.rectX, this.rectY, width, this.barHeight);
    this.context.fillStyle = "#ee7f38"
    this.context.fill();

    // request new frame
    requestAnimFrame(function() {
      window.navAnim.animate(window.navAnim.canvas, window.navAnim.context, left, width);
    });

    if(this.rectX <= left){
      this.stopAnim = true;
      // clear
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.rectX = left;
      // draw new rectangle
      this.context.beginPath();
      this.context.rect(this.rectX, this.rectY, width, this.barHeight);
      this.context.fillStyle = "#ee7f38"
      this.context.fill();
    }
  }
}

CanvasNavAnimation.prototype.draw = function(){
  this.clear();
  if(this.x !== this.toX){
    var left = this.toX > this.x ? this.x = this.x+this.speed : this.x = this.x-this.speed;
    var width = this.toWidth > this.WIDTH ? this.WIDTH = this.WIDTH + this.speed : this.WIDTH = this.WIDTH - this.speed;
    this.rect(this.toX,this.toY,this.toWidth,this.toHeight); 
  }
}