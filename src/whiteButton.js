var makeWhiteDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeWhiteDancer.prototype = Object.create(makeDancer.prototype);
makeWhiteDancer.prototype.constructor = makeWhiteDancer;

makeWhiteDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  this.$node.addClass('whiteDancer');
  this.$node.toggle();
};