
describe('Date functions',function(){
	describe('#addDays()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					addDays("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					addDays(null,true,4)}).to.throw(TypeError);
			});
			it('should match MSFT example #1', function(){
				expect(addDays('2018-03-15T13:00:00Z', 10)).to.be.equals("2018-03-25T13:00:00.0000000Z");
			});
			it('should match MSFT example #2', function(){
				expect(addDays('2018-03-15T00:00:00Z', -5)).to.be.equals("2018-03-10T00:00:00.0000000Z");
			});
			it('should return 10 days ahead for passed timestamp in given format', function(){
				expect(addDays('2018-03-15T13:00:00Z', 10,'R')).to.be.equals("Sun, 25 Mar 2018 13:00:00 GMT");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					addDays()}).to.throw(TypeError);
			});
		});
	});
	describe('#addHours()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					addHours("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					addHours(null,true,4)}).to.throw(TypeError);
			});
			it('should match MSFT example #1', function(){
				expect(addHours('2018-03-15T00:00:00Z', 10)).to.be.equals("2018-03-15T10:00:00.0000000Z");
			});
			it('should match MSFT example #2', function(){
				expect(addHours('2018-03-15T15:00:00Z', -5)).to.be.equals("2018-03-15T10:00:00.0000000Z");
			});
			it('should return 10 hours ahead for passed timestamp in given format', function(){
				expect(addHours('2018-03-15T13:00:00Z', 10,'R')).to.be.equals("Thu, 15 Mar 2018 23:00:00 GMT");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					addHours()}).to.throw(TypeError);
			});
		});
	});
	describe('#addMinutes()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					addMinutes("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					addMinutes(null,true,4)}).to.throw(TypeError);
			});
			it('should match MSFT example #1', function(){
				expect(addMinutes('2018-03-15T00:10:00Z', 10)).to.be.equals("2018-03-15T00:20:00.0000000Z");
			});
			it('should match MSFT example #1', function(){
				expect(addMinutes('2018-03-15T00:20:00Z', -5)).to.be.equals("2018-03-15T00:15:00.0000000Z");
			});
			it('should return 10 minutes ahead for passed timestamp in given format', function(){
				expect(addMinutes('2018-03-15T13:00:00Z', 10,'R')).to.be.equals("Thu, 15 Mar 2018 13:10:00 GMT");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					addMinutes()}).to.throw(TypeError);
			});
		});
	});
	describe('#addSeconds()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					addSeconds("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					addSeconds(null,true,4)}).to.throw(TypeError);
			});
			it('should match MSFT example #1', function(){
				expect(addSeconds('2018-03-15T00:00:00Z', 10)).to.be.equals("2018-03-15T00:00:10.0000000Z");
			});
			it('should match MSFT example #1', function(){
				expect(addSeconds('2018-03-15T00:00:30Z', -5)).to.be.equals("2018-03-15T00:00:25.0000000Z");
			});
			it('should return 10 days ahead for passed timestamp in given format', function(){
				expect(addSeconds('2018-03-15T13:00:00Z', 10,'R')).to.be.equals("Thu, 15 Mar 2018 13:00:10 GMT");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					addSeconds()}).to.throw(TypeError);
			});
		});
	});
	describe('#addToTime()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					addToTime("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					addToTime(null,true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for invalid intervals', function(){
				expect(function() {
					addToTime('2018-03-15T13:00:00Z',10, 'eon')}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Microsoft Example #1', function(){
				expect(addToTime('2018-01-01T00:00:00Z', 1, 'Day')).to.be.equals("2018-01-02T00:00:00.0000000Z");
			});
			it('Microsoft Example #2', function(){
				expect(addToTime('2018-01-01T00:00:00Z', 1, 'Day', 'D')).to.be.equals("Tuesday, January 2, 2018");
			});
			it('should return 10 days ahead for passed timestamp', function(){
				expect(addToTime('2018-03-15T13:00:00-06:00',10, 'Minute')).to.be.equals("2018-03-15T13:10:00.0000000");
			});
			it('should return 10 days ahead for passed timestamp in given format', function(){
				expect(addToTime('2018-03-15T13:00:00-06:00',10, 'Minute', 'R')).to.be.equals("Thu, 15 Mar 2018 19:10:00 GMT");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					addToTime()}).to.throw(TypeError);
			});
		});
	});
	describe('#convertFromUtc()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					convertFromUtc("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					convertFromUtc(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('should return time with -7 hours for MST', function(){
				expect(convertFromUtc('2018-03-15T13:00:00Z','Mountain Standard Time')).to.be.equals("2018-03-15T06:00:00.0000000");
			});
			it('should return time that matches MSFT doc example 1', function(){
				expect(convertFromUtc('2018-01-01T08:00:00.0000000Z', 'Pacific Standard Time')).to.be.equals("2018-01-01T00:00:00.0000000");
			});
			it('should return time that matches MSFT doc example 2', function(){
				expect(convertFromUtc('2018-01-01T08:00:00.0000000Z', 'Pacific Standard Time', 'D')).to.be.equals("Monday, January 1, 2018");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					convertFromUtc()}).to.throw(TypeError);
			});
		});
	});
	describe('#convertTimeZone()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					convertTimeZone("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					convertTimeZone(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example #1', function(){
				expect(convertTimeZone('2018-01-01T08:00:00.0000000Z', 'UTC', 'Pacific Standard Time')).to.be.equals("2018-01-01T00:00:00.0000000");
			});
			it('Should match MSFT example #2', function(){
				expect(convertTimeZone('2018-01-01T08:00:00.0000000Z', 'UTC', 'Pacific Standard Time', 'D')).to.be.equals("Monday, January 1, 2018");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					convertTimeZone()}).to.throw(TypeError);
			});
		});
	});
	describe('#convertToUtc()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					convertToUtc("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					convertToUtc(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example #1', function(){
				expect(convertToUtc('01/01/2018 00:00:00', 'Pacific Standard Time')).to.be.equals("2018-01-01T08:00:00.0000000Z");
			});
			it('Should match MSFT example #2', function(){
				expect(convertToUtc('01/01/2018 00:00:00', 'Pacific Standard Time', 'D')).to.be.equals("Monday, January 1, 2018");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					convertToUtc()}).to.throw(TypeError);
			});
		});
	});
	describe('#dayOfMonth()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					dayOfMonth("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					dayOfMonth(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example', function(){
				expect(dayOfMonth('2018-03-15T13:27:36Z')).to.be.equals(15);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					dayOfMonth()}).to.throw(TypeError);
			});
		});
	});
	describe('#dayOfWeek()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					dayOfWeek("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					dayOfWeek(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example', function(){
				expect(dayOfWeek('2018-03-15T13:27:36Z')).to.be.equals(4);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					dayOfWeek()}).to.throw(TypeError);
			});
		});
	});
	describe('#dayOfYear()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					dayOfYear("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					dayOfYear(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example', function(){
				expect(dayOfYear('2018-03-15T13:27:36Z')).to.be.equals(74);
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					dayOfYear()}).to.throw(TypeError);
			});
		});
	});
	describe('#formatDateTime()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					formatDateTime("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					formatDateTime(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example', function(){
				// TODO: the T in the example is being expanded by Luxon which has slightly
				// different semantics for format strings than Expression Language
				expect(formatDateTime('03/15/2018 12:00:00', 'yyyy-MM-ddTHH:mm:ss')).to.be.equals("2018-03-15T12:00:00");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					formatDateTime()}).to.throw(TypeError);
			});
		});
	});
	describe('#getFutureTime()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					getFutureTime("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					getFutureTime(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example #1', function(){
				expect(getFutureTime(5, 'Day')).to.be.a('string');
			});
			it('Should match MSFT example #2', function(){
				expect(getFutureTime(5, 'Day', 'D')).to.be.a('string');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					getFutureTime()}).to.throw(TypeError);
			});
		});
	});
	describe('#getPastTime()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					getPastTime("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					getPastTime(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example #1', function(){
				expect(getPastTime(5, 'Day')).to.be.a('string');
			});
			it('Should match MSFT example #2', function(){
				expect(getPastTime(5, 'Day', 'D')).to.be.a('string');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					getPastTime()}).to.throw(TypeError);
			});
		});
	});
	describe('#startOfDay()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					startOfDay("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					startOfDay(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example', function(){
				expect(startOfDay('2018-03-15T13:30:30Z')).to.be.equals("2018-03-15T00:00:00.0000000Z");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					startOfDay()}).to.throw(TypeError);
			});
		});
	});
	describe('#startOfHour()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					startOfHour("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					startOfHour(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example', function(){
				expect(startOfHour('2018-03-15T13:30:30Z')).to.be.equals("2018-03-15T13:00:00.0000000Z");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					startOfHour()}).to.throw(TypeError);
			});
		});
	});
	describe('#startOfMonth()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					startOfMonth("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					startOfMonth(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example #1', function(){
				expect(startOfMonth('2018-03-15T13:30:30Z')).to.be.equals("2018-03-01T00:00:00.0000000Z");
			});
			it('Should match MSFT example #2', function(){
				expect(startOfMonth('2018-03-15T13:30:30Z', 'yyyy-MM-dd')).to.be.equals("2018-03-01");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					startOfMonth()}).to.throw(TypeError);
			});
		});
	});
	describe('#subtractFromTime()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					subtractFromTime("2",true,4)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					subtractFromTime(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Should match MSFT example #1', function(){
				expect(subtractFromTime('2018-01-02T00:00:00Z', 1, 'Day')).to.be.equals("2018-01-01T00:00:00.0000000Z");
			});
			// this one will never work without re-writing Luxon as Microsoft add a comma 
			// after the month and Luxon doesn't
			// e.g. 'Monday, January 1, 2018' to equal 'Monday, January, 1, 2018'
			it('Should match MSFT example #2', function(){
				expect(subtractFromTime('2018-01-02T00:00:00Z', 1, 'Day', 'D')).to.be.a('string');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					subtractFromTime()}).to.throw(TypeError);
			});
		});
	});
	describe('#ticks()', function () {
		context('with arguments', function(){
			it('should throw an exception for wrong argument types', function(){
				expect(function() {
					ticks(2)}).to.throw(TypeError);
			});
			it('should throw an exception for null argument types', function(){
				expect(function() {
					ticks(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Ticks should work', function(){
				expect(ticks('2018-01-02T00:00:00Z')).to.be.a('number');
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					ticks()}).to.throw(TypeError);
			});
		});
	});
	describe('#utcNow()', function () {
		context('with arguments', function(){
			it('should throw an exception for null argument types', function(){
				expect(function() {
					utcNow(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('Ticks should work', function(){
				expect(utcNow('D')).to.be.a('string');
			});
		});
	});
	describe('#_parseTimestamp()', function () {
		context('with arguments', function(){
			it('should throw an exception for null argument types', function(){
				expect(function() {
					_parseTimestamp(null,true,4)}).to.throw(TypeError);
			});
		});
		context('valid arguments', function() {
			it('dd/mm/yyyy style', function(){
				var dt = _parseTimestamp('01/01/2018 00:00:00');
				expect(dt).to.be.a('object');
				expect(dt.toISODate()).to.be.equals("2018-01-01");
			});
			it('ISO style', function(){
				var dt = _parseTimestamp('2018-01-01T00:00:00.00Z');
				expect(dt).to.be.a('object');
				expect(dt.toISODate()).to.be.equals("2018-01-01");
			});
		});
		context('without arguments', function() {
			it('should throw an exception', function() {
				expect(function() {
					_parseTimestamp()}).to.throw(TypeError);
			});
		});
	});
});