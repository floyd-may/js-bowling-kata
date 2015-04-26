function Game(){
  this.frames = [];
}


Game.prototype.roll = function(pins) {
  var frame;
  if(this.frames.length === 0){
    this.frames.push(new Frame());
  }
  frame = this.frames[this.frames.length - 1];
  if (!frame.rollsAvailable()) {
    frame = new Frame();
    this.frames.push(frame);
  }
  frame.roll(pins);
};

Game.prototype.getScore = function() {
  var score = 0;

  this.frames.forEach(function(frame, frameIndex, frames){
    score += frame.getScore();
    if (frame.isSpare() && (frameIndex < (frames.length - 1))) {
      score += frames[frameIndex + 1].rolls[0];
    }
  });

  return score;
};


function Frame() {
  this.rolls = [];
}

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Frame.prototype.getScore = function () {
  var score = this.rolls.reduce(function (acc, itr) {return acc + itr;}, 0);
  return score;
};

Frame.prototype.rollsAvailable = function() {
  return (this.rolls.length < 2);
};

Frame.prototype.isSpare = function() {
  return (this.getScore() === 10);
};
