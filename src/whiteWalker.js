var addWhiteWalker = function(top, left, timeBetweenSteps) {
  console.log('running in addWhiteWalker');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

addWhiteWalker.prototype = Object.create(makeDancer.prototype);
addWhiteWalker.prototype.constructor = addWhiteWalker;
addWhiteWalker.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  this.$node.toggle();
};