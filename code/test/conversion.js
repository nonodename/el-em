
describe('Conversion functions',function(){
	describe('#array()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					array(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					array(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					array({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					array(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					array("ob","2")}).to.throw(TypeError);
			});
			it('should return array with one string when string passed', function(){
				expect(array('Dan')).to.eql(['Dan']);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					array()}).to.throw(TypeError);
			});
		});
	});
	describe('#base64()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					base64(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					base64(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					base64({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					base64(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					base64("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					base64(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return base64 for valid string', function(){
				expect(base64('Expression Language')).to.equals('RXhwcmVzc2lvbiBMYW5ndWFnZQ==');
			});
			it('should return empty string for empty string', function(){
				expect(base64('')).to.equals('');
			});
		
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					base64()}).to.throw(TypeError);
			});
		});
	});
	describe('#base64ToBinary()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					base64ToBinary(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					base64ToBinary(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					base64ToBinary({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					base64ToBinary(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					base64ToBinary("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					base64ToBinary(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return binary for base64 string', function(){
				expect(base64ToBinary('aGVsbG8=')).to.equals('0110000101000111010101100111001101100010010001110011100000111101');
			});
			it('should return empty string for empty string', function(){
				expect(base64ToBinary('')).to.equals('');
			});
		
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					base64ToBinary()}).to.throw(TypeError);
			});
		});
	});
	describe('#base64ToString()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					base64ToString(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					base64ToString(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					base64ToString({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					base64ToString(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					base64ToString("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					base64ToString(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return binary for base64 string', function(){
				expect(base64ToString('aGVsbG8=')).to.equals('hello');
			});
			it('should return empty string for empty string', function(){
				expect(base64ToString('')).to.equals('');
			});
		
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					base64ToString()}).to.throw(TypeError);
			});
		});
	});	
	describe('#binary()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					binary(2)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					binary(false)}).to.throw(TypeError);
			});
			it('should throw an exception for object arguments', function(){
				expect(function() {
					binary({"ob":"2"})}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					binary(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					binary("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					binary(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return binary for string', function(){
				expect(binary('hello')).to.equals('0110100001100101011011000110110001101111');
			});
			it('should return empty string for empty string', function(){
				expect(binary('')).to.equals('');
			});
		
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					binary()}).to.throw(TypeError);
			});
		});
	});
	describe('#bool()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					bool(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					bool(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					bool("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					bool(null)}).to.throw(TypeError);
			});
			it('should throw an exception for unconvertible string', function(){
				expect(function() {
					bool("Dog")}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					bool("")}).to.throw(TypeError);
			});
			it('should throw an exception for unconvertible object', function(){
				expect(function() {
					bool({"val":"cat"})}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return true for number 1', function(){
				expect(bool(1)).to.be.true;
			});
			it('should return false for number 0', function(){
				expect(bool(0)).to.be.false;
			});
			it('should return false for number -1', function(){
				expect(bool(-1)).to.be.true;
			});
			it('should return false for string "false"', function(){
				expect(bool('false')).to.be.false;
			});
			it('should return true for string "TRUE"', function(){
				expect(bool('true')).to.be.true;
			});
			// TODO - figure out object behavior 
	/*		it('should return true for object that strings to "true"', function(){
				expect(bool({"val":"true"})).to.be.true;
			});
			it('should return false for object that strings to "false"', function(){
				expect(bool({"val":"FALSE"})).to.be.true;
			});
		*/
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					bool()}).to.throw(TypeError);
			});
		});
	});
	describe('#coalesce()', function () {
		context('valid arguments', function() {
			it('should return true for first null', function(){
				expect(coalesce(null, true, false)).to.be.true;
			});
			it('should return "hello" for first null', function(){
				expect(coalesce(null, "hello", "world")).to.be.equals("hello");
			});
			it('should return null for all null', function(){
				expect(coalesce(null, null, null)).to.be.equals(null);
			});
			it('should return array with one string when arrays passed', function(){
				expect(coalesce(['Dan'],null)).to.eql(['Dan']);
			});
			it('should return first non null array with one string when arrays passed', function(){
				expect(coalesce(null,['Dan'],null)).to.eql(['Dan']);
			});

		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					coalesce()}).to.throw(TypeError);
			});
		});
	});
	describe('#createArray()', function () {
		context('with arguments', function(){
			it('should throw an exception for < 2 arguments', function(){
				expect(function() {
					createArray(false)}).to.throw(TypeError);
			});
			it('should throw an exception for arguments not of same type', function(){
				expect(function() {
					createArray(false,'dog')}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return ["h","e","l","l","o"] for "h","e","l","l","o"', function(){
				expect(createArray("h","e","l","l","o")).to.eql(["h","e","l","l","o"]);
			});
			it('should return [1,2,3] for 1,2,3', function(){
				expect(createArray(1,2,3)).to.eql([1,2,3]);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					createArray()}).to.throw(TypeError);
			});
		});
	});
	describe('#dataUri()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					dataUri(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					dataUri(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					dataUri("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					dataUri(null)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					dataUri("")}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should data URI for "hello" per the docs', function(){
				expect(dataUri("hello")).to.be.equals('data:text/plain;charset=utf-8;base64,aGVsbG8=');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					dataUri()}).to.throw(TypeError);
			});
		});
	});	
	describe('#dataUriToBinary()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					dataUriToBinary(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					dataUriToBinary(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					dataUriToBinary("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					dataUriToBinary(null)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					dataUriToBinary("")}).to.throw(TypeError);
			});
			it('should throw an exception for invalid string', function(){
				expect(function() {
					dataUriToBinary("ksdfhasdjkfh")}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return binary for data URI for "hello" per the docs', function(){
				expect(dataUriToBinary("data:text/plain;charset=utf-8;base64,aGVsbG8=")).to.be.equals('011001000110000101110100011000010011101001110100011001010111100001110100001011110111000001101100011000010110100101101110001110110110001101101000011000010111001001110011011001010111010000111101011101010111010001100110001011010011100000111011011000100110000101110011011001010011011000110100001011000110000101000111010101100111001101100010010001110011100000111101');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					dataUriToBinary()}).to.throw(TypeError);
			});
		});
	});		
	describe('#dataUriToString()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					dataUriToString(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					dataUriToString(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					dataUriToString("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					dataUriToString(null)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					dataUriToString("")}).to.throw(TypeError);
			});
			it('should throw an exception for invalid string', function(){
				expect(function() {
					dataUriToString("ksdfhasdjkfh")}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return "hello" for data URI for "hello" per the docs', function(){
				expect(dataUriToString("data:text/plain;charset=utf-8;base64,aGVsbG8=")).to.be.equals('hello');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					dataUriToString()}).to.throw(TypeError);
			});
		});
	});	
	describe('#decodeBase64()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					decodeBase64(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					decodeBase64(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					decodeBase64("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					decodeBase64(null)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					decodeBase64("")}).to.throw(TypeError);
			});
			it('should throw an exception for invalid string', function(){
				expect(function() {
					decodeBase64("ksdfhasdjkfh")}).to.throw(TypeError);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					decodeBase64()}).to.throw(TypeError);
			});
		});
	});	
	describe('#decodeDataUri()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					decodeDataUri(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					decodeDataUri(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					decodeDataUri("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					decodeDataUri(null)}).to.throw(TypeError);
			});
			it('should throw an exception for empty string', function(){
				expect(function() {
					decodeDataUri("")}).to.throw(TypeError);
			});
			it('should throw an exception for invalid string', function(){
				expect(function() {
					decodeDataUri("ksdfhasdjkfh")}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return binary for data URI for "hello" per the docs', function(){
				expect(decodeDataUri("data:text/plain;charset=utf-8;base64,aGVsbG8=")).to.be.equals('011001000110000101110100011000010011101001110100011001010111100001110100001011110111000001101100011000010110100101101110001110110110001101101000011000010111001001110011011001010111010000111101011101010111010001100110001011010011100000111011011000100110000101110011011001010011011000110100001011000110000101000111010101100111001101100010010001110011100000111101');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					decodeDataUri()}).to.throw(TypeError);
			});
		});
	});		
	describe('#decodeUriComponent()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					decodeUriComponent(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					decodeUriComponent(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					decodeUriComponent("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					decodeUriComponent(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return correctly decode an escaped string', function(){
				expect(decodeUriComponent("https%3A%2F%2Fcontoso.com")).to.be.equals('https://contoso.com');
			});
			it('should return not break an unescaped string', function(){
				expect(decodeUriComponent("contoso.com")).to.be.equals('contoso.com');
			});
			it('should return empty string for an empty string', function(){
				expect(decodeUriComponent("")).to.be.equals('');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					decodeUriComponent()}).to.throw(TypeError);
			});
		});
	});			
	describe('#encodeUriComponent()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					encodeUriComponent(5)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					encodeUriComponent(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					encodeUriComponent(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					encodeUriComponent("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					encodeUriComponent(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return correctly decode an escaped string', function(){
				expect(encodeUriComponent("https://contoso.com")).to.be.equals('https%3A%2F%2Fcontoso.com');
			});
			it('should return not break an unescaped string', function(){
				expect(encodeUriComponent("contoso.com")).to.be.equals('contoso.com');
			});
			it('should return empty string for an empty string', function(){
				expect(encodeUriComponent("")).to.be.equals('');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					encodeUriComponent()}).to.throw(TypeError);
			});
		});
	});	
	describe('#float()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					float(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					float(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					float("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					float(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return 1.1 for "1.1"', function(){
				expect(float("1.1")).to.be.equals(1.1);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					float()}).to.throw(TypeError);
			});
		});
	});		
	describe('#int()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					int(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					int(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					int("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					int(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return 2 for "2"', function(){
				expect(int("2")).to.be.equals(2);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					int()}).to.throw(TypeError);
			});
		});
	});	
	describe('#json()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					json(false)}).to.throw(TypeError);
			});
			it('should throw an exception for number arguments', function(){
				expect(function() {
					json(false)}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					json("ob","2")}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return array for string representation', function(){
				expect(json('[1,2,3]')).to.eql([1,2,3]);
			});
			it('should return empty object for null string', function(){
				expect(json(null)).to.eql({});
			});
			it('should return object for string representation', function(){
				expect(json('{"fullName": "Sophia Owen"}')).to.eql({"fullName": "Sophia Owen"});
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					json()}).to.throw(TypeError);
			});
		});
	});	
	// TODO JSON support and investigate behavior for arrays
	describe('#string()', function () {
		context('with arguments', function(){
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					string("ob","2")}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
		/*	it('should return string representation of array', function(){
				expect(string([1,2,3])).to.be.equals('[1,2,3]');
			});*/
			it('should return empty string for null ', function(){
				expect(string(null)).to.be.equals("");
			});
			it('should return "false" string for false ', function(){
				expect(string(false)).to.be.equals("false");
			});
			it('should return same value for string', function(){
				expect(string("Dan")).to.be.equals("Dan");
			});
			it('should return "10" object for 10', function(){
				expect(string(10)).to.be.equals("10");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					string()}).to.throw(TypeError);
			});
		});
	});	
	describe('#uriComponent()', function () {
		context('with arguments', function(){
			it('should throw an exception for number arguments', function(){
				expect(function() {
					uriComponent(5)}).to.throw(TypeError);
			});
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					uriComponent(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					uriComponent(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					uriComponent("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					uriComponent(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return correctly decode an escaped string', function(){
				expect(uriComponent("https://contoso.com")).to.be.equals('https%3A%2F%2Fcontoso.com');
			});
			it('should return not break an unescaped string', function(){
				expect(uriComponent("contoso.com")).to.be.equals('contoso.com');
			});
			it('should return empty string for an empty string', function(){
				expect(uriComponent("")).to.be.equals('');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					uriComponent()}).to.throw(TypeError);
			});
		});
	});		
 	describe('#uriComponentToBinary()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					uriComponentToBinary(false)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					uriComponentToBinary(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for numeric arguments', function(){
				expect(function() {
					uriComponentToBinary(5)}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					uriComponentToBinary("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					uriComponentToBinary(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return empty string for empty string', function(){
				expect(uriComponentToBinary("")).to.be.equals('');
			});
			it('should return binary for data URI for "http%3A%2F%2Fcontoso.com" per the docs', function(){
				expect(uriComponentToBinary("http%3A%2F%2Fcontoso.com")).to.be.equals('011010000111010001110100011100000010010100110011010000010010010100110010010001100010010100110010010001100110001101101111011011100111010001101111011100110110111100101110011000110110111101101101');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					uriComponentToBinary()}).to.throw(TypeError);
			});
		});
	});	
 	describe('#uriComponentToString()', function () {
		context('with arguments', function(){
			it('should throw an exception for boolean arguments', function(){
				expect(function() {
					uriComponentToString(false)}).to.throw(TypeError);
			});
			it('should throw an exception for numeric arguments', function(){
				expect(function() {
					uriComponentToString(5)}).to.throw(TypeError);
			});
			it('should throw an exception for array arguments', function(){
				expect(function() {
					uriComponentToString(["ob","2"])}).to.throw(TypeError);
			});
			it('should throw an exception for > 1 argument', function(){
				expect(function() {
					uriComponentToString("ob","2")}).to.throw(TypeError);
			});
			it('should throw an exception for null argument', function(){
				expect(function() {
					uriComponentToString(null)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return empty string for empty string', function(){
				expect(uriComponentToString("")).to.be.equals('');
			});
			it('should return string for data URI for "http%3A%2F%2Fcontoso.com" per the docs', function(){
				expect(uriComponentToString("http%3A%2F%2Fcontoso.com")).to.be.equals('http://contoso.com');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					uriComponentToString()}).to.throw(TypeError);
			});
		});
	});	
});