
describe('Logical functions',function(){
	describe('#and()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					and(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for string arguments', function(){
				expect(function() {
					and('d','b')}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					and({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for one argument', function(){
				expect(function() {
					and(true)}).to.throw(TypeError);
			});
			it('should return true when two trues passed', function(){
				expect(and(true,true)).to.equal(true);
			});
			it('should return false for true and false arguments', function(){
				expect(and(true,false)).to.equal(false);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					and()}).to.throw(TypeError);
			});
		});
	});
	describe('#equals()', function () {
		context('with arguments', function(){
			it('should return true when two trues passed', function(){
				expect(equals(true,true)).to.equal(true);
			});
			it('should return false for true and false arguments', function(){
				expect(equals(true,false)).to.equal(false);
			});	
			it('should return true for true and 1 arguments', function(){
				expect(equals(true,1)).to.equal(true);
			});	
			it('should return false for true and 0 arguments', function(){
				expect(equals(true,0)).to.equal(false);
			});	
			it('should return true for matching strings', function(){
				expect(equals('abc','abc')).to.equal(true);
			});	
			it('should return false for non matching strings', function(){
				expect(equals('abc','abcf')).to.equal(false);
			});	
			it('should throw error for objects', function(){
				expect(function() {equals({"a":"1","b":"2"},{"a":"1","b":"2"})}).to.throw(TypeError);
			});	
			it('should throw error for arrays', function(){
				expect(function() {equals([1,2,3],[1,2,3])}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					equals()}).to.throw(TypeError);
			});
		});
	});
	describe('#greater()', function () {
		context('with arguments', function(){
			it('should return true when for 2 >1', function(){
				expect(greater(2,1)).to.equal(true);
			});
			it('should return false for 1 > 2', function(){
				expect(greater(1,2)).to.equal(false);
			});	
			it('should return true 2.1 > 2.0', function(){
				expect(greater(2.1,2.0)).to.equal(true);
			});	
			it('should return false for 2.0 > 2.1', function(){
				expect(greater(2.0,2.1)).to.equal(false);
			});	
			it('should return true for b > a strings', function(){
				expect(greater('b','a')).to.equal(true);
			});	
			it('should return false for a > b', function(){
				expect(greater('a','b')).to.equal(false);
			});	
			it('should throw error for mismatched args', function(){
				expect(function() {greater(2.1,'1')}).to.throw(TypeError);
			});	
			it('should throw error for boolean', function(){
				expect(function() {greater(true,false)}).to.throw(TypeError);
			});	
			it('should throw error for objects', function(){
				expect(function() {greater({"a":"1","b":"2"},{"a":"1","b":"2"})}).to.throw(TypeError);
			});	
			it('should throw error for arrays', function(){
				expect(function() {greater([1,2,3],[1,2,3])}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					greater()}).to.throw(TypeError);
			});
		});
	});
	describe('#greaterOrEquals()', function () {
		context('with arguments', function(){
			it('should return true when for 2 >= 2', function(){
				expect(greaterOrEquals(2,2)).to.equal(true);
			});
			it('should return false for 1 >= 2', function(){
				expect(greaterOrEquals(1,2)).to.equal(false);
			});	
			it('should return true 2.1 >= 2.1', function(){
				expect(greaterOrEquals(2.1,2.1)).to.equal(true);
			});	
			it('should return false for 2.0 >= 2.1', function(){
				expect(greaterOrEquals(2.0,2.1)).to.equal(false);
			});	
			it('should return true for b >= b ', function(){
				expect(greaterOrEquals('b','b')).to.equal(true);
			});	
			it('should return false for a >= b', function(){
				expect(greaterOrEquals('a','b')).to.equal(false);
			});	
			it('should throw error for mismatched args', function(){
				expect(function() {greaterOrEquals(2.1,'1')}).to.throw(TypeError);
			});	
			it('should throw error for boolean', function(){
				expect(function() {greaterOrEquals(true,false)}).to.throw(TypeError);
			});	
			it('should throw error for objects', function(){
				expect(function() {greaterOrEquals({"a":"1","b":"2"},{"a":"1","b":"2"})}).to.throw(TypeError);
			});	
			it('should throw error for arrays', function(){
				expect(function() {greaterOrEquals([1,2,3],[1,2,3])}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					greaterOrEquals()}).to.throw(TypeError);
			});
		});
	});
	describe('#iif()', function () {
		context('with arguments', function(){
			it('should return true when for true, true, false', function(){
				expect(iif(true,true,false)).to.equal(true);
			});
			it('should return false for false, true, false', function(){
				expect(iif(false, true, false)).to.equal(false);
			});	
			it('should throw error for non boolean first arg', function(){
				expect(function() {iif(2.1,'1',true)}).to.throw(TypeError);
			});	
			it('should throw error for too few argments', function(){
				expect(function() {iif(true,false)}).to.throw(TypeError);
			});	
			it('should throw error for too many arguments', function(){
				expect(function() {iif(true,false, true, 'd')}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					iif()}).to.throw(TypeError);
			});
		});
	});
	describe('#less()', function () {
		context('with arguments', function(){
			it('should return true when for 1 < 2', function(){
				expect(less(1,2)).to.equal(true);
			});
			it('should return false for 2 < 1', function(){
				expect(less(2,1)).to.equal(false);
			});	
			it('should return true 2.0 < 2.1', function(){
				expect(less(2.0,2.1)).to.equal(true);
			});	
			it('should return false for 2.1 < 2.0', function(){
				expect(less(2.1,2.0)).to.equal(false);
			});	
			it('should return false for b < a strings', function(){
				expect(less('b','a')).to.equal(false);
			});	
			it('should return true for a < b', function(){
				expect(less('a','b')).to.equal(true);
			});	
			it('should throw error for mismatched args', function(){
				expect(function() {less(2.1,'1')}).to.throw(TypeError);
			});	
			it('should throw error for boolean', function(){
				expect(function() {less(true,false)}).to.throw(TypeError);
			});	
			it('should throw error for objects', function(){
				expect(function() {less({"a":"1","b":"2"},{"a":"1","b":"2"})}).to.throw(TypeError);
			});	
			it('should throw error for arrays', function(){
				expect(function() {less([1,2,3],[1,2,3])}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					less()}).to.throw(TypeError);
			});
		});
	});
	describe('#lessOrEquals()', function () {
		context('with arguments', function(){
			it('should return true when for 2 <= 2', function(){
				expect(lessOrEquals(2,2)).to.equal(true);
			});
			it('should return false for 2 <= 1', function(){
				expect(lessOrEquals(2,1)).to.equal(false);
			});	
			it('should return true 2.1 <= 2.1', function(){
				expect(lessOrEquals(2.1,2.1)).to.equal(true);
			});	
			it('should return false for 2.1 <= 2.0', function(){
				expect(lessOrEquals(2.1,2.0)).to.equal(false);
			});	
			it('should return true for b <= b ', function(){
				expect(lessOrEquals('b','b')).to.equal(true);
			});	
			it('should return false for b <= a', function(){
				expect(lessOrEquals('b','a')).to.equal(false);
			});	
			it('should throw error for mismatched args', function(){
				expect(function() {lessOrEquals(2.1,'1')}).to.throw(TypeError);
			});	
			it('should throw error for boolean', function(){
				expect(function() {lessOrEquals(true,false)}).to.throw(TypeError);
			});	
			it('should throw error for objects', function(){
				expect(function() {lessOrEquals({"a":"1","b":"2"},{"a":"1","b":"2"})}).to.throw(TypeError);
			});	
			it('should throw error for arrays', function(){
				expect(function() {lessOrEquals([1,2,3],[1,2,3])}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					lessOrEquals()}).to.throw(TypeError);
			});
		});
	});
	describe('#not()', function () {
		context('with arguments', function(){
			it('should return false when for true', function(){
				expect(not(true)).to.equal(false);
			});
			it('should return false for true', function(){
				expect(not(false)).to.equal(true);
			});	
			it('should throw error for non boolean arg', function(){
				expect(function() {not('1')}).to.throw(TypeError);
			});	
			it('should throw error for too many arguments', function(){
				expect(function() {not(true,false, true, 'd')}).to.throw(TypeError);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					not()}).to.throw(TypeError);
			});
		});
	});
	describe('#or()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					or(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for string arguments', function(){
				expect(function() {
					or('d','b')}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					or({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for one argument', function(){
				expect(function() {
					or(true)}).to.throw(TypeError);
			});
			it('should return true when two trues passed', function(){
				expect(or(true,true)).to.equal(true);
			});
			it('should return true for true and false arguments', function(){
				expect(or(true,false)).to.equal(true);
			});	
			it('should return false for false and false arguments', function(){
				expect(or(false,false)).to.equal(false);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					and()}).to.throw(TypeError);
			});
		});
	});
});