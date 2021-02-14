
describe('Math functions',function(){
	describe('#add()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					add("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					add(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					add({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					add(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					add(1,2,3)}).to.throw(TypeError);
			});
			it('should reture 3.1 for 2 + 1.1', function(){
				expect(add(2,1.1)).to.be.equals(3.1);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					add()}).to.throw(TypeError);
			});
		});
	});

	describe('#div()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					div("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					div(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					div({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					div(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					div(1,2,3)}).to.throw(TypeError);
			});
			it('should return 2 for 11/5', function(){
				expect(div(11,5)).to.be.equals(2);
			});
			it('should return 2 for 10/5', function(){
				expect(div(10,5)).to.be.equals(2);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					div()}).to.throw(TypeError);
			});
		});
	});
	describe('#max()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					max("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					max(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					max({"ob":"2"})}).to.throw(TypeError);
			});
		});
		context('valid use cases', function() {
			it('should return 5 for 5', function(){
				expect(max(5)).to.be.equals(5);
			});
			it('should return 10 for 5, 10', function(){
				expect(max(10,5)).to.be.equals(10);
			});
			it('should return 10 for 5, 10,8.8', function(){
				expect(max(10,5,8.8)).to.be.equals(10);
			});
			it('should return 10 for array of 5, 10,8.8', function(){
				expect(max([10,5,8.8])).to.be.equals(10);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					max()}).to.throw(TypeError);
			});
		});
	});
	describe('#min()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					min("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					min(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					min({"ob":"2"})}).to.throw(TypeError);
			});
		});
		context('valid use cases', function() {
			it('should return 5 for 5', function(){
				expect(min(5)).to.be.equals(5);
			});
			it('should return 5 for 5, 10', function(){
				expect(min(10,5)).to.be.equals(5);
			});
			it('should return 5 for 5, 10,8.8', function(){
				expect(min(10,5,8.8)).to.be.equals(5);
			});
			it('should return 5 for array of 5, 10,8.8', function(){
				expect(min([10,5,8.8])).to.be.equals(5);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					min()}).to.throw(TypeError);
			});
		});
	});
	describe('#mod()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					mod("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					mod(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					mod({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					mod(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					mod(1,2,3)}).to.throw(TypeError);
			});
			it('should return 1 for 11/5', function(){
				expect(mod(11,5)).to.be.equals(1);
			});
			it('should return 0 for 10/5', function(){
				expect(mod(10,5)).to.be.equals(0);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					mod()}).to.throw(TypeError);
			});
		});
	});
	describe('#mul()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					mul("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					mul(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					mul({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					mul(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					mul(1,2,3)}).to.throw(TypeError);
			});
			it('should return 5.5 for 5 * 1.1', function(){
				expect(mul(5,1.1)).to.be.equals(5.5);
			});
			it('should return 50 for 10*5', function(){
				expect(mul(10,5)).to.be.equals(50);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					mul()}).to.throw(TypeError);
			});
		});
	});
	describe('#rand()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					rand("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					rand(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					rand({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					rand(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					rand(1,2,3)}).to.throw(TypeError);
			});
			it('should return a random number between 1 & 2', function(){
				expect(rand(1,2)).to.be.within(1,2);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					rand()}).to.throw(TypeError);
			});
		});
	});
	describe('#range()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					range("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					range(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					range({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					range(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					range(1,2,3)}).to.throw(TypeError);
			});
			it('should throw an exception for non integer arguments', function(){
				expect(function() {
					range(1,2.2)}).to.throw(TypeError);
			});
			it('should return array of 1', function(){
				expect(range(1,1)).to.eql([1]);
			});
			it('should return array of 4', function(){
				expect(range(-1,4)).to.eql([-1,0,1,2]);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					range()}).to.throw(TypeError);
			});
		});
	});
	describe('#sub()', function () {
		context('with arguments', function(){
			it('should throw an exception for string arguments', function(){
				expect(function() {
					sub("2","1")}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					sub(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					sub({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					sub(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 2 argument', function(){
				expect(function() {
					sub(1,2,3)}).to.throw(TypeError);
			});
			it('should return 5.5 for 6-.5', function(){
				expect(sub(6,.5)).to.be.equals(5.5);
			});
			it('should return -50 for 20-70', function(){
				expect(sub(20,70)).to.be.equals(-50);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					sub()}).to.throw(TypeError);
			});
		});
	});
});