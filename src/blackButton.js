var makeBlackDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlackDancer.prototype = Object.create(makeDancer.prototype);
makeBlackDancer.prototype.constructor = makeBlackDancer;

makeBlackDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.addClass('blackDancer');
  this.$node.toggle();
};