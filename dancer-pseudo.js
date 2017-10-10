
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step, timeBetweenSteps);
};
this.step();

makeDancer.prototype.setPosition = function() {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};