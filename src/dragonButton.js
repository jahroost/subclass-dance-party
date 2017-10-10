var makeDragonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeDragonDancer.prototype = Object.create(makeDancer.prototype);
makeDragonDancer.prototype.constructor = makeDragonDancer;

makeDragonDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.addClass('dragonDancer');
  this.$node.toggle();
};