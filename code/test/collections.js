
describe('Collection functions',function(){
	describe('#contains()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					contains(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					contains(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					contains({"ob":"2"})}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return true for Expression in Expression language', function(){
				expect(contains('Expression Language','Expression')).to.be.true;
			});
			it('should return false for expression in Expression language', function(){
				expect(contains('Expression Language','expression')).to.be.false;
			});
			it('should return true for 1 in [1,2,3]', function(){
				expect(contains([1,2,3],1)).to.be.true;
			});
			it('should return false for 4 in [1,2,3]', function(){
				expect(contains([1,2,3],4)).to.be.false;
			});
			it('should return true for k1 in obj with k1 and k2', function(){
				expect(contains({"k1":"1","k2":"2"},"k1")).to.be.true;
			});
			it('should return false for k3 in obj with k1 and k2', function(){
				expect(contains({"k1":"1","k2":"2"},"k3")).to.be.false;
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					contains()}).to.throw(TypeError);
			});
		});
	});

	describe('#empty()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					empty(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					empty(false)}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return false for non empty string', function(){
				expect(empty('Expression Language')).to.be.false;
			});
			it('should return false for empty string', function(){
				expect(empty('')).to.be.true;
			});
			it('should return true for empty array', function(){
				expect(empty([])).to.be.true;
			});
			it('should return false for[1,2,3]', function(){
				expect(empty([1,2,3])).to.be.false;
			});
			it('should return true for empty object', function(){
				expect(empty({},)).to.be.true;
			});
			it('should return false for obj with k1 and k2', function(){
				expect(empty({"k1":"1","k2":"2"})).to.be.false;
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					empty()}).to.throw(TypeError);
			});
		});
	});

	describe('#first()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					first(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					first(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					first({})}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					first('')}).to.throw(TypeError);
			});
			it('should throw an exception for empty array', function(){
				expect(function() {
					first([])}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return E for Expression', function(){
				expect(first('Expression')).to.be.equals('E');
			});
			it('should return false for[1,2,3]', function(){
				expect(first([1,2,3])).to.be.equals(1);
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					first()}).to.throw(TypeError);
			});
		});
	});
// TODO implement for object
	describe('#intersection()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					intersection(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					intersection(false)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					intersection('')}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return [] for intersection of [] and []', function(){
				expect(intersection([],[])).to.eql([]);
			});
			it('should return [] for intersection of [1] and []', function(){
				expect(intersection([],[1])).to.eql([]);
			});
			it('should return [1] for intersection of [1,2] and [1]', function(){
				expect(intersection([1,2],[1])).to.eql([1]);
			});
			it('should return [] for intersection of [1], [] and []', function(){
				expect(intersection([],[1])).to.eql([]);
			});
			it('should return [] for intersection of [1,2], [1] and [2]', function(){
				expect(intersection([1,2],[1],[2])).to.eql([]);
			});
			it('should return [2] for intersection of [1,2], [2] and [2,3]', function(){
				expect(intersection([1,2],[2],[2,3])).to.eql([2]);
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					intersection()}).to.throw(TypeError);
			});
		});
	});
	
	describe('#join()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					join(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					join(false,false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					join({},{})}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					join('','')}).to.throw(TypeError);
			});
			it('should throw an exception for empty array', function(){
				expect(function() {
					join([],[])}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return "1,2,3" for join on array of [1,2,3]', function(){
				expect(join([1,2,3],',')).to.be.equals("1,2,3");
			});
			it('should return "1" for join on array of [1,2,3]', function(){
				expect(join([1],',')).to.be.equals("1");
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					join()}).to.throw(TypeError);
			});
		});
	});

	describe('#last()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					last(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					last(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					last({})}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					last('')}).to.throw(TypeError);
			});
			it('should throw an exception for empty array', function(){
				expect(function() {
					last([])}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return n for Expression', function(){
				expect(last('Expression')).to.be.equals('n');
			});
			it('should return 3 for [1,2,3]', function(){
				expect(last([1,2,3])).to.be.equals(3);
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					last()}).to.throw(TypeError);
			});
		});
	});

	describe('#length()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					length(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					length(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					length({})}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return 10 for Expression', function(){
				expect(length('Expression')).to.be.equals(10);
			});
			it('should return 3 for [1,2,3]', function(){
				expect(length([1,2,3])).to.be.equals(3);
			});
			it('should return 0 for empty string', function(){
				expect(length('')).to.be.equals(0);
			});
			it('should return 0 empty array', function(){
				expect(length([])).to.be.equals(0);
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					length()}).to.throw(TypeError);
			});
		});
	});

	describe('#skip()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					skip(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					skip(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					skip({})}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return [2,3] for skip 1 on [1,2,3]', function(){
				expect(skip([1,2,3],1)).to.eql([2,3]);
			});
			it('should return [1,2,3] for skip 0 on [1,2,3]', function(){
				expect(skip([1,2,3],0)).to.eql([1,2,3]);
			});
			it('should return [] for skip 3 on [1,2,3]', function(){
				expect(skip([1,2,3],3)).to.eql([]);
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					skip()}).to.throw(TypeError);
			});
		});
	});

	describe('#take()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					take(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					take(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					take({})}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return [1] for take 1 on [1,2,3]', function(){
				expect(take([1,2,3],1)).to.eql([1]);
			});
			it('should return [1,2,3] for take 3 on [1,2,3]', function(){
				expect(take([1,2,3],3)).to.eql([1,2,3]);
			});
			it('should return [] for take 0 on [1,2,3]', function(){
				expect(take([1,2,3],0)).to.eql([]);
			});
			it('should return "1" for take 1 on 123', function(){
				expect(take('123',1)).to.be.equals('1');
			});
			it('should return 123 for take 3 on 123', function(){
				expect(take('123',3)).to.be.equals('123');
			});
			it('should return "" for take 0 on ""', function(){
				expect(take('',0)).to.be.equals('');
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					take()}).to.throw(TypeError);
			});
		});
	});

	describe('#union()', function () {
		context('with invalid arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					union(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					union(false)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					union('')}).to.throw(TypeError);
			});
			it('should throw an exception for not all arguments arrays', function(){
				expect(function() {
					union([1],[3],'')}).to.throw(TypeError);
			});
		});
		context('with valid arguments', function() {
			it('should return [] for union of [] and []', function(){
				expect(union([],[])).to.eql([]);
			});
			it('should return [1] for union of [1] and []', function(){
				expect(union([],[1])).to.eql([1]);
			});
			it('should return [1,2] for union of [1,2] and [1]', function(){
				expect(union([1,2],[1])).to.eql([1,2]);
			});
			it('should return [1] for union of [1], [] and []', function(){
				expect(union([],[1])).to.eql([1]);
			});
			it('should return [1,2] for union of [1,2], [1] and [2]', function(){
				expect(union([1,2],[1],[2])).to.eql([1,2]);
			});
			it('should return [1,2,3] for union of [1,2], [2] and [2,3]', function(){
				expect(union([1,2],[2],[2,3])).to.eql([1,2,3]);
			});
		});
	
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					union()}).to.throw(TypeError);
			});
		});
	});
});