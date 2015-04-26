describe('tests for bowling kata', function(){
  describe('Game object', function(){
    it('should score zero for all gutterballs', function(){
      var game = new Game();

      var i = 0;
      while(i < 20) {
        game.roll(0);
        i++;
      }

      expect(game.getScore()).toBe(0);
    });

    it ('should score 20 for 20 rolls of 1 each', function(){
      var game = new Game();

      var i=0;
      while (i < 20) {
        game.roll(1);
        i++;
      }

      expect(game.getScore()).toBe(20);
    });

    it ('should score 20 for 7,3,5. and 0s', function(){
      var game = new Game();

      var i=0;
      while (i < 20) {
        if (i === 0) {
          game.roll(7);
        }
        else if (i === 1) {
          game.roll(3);
        }
        else if (i === 2) {
          game.roll(5);
        }
        else {
          game.roll(0);
        }
        i++;
      }

      expect(game.getScore()).toBe(20);
    });
  });

  describe ('Frame object', function (){
    var frame;
    beforeEach (function () {
      frame = new Frame();
    });

    describe('with twp rolls summing to 10', function (){
      var x = 8;
      var y = 2;
      beforeEach (function () {
        frame.roll(x);
        frame.roll(y);
      });
      it ('should have score of 10', function(){
        expect (frame.getScore()).toBe(10);
      });
      it ('should be a Spare', function(){
        expect (frame.isSpare()).toBe(true);
      });
      it ('should not accept more rolls', function(){
        expect (frame.rollsAvailable()).toBe(false);
      });
    });


    describe('with no rolls', function (){
      it ('should have score of 0', function(){
        expect (frame.getScore()).toBe(0);
      });

      it ('should not be a Spare', function(){
        expect (frame.isSpare()).toBe(false);
      });

      it ('should accept more rolls', function(){
        expect (frame.rollsAvailable()).toBe(true);
      });
    });

    describe('with one roll', function (){
      var x = 6;
      beforeEach (function () {
        frame.roll(x);
      });

      it ('should not be a Spare', function(){
        expect (frame.isSpare()).toBe(false);
      });

      it ('should have score of pins for single roll', function(){
        expect (frame.getScore()).toBe(x);
      });
      it ('should accept more rolls', function(){
        expect (frame.rollsAvailable()).toBe(true);
      });
    });

    describe('with two rolls summing less than 10', function (){
      var x = 3;
      var y = 4;
      beforeEach (function () {
        frame.roll(x);
        frame.roll(y);
      });
      it ('should have score of roll1 + roll2 for two roll frame', function(){
        expect (frame.getScore()).toBe(x + y);
      });
      it ('should not be a Spare', function(){
        expect (frame.isSpare()).toBe(false);
      });

      it ('should not accept more rolls', function(){
        expect (frame.rollsAvailable()).toBe(false);
      });
    });
  });

});
