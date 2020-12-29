
describe('String functions',function(){
	describe('#concat()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					concat(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					concat(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					concat({"ob":"2"})}).to.throw(TypeError);
			});
			it('should return argument when only one passed', function(){
				expect(concat('Dan')).to.equal('Dan');
			});
			it('should concatenate arguments', function(){
				expect(concat('a','b','c')).to.equal('abc');
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					concat()}).to.throw(TypeError);
			});
		});
	});


	describe('#endsWith()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					endsWith(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					endsWith(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					endsWith({"ob":"2"})}).to.throw(TypeError);
			});

			it('should return true for string "Dan" ends with "an"', function(){
				expect(endsWith('Dan','an')).to.be.true;
			});	
			it('should return false for string "Dan" ends with "en"', function(){
				expect(endsWith('Dan','en')).to.be.false;
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					endsWith()}).to.throw(TypeError);
			});
		});
	});
	describe('#guid()', function () {
		context("there isn't really one", function() {
			it('guid should match pattern', function() {
				expect(guid()).to.match(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/);
			});	
		});
	});
	describe('#indexOf()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					indexOf(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					indexOf(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					indexOf({"ob":"2"})}).to.throw(TypeError);
			});

			it('should return 1 for index of an in "Dan"', function(){
				expect(indexOf('Dan','an')).to.be.equal(1);
			});	
			it('should return -1 for index of en in "Dan"', function(){
				expect(indexOf('Dan','en')).to.be.equal(-1);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					indexOf()}).to.throw(TypeError);
			});
		});
	});
	describe('#lastIndexOf()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					lastIndexOf(2,2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					lastIndexOf(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					lastIndexOf({"ob":"2"})}).to.throw(TypeError);
			});

			it('should return 1 for index of an in "Dan"', function(){
				expect(lastIndexOf('Dan','an')).to.be.equal(1);
			});	
			it('should return -1 for index of en in "Dan"', function(){
				expect(lastIndexOf('Dan','en')).to.be.equal(-1);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					lastIndexOf()}).to.throw(TypeError);
			});
		});
	});
	describe('#replace()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					replace(2,2,3)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					replace(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					replace({"ob":"2"})}).to.throw(TypeError);
			});

			it('should fix a typo', function(){
				expect(replace('Expression Lenguage','Leng','Lang')).to.be.equal("Expression Language");
			});	
			it('should but not introduce one!', function(){
				expect(replace('Expression Language','Leng','Lang')).to.be.equal("Expression Language");
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					replace()}).to.throw(TypeError);
			});
		});
	});
	describe('#split()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					split(2,2,3)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					split(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					split({"ob":"2"})}).to.throw(TypeError);
			});

			it('return an array of three items', function(){
				expect(split('1,2,3',',')).to.have.ordered.members(['1','2','3']);
			});	
			it('should return an array of one argument', function(){
				expect(split('1,2,3',':')).to.have.ordered.members(['1,2,3']);
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					split()}).to.throw(TypeError);
			});
		});
	});
	describe('#startsWith()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					startsWith(2,2,3)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					startsWith(false)}).to.throw(TypeError);
			});startsWith
			it('should throw an exception for object arguments', function(){
				expect(function() {
					startsWith({"ob":"2"})}).to.throw(TypeError);
			});

			it('Does expression language start with expression', function(){
				expect(startsWith('Expression Language','Expression')).to.be.true;
			});	
			it('but not with language', function(){
				expect(startsWith('Expression Language','Language')).to.be.false;
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					split()}).to.throw(TypeError);
			});
		});
	});
	// TODO - add more tests for negatives
	describe('#substring()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					substring(2,2,3)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					substring(false)}).to.throw(TypeError);
			});startsWith
			it('should throw an exception for object arguments', function(){
				expect(function() {
					substring({"ob":"2"})}).to.throw(TypeError);
			});

			it('Substring of Expression Language, 0, 10 = Expression', function(){
				expect(substring('Expression Language',0,10)).to.equal('Expression');
			});	
			it('Substring of Expression Language, 1, 11 = xpression ', function(){
				expect(substring('Expression Language',1,10)).to.equal('xpression ');
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					substring()}).to.throw(TypeError);
			});
		});
	});
	describe('#toUpper()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					toUpper(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					toUpper(false)}).to.throw(TypeError);
			});startsWith
			it('should throw an exception for object arguments', function(){
				expect(function() {
					toUpper({"ob":"2"})}).to.throw(TypeError);
			});

			it('toUpper Expression Language', function(){
				expect(toUpper('Expression Language')).to.equal('EXPRESSION LANGUAGE');
			});	
			it('toUpper "" ', function(){
				expect(toUpper('')).to.equal('');
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					toUpper()}).to.throw(TypeError);
			});
		});
	});
	describe('#toLower()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					toLower(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					toLower(false)}).to.throw(TypeError);
			});startsWith
			it('should throw an exception for object arguments', function(){
				expect(function() {
					toLower({"ob":"2"})}).to.throw(TypeError);
			});

			it('toLower Expression Language', function(){
				expect(toLower('Expression Language')).to.equal('expression language');
			});	
			it('toLower "" ', function(){
				expect(toLower('')).to.equal('');
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					toLower()}).to.throw(TypeError);
			});
		});
	});
	describe('#trim()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					trim(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					trim(false)}).to.throw(TypeError);
			});startsWith
			it('should throw an exception for object arguments', function(){
				expect(function() {
					trim({"ob":"2"})}).to.throw(TypeError);
			});

			it('trim " Expression Language "', function(){
				expect(trim(' Expression Language ')).to.equal('Expression Language');
			});	
			it('trim Expression Language', function(){
				expect(trim('Expression Language')).to.equal('Expression Language');
			});	
			it('trim "" ', function(){
				expect(trim('')).to.equal('');
			});	
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					trim()}).to.throw(TypeError);
			});
		});
	});
});