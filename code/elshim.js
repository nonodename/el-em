'use strict';

function EvalException(message) {
	this.message = message;
	this.name = 'UserException';
}

function argumentHelper(count,type,functionName,params){
	var args = Array.prototype.slice.call(params);
	if(args.length !== count){
		throw new TypeError(functionName+": expects at least "+count+" arguments");
	}
	if (!args.every(i => (typeof(i) === type))) {
    	throw new TypeError(functionName+' expects arguments of type '+type);
  	}
	return args;
}
// String functions
function concat(){
	if(arguments.length < 1)
		throw new TypeError("concat(): expects at least one arguments");
	var s="";
	for(var i in arguments){
		if(typeof(arguments[i]) !== "string")
			throw new TypeError("concat(): expects only string arguments");
		else
			s+=arguments[i];
	}
	return s;
}
function endsWith(text, searchText){
	argumentHelper(2,'string',"endsWith()",arguments)
	return text.endsWith(searchText);
}
// see https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
function indexOf(text,searchText){
	argumentHelper(2,'string',"indexOf()",arguments)
	return text.indexOf(searchText);
}
function lastIndexOf(text,searchText){
	argumentHelper(2,'string',"lastIndexOf()",arguments)
	return text.lastIndexOf(searchText);
}
function replace(text,oldText,newText){
	argumentHelper(3,'string',"replace()",arguments)
	return text.replace(oldText,newText);
}
function split(text,delimiter){
	argumentHelper(2,'string',"split()",arguments)
	return text.split(delimiter);
}
function startsWith(text, searchText){
	argumentHelper(2,'string',"startsWith()",arguments)
	return text.startsWith(searchText);
}
function substring(text, startIndex,length){
	if(arguments.length != 3)
		throw new TypeError("substring() expects three arguments");
	if(typeof(text)!=='string')
		throw new TypeError("substring() expects first argument to be a string");
	if(typeof(startIndex)!=='number')
		throw new TypeError("substring() expects second argument to be a number");
	if(typeof(startIndex)!=='number')
		throw new TypeError("substring() expects third argument to be a number");
	return text.substr(startIndex,length);
}
function toLower(text){
	argumentHelper(1,'string',"toLower()",arguments)
	return text.toLowerCase();
}
function toUpper(text){
	argumentHelper(1,'string',"toUpper()",arguments)
	return text.toUpperCase();
}
function trim(text){
	argumentHelper(1,'string',"toUpper()",arguments)
	return text.trim();
}

// Collection functions
// Check whether a collection has a specific item.
function contains(collection,value){
	if(arguments.length < 2 || arguments.length > 2){
		throw new TypeError("Contains(): expects two arguments")
	}
	if(null!=collection && typeof(collection) === "string" && typeof(value) === "string"){
		return (collection.indexOf(value) > -1);
	}else if(Array.isArray(collection) && collection.length > 0){
		return collection.includes(value);
	} else if(typeof(collection) === "object"){
		return collection[value] != null;
	} else 
		throw new TypeError("contains(): invalid arguments")
}
// Check whether a collection is empty.
function empty(collection){
	if(arguments.length != 1){
		throw new TypeError("empty(): expects one argument")
	}
	if(null!=collection && typeof(collection) === "string"){
		return collection.length === 0;
	}else if(Array.isArray(collection) && collection.length < 1){
		return true;
	} else if(typeof(collection) == "object"){
		return Object.keys(collection).length === 0;
	} else {
		throw new TypeError("empty(): invalid argument")
	}
}
// docs aren't clear with behavior if there isn't a first. Tend towards throwing an exception to help user find issue.
function first(collection){
	if(arguments.length !== 1){
		throw new TypeError("first(): expects one argument")
	}
	if(null!=collection && typeof(collection) === "string" && collection.length >0){
		return collection.charAt(0);
	}else if(Array.isArray(collection) && collection.length >0){
		return collection[0];
	} else {
		throw new TypeError("first(): works on arrays or strings with at least one item");
	}
}
// Return a collection that has only the common items across the specified collections.
// TODO make work on objects
function intersection(){
	if(arguments.length < 2)
		throw new TypeError("intersection(): Not enough arguments to intersection");
	if(!Array.isArray(arguments[0]))
		throw new TypeError("intersection(): First argument not an array");
	var result = arguments[0];
	for(var i in arguments){
		if(!Array.isArray(arguments[i]))
			throw new TypeError("intersection(): Non array passed to intersection");
		result = result.filter(x => arguments[i].includes(x));
	}
	return result;
}
// Return a string that has all the items from an array, separated by the specified character.
function join(collection, delimiter){
	if(arguments.length !== 2)
		throw new TypeError("join(): Wrong number of arguments");
	if(Array.isArray(collection) && typeof(delimiter)==='string')
		return collection.join(delimiter);
	else 
		throw new TypeError("join(): arguments not of expected type");
}

// Return the last item from a collection.
function last(collection){
	if(arguments.length !== 1){
		throw new TypeError("last(): expects one argument")
	}
	if(null!=collection && typeof(collection) === "string" && collection.length >0){
		return collection.charAt(collection.length-1);
	}else if(Array.isArray(collection) && collection.length >0){
		return collection[collection.length-1];
	} else {
		throw new TypeError("last(): expects an array or string");
	}
}
// Return the number of items in a string or array.
function length(collection){
	if(arguments.length !== 1){
		throw new TypeError("length(): expects one argument")
	}
	if(Array.isArray(collection) || typeof(collection)==='string')
		return collection.length;
	else 
		throw new TypeError("length(): array or string")	
}
// Remove items from the front of a collection, and return all the other items.
function skip(collection, count){
	if(arguments.length !== 2){
		throw new TypeError("skip(): expects two arguments")
	}
	if(Array.isArray(collection) && typeof(count)==='number'){
		return collection.slice(count);
	} else {
		throw EvalException("skip(): works on arrays only, expects second param to be a number");
	}
}
// Return items from the front of a collection.
function take(collection,count){
	if(arguments.length !== 2){
		throw new TypeError("take(): expects two arguments")
	}
	if(typeof(count)==='number'){
		if(Array.isArray(collection)){
			return collection.slice(0,count);
		} else if(typeof(collection)==="string"){
			return collection.substr(0,count);
		} else {
			throw new TypeError("take(): expects a string or array as first parameter");
		}
	} else 
		throw new TypeError("take(): expects a number as second parameter");
	
}
// 	Return a collection that has all the items from the specified collections.
//  TODO - work on objects
function union(){
	if(arguments.length < 2)
		throw new TypeError("union(): Not enough arguments");
	if(!Array.isArray(arguments[0]))
		throw new TypeError("union(): first argument not an array");
	var result = new Set(arguments[0]);
	for(var i in arguments){
		if(!Array.isArray(arguments[i]))
			throw new TypeError("union(): argument "+i+" not an array");
		var temp = new Set(arguments[i]);
		for(var element of temp){
			result.add(element);
		}
	}
	return Array.from(result);
}
/// Logical functions

function and(expression1, expression2){
	if(arguments.length !== 2)
		throw new TypeError("and(): Not enough arguments");
	if(typeof(expression1) === "boolean" && typeof(expression2) === "boolean")
		return expression1 && expression2;
	else
		throw new TypeError("and: non boolean passed");
}
function equals(expression1, expression2){
	if(arguments.length !== 2)
		throw new TypeError("equals(): Not enough arguments");
	if(typeof(expression1)==="object" || typeof(expression2)==="object")
		throw new TypeError("equals(): objects not supported ")
	if(Array.isArray(expression1)==="object" || Array.isArray(expression2)==="object")
		throw new TypeError("equals(): arrays not supported ")
	return expression1 == expression2;	// not === because true = 1 (not handled yet)
}
function greater(value, compareTo){
	if(arguments.length < 2)
		throw new TypeError("greater(): Not enough arguments");
	if(typeof(value)==="object" || typeof(compareTo)==="object")
		throw new TypeError("greater(): objects not supported ")
	if(typeof(value)==="boolean" || typeof(compareTo)==="boolean")
		throw new TypeError("greater(): boolean not supported ")
	if(Array.isArray(value)==="object" || Array.isArray(compareTo)==="object")
		throw new TypeError("greater(): arrays not supported ")
	if(typeof(value)!==typeof(compareTo))
		throw new TypeError("greater(): arguments not of same type")
	return value > compareTo;
}
function greaterOrEquals(value, compareTo){
	if(arguments.length !== 2)
		throw new TypeError("greaterOrEquals(): Not enough arguments");
	if(typeof(value)==="object" || typeof(compareTo)==="object")
		throw new TypeError("greaterOrEquals(): objects not supported ")
	if(typeof(value)==="boolean" || typeof(compareTo)==="boolean")
		throw new TypeError("greaterOrEquals(): boolean not supported ")
	if(Array.isArray(value)==="object" || Array.isArray(compareTo)==="object")
		throw new TypeError("greaterOrEquals(): arrays not supported ")
	if(typeof(value)!==typeof(compareTo))
		throw new TypeError("greaterOrEquals(): arguments not of same type")
	return value >= compareTo;
}
function iif(expression, valueIfTrue, valueIfFalse){
	if(arguments.length !== 3)
		throw new TypeError("iif(): Not enough arguments");
	if(typeof(expression)!== "boolean")
		throw new TypeError("iif(): 1st arg must be a boolean");
	if(expression)
		return valueIfTrue;
	else 
		return valueIfFalse;
}
function less(value, compareTo){
	if(arguments.length !== 2)
		throw new TypeError("less(): Not enough arguments");
	if(typeof(value)==="object" || typeof(compareTo)==="object")
		throw new TypeError("less(): objects not supported ")
	if(typeof(value)==="boolean" || typeof(compareTo)==="boolean")
		throw new TypeError("less(): boolean not supported ")
	if(Array.isArray(value)==="object" || Array.isArray(compareTo)==="object")
		throw new TypeError("less(): arrays not supported ")
	if(typeof(value)!==typeof(compareTo))
		throw new TypeError("less(): arguments not of same type")
	return value < compareTo;
}
function lessOrEquals(value, compareTo){
	if(arguments.length !== 2)
		throw new TypeError("lessOrEquals(): Not enough arguments");
	if(typeof(value)==="object" || typeof(compareTo)==="object")
		throw new TypeError("lessOrEquals(): objects not supported ")
	if(typeof(value)==="boolean" || typeof(compareTo)==="boolean")
		throw new TypeError("lessOrEquals(): boolean not supported ")
	if(Array.isArray(value)==="object" || Array.isArray(compareTo)==="object")
		throw new TypeError("lessOrEquals(): arrays not supported ")
	if(typeof(value)!==typeof(compareTo))
		throw new TypeError("lessOrEquals(): arguments not of same type")
	return value <= compareTo;
}
function not(value){
	if(arguments.length !== 1)
		throw new TypeError("not(): expects 1 argument");
	if(null!=value && typeof(value)==='boolean')
		return !value;
	else
		throw new TypeError("not(): no boolean passed");			
}
function or(expression1, expression2){
	if(arguments.length !== 2)
		throw new TypeError("or(): Wrong number of arguments");
	if(typeof(expression1) === "boolean" && typeof(expression2) === "boolean")
		return expression1 || expression2;
	else
		throw new TypeError("or(): non boolean passed");
}
//  Conversion Functions
function array(value){
	argumentHelper(1,'string',"array()",arguments);
	return [value];
}
function base64(value){
	argumentHelper(1,'string',"base64()",arguments);
	return btoa(value);
}
function base64ToBinary(value){
	argumentHelper(1,'string',"base64ToBinary()",arguments);
	return binary(value);
}
function base64ToString(value){
	argumentHelper(1,'string',"base64ToString()",arguments);
	return atob(value);
}
function binary(value){
	argumentHelper(1,'string',"binary()",arguments);
	var b = "";
	for(var i in value){
		b+=value.charCodeAt(i).toString(2).padStart(8,'0');
	}
	return b;
}	
// MS documentation isn't totally clear on behavior so this is a logical approximation
function bool(value){
	if(arguments.length !== 1)
		throw new TypeError("bool(): Wrong number of arguments");
	if(value === null)
		throw new TypeError("bool(): Expecting a non null argument");
	if(typeof(value) === 'object'){
		if(Array.isArray(value))
			throw new TypeError("bool(): array not supported");
		else
			throw new TypeError("bool(): objects not currently supported");
	}
	switch(typeof(value)){
		case 'bool': 
			throw new TypeError("bool(): Why call bool on a bool?");
		case 'number':
			return (value !== 0);
		case 'string': 
			if(value.toLowerCase() === 'true')
				return true;
			else if(value.toLowerCase() === 'false')
				return false;
			else 
				throw new TypeError("bool(): don't know if string "+value+" is true or false");
		default: 
			throw new TypeError("bool(): doesn't work with type "+typeof(value));
	}
}
function coalesce(){
	if(arguments.length < 1)
		throw new TypeError("coalesce(): expect at least one argument");
	for(var i in arguments){
		if(arguments[i] != null)
			return arguments[i];
	}
	return null;
}
function createArray(){
	if(arguments.length < 2)
		throw new TypeError("createArray(): expect at least one argument");
	var result=[];
	var t = typeof(arguments[0]);
	for(var i in arguments){
		if(t !== typeof(arguments[i]))
			throw new TypeError("createArray(): all arguments should be of same type");
		result.push(arguments[i]);
	}
	return result;
}
function dataUri(value){
	argumentHelper(1,'string',"dataUri()",arguments);
	if(null == value || value.length < 1)
		throw new TypeError("dataUri(): only works on non zero length strings");
	return "data:text/plain;charset=utf-8;base64,"+btoa(value);
}
// naive implementations based on there being no whitespace in the URI
function dataUriToBinary(value){
	argumentHelper(1,'string',"dataUriToBinary()",arguments);
	if(null!=value && value.startsWith('data:text/plain;charset=utf-8;base64,'))
		return binary(value);
	else 
		throw new TypeError("dataUriToBinary(): not a data URI");
}
function dataUriToString(value){
	argumentHelper(1,'string',"dataUriToString()",arguments);
	if(null!=value && value.startsWith('data:text/plain;charset=utf-8;base64,'))
		return atob(value.substr(37));
	else 
		throw new TypeError("dataUriToString(): not a data URI");
}
function decodeBase64(value){
	throw new TypeError("decodeBase64(): the docs say you should use base64ToString");
}
function decodeDataUri(value){
	return dataUriToBinary(value);
}
function decodeUriComponent(value){
	argumentHelper(1,'string',"decodeUriComponent()",arguments);
	return decodeURIComponent(value);
}
function encodeUriComponent(value){
	argumentHelper(1,'string',"encodeUriComponent()",arguments);
	return uriComponent(value);
}
function float(value){
	argumentHelper(1,'string',"float()",arguments);
	return parseFloat(value);	
}
function int(value){
	argumentHelper(1,'string',"int()",arguments);
	return parseInt(value);	
}
function json(value){
	if(arguments.length !== 1)
		throw new TypeError("json(): Wrong number of arguments");
	if(value===null)
		return {};
	if(typeof(value)!=="string")
		throw new TypeError("json(): expects a string or null ")
	if(value.startsWith('<?xml'))
		throw new TypeError('json(): XML not supported yet');
	return JSON.parse(value);
}
// TODO: handle JSON (example in docs)
function string(value){
	if(arguments.length !== 1)
		throw new TypeError("string(): Wrong number of arguments");
	if(value === null)
		return "";
	return String(value);
}
function uriComponent(value){
	argumentHelper(1,'string',"uriComponent()",arguments);
	return encodeURIComponent(value);
}
function uriComponentToBinary(value){
	argumentHelper(1,'string',"uriComponentToBinary()",arguments);
	return binary(value);
}
function uriComponentToString(value){
	argumentHelper(1,'string',"uriComponentToString()",arguments);
	return decodeURIComponent(value);
}
// from https://stackoverflow.com/questions/48788722/json-to-xml-using-javascript
function xml(value){
  var rxml = '';
  for (var prop in value) {
    rxml += value[prop] instanceof Array ? '' : "<" + prop + ">";
    if (value[prop] instanceof Array) {
      for (var array in value[prop]) {
        rxml += "<" + prop + ">";
        rxml += xml(new Object(value[prop][array]));
        rxml += "</" + prop + ">";
      }
    } else if (typeof value[prop] == "object") {
      rxml += xml(new Object(value[prop]));
    } else {
      rxml += value[prop];
    }
    rxml += value[prop] instanceof Array ? '' : "</" + prop + ">";
  }
  var rxml = rxml.replace(/<\/?[0-9]{1,}>/g, '');
  return rxml;
}

function xpath(value){
	throw new EvalException("xpath: to be implemented");
}
// math functions
function add(number1, number2){
	if(typeof(number1) === 'number' && typeof(number2) === 'number')
			return number1+number2;
	else
		throw new EvalException("add: expects integers or floats");					
}
function div(number1, number2){
	if(typeof(number1) === 'number' && typeof(number2) === 'number'){
		var result = number1/number2;
		if(result>=0)
			return Math.floor(result);
		else
			return Math.ceil(result);
	} else
		throw new EvalException("div: expects integers or floats");					
}
function max(value){
	throw new EvalException("max: to be implemented");
}
function min(value){
	throw new EvalException("min: to be implemented");
}
function mod(number1, number2){
	if(typeof(number1) === 'number' && typeof(number2) === 'number'){
		return number1%number2;
	} else
		throw new EvalException("mod: expects integers or floats");					
}
function mul(number1, number2){
	if(typeof(number1) === 'number' && typeof(number2) === 'number'){
		return number1*number2;
	} else
		throw new EvalException("mul: expects integers or floats");					
}
function rand(minValue,maxValue){
	if(typeof(minValue) === 'number' && typeof(maxValue) === 'number'){
		return Math.floor((Math.random()*(maxValue-minValue))+minValue);
	} else
		throw new EvalException("rand: expects integers");					
}
function range(startIndex,count){
	throw new EvalException("range: to be implemented");
}
function sub(number1, number2){
	if(typeof(number1) === 'number' && typeof(number2) === 'number'){
		return number1-number2;
	} else
		throw new EvalException("mul: expects integers or floats");					
}


// Date functions

// Note that due to differences between .NET and JavaScript these are not exact down to 
// usage of punctuation.
// See https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings
// and https://tc39.es/ecma402/#datetimeformat-objects
function _formatHelper(timestamp,format){
	if(null!=format && typeof(format)==='string' && format.length > 0)
		if(format.length===1){
			switch(format){
						// 6/15/2009 (en-US)
				case 'd': return timestamp.toLocaleString(luxon.DateTime.DATE_SHORT);	
						// Monday, June 15, 2009 (en-US)
				case 'D': return timestamp.toLocaleString(luxon.DateTime.DATE_HUGE);	
						// Monday, June 15, 2009 1:45 PM (en-US)
				case 'f': return timestamp.toLocaleString({year:'numeric', month: 'long', 
					day: 'numeric', hour:'numeric',
					minute:'numeric',weekday:'long' });		
						// Monday, June 15, 2009 1:45:30 PM (en-US)
				case 'F': return timestamp.toLocaleString({year:'numeric', month: 'long', 
					day: 'numeric', hour:'numeric',
					minute:'numeric',second:'numeric',weekday:'long' });	
						// 6/15/2009 1:45 PM
				case 'g': return timestamp.toLocaleString({year:'numeric', month: 'numeric', 
					day: 'numeric', hour:'numeric',
					minute:'numeric' });				
						// 6/15/2009 1:45:30 PM (en-US)		
				case 'G': return timestamp.toLocaleString({year:'numeric', month: 'numeric', 
					day: 'numeric', hour:'numeric',
					minute:'numeric', second: 'numeric'});	
						// June 15 (en-US)
				case 'M': 
				case 'm': return timestamp.toLocaleString({month: 'long', 
					day: 'numeric'});						
				case 'O':
				case 'o': return timestamp.toISO();
				case 'R':
				case 'r': return timestamp.toHTTP();
						// 2009-06-15T13:45:30
				case 's': return timestamp.toFormat("yyyy-MM-dd'T'HH:mm:ss");
						// 1:45 PM
				case 't': return timestamp.toLocaleString(luxon.DateTime.TIME_SIMPLE);
						// 1:45:30 PM
				case 'T': return timestamp.toLocaleString(luxon.DateTime.TIME_WITH_SECONDS);
						// 2009-06-15 13:45:30Z
				case 'u': return timestamp.toFormat("yyyy-MM-dd HH:mm:ss'Z'");
						// Monday, June 15, 2009 8:45:30 PM (en-US)
				case 'U': return timestamp.toLocaleString({year:'numeric', month: 'long', 
					day: 'numeric', weekday: 'long', hour:'numeric',
					minute:'numeric', second: 'numeric'});
						// June 2009
				case 'Y': 
				case 'y': return timestamp.toLocaleString({year:'numeric', month: 'long'});
				default: throw new EvalException("Unknown single char format specifier "+specifier);
			}
		} else {
			return timestamp.toFormat(format);
		}
	else 
		return timestamp.toISO();
}
// Helper for the next four
function _addDelta(datetime,unit,amount,format){
	var u = unit;
	if(unit.charAt(unit.length-1) !== 's'){	// convert from MSFT to Luxon
		u = unit+'s';
	}
	var dt = datetime.plus({[u]:amount});
	return _formatHelper(dt,format);
}
// Add a number of days to a timestamp.
function addDays(timestamp, days, format){
	return _addDelta(luxon.DateTime.fromISO(timestamp),'days',days, format);
}
// Add a number of hours to a timestamp.
function addHours(timestamp, hours, format){
	return _addDelta(luxon.DateTime.fromISO(timestamp),'hours',hours, format);
}
// Add a number of minutes to a timestamp.
function addMinutes(timestamp, minutes, format){
	return _addDelta(luxon.DateTime.fromISO(timestamp),'minutes',minutes, format);
}
// Add a number of seconds to a timestamp.
function addSeconds(timestamp, seconds, format){
	return _addDelta(luxon.DateTime.fromISO(timestamp),'seconds',seconds, format);
}

const _VALID_UNITS = ['second','minute','hour','day','week','month','year'];

// Add a number of time units to a timestamp. See also getFutureTime.
function addToTime(timestamp, interval,timeunit, format){
	if(_VALID_UNITS.includes(timeunit))
		return _addDelta(luxon.DateTime.fromISO(timestamp),timeunit,interval, format);
	else 
		throw new EvalException("Unrecognized time unit: "+timeunit);
}
// See https://docs.microsoft.com/en-us/previous-versions/windows/embedded/ms912391(v=winembedded.11)
function _mapTimeZone(tz){
	switch(tz){
		case "Dateline Standard Time": return "UTC-12";
		case "Samoa Standard Time": return "UTC-11";
		case "Hawaiian Standard Time": return "UTC-10";
		case "Alaskan Standard Time":	return "UTC-9";
		case "Pacific Standard Time": return "UTC-8";
		case "Mountain Standard Time":
		case "Mexico Standard Time 2":
		case "U.S. Mountain Standard Time": return "UTC-7";
		case "Central Standard Time":
		case "Canada Central Standard Time":
		case "Mexico Standard Time":
		case "Central America Standard Time": return "UTC-6";
		case "Eastern Standard Time":
		case "U.S. Eastern Standard Time":
		case "S.A. Pacific Standard Time": return "UTC-5";
		case "Atlantic Standard Time":
		case "S.A. Western Standard Time":
		case "Pacific S.A. Standard Time": return "UTC-4";
		case "Newfoundland and Labrador Standard Time":
		case "E. South America Standard Time":
		case "S.A. Eastern Standard Time":
		case "Greenland Standard Time": return "UTC-3";
		case "Mid-Atlantic Standard Time": return "UTC-2";
		case "Azores Standard Time":
		case "Cape Verde Standard Time": return "UTC-1";
		case "GMT Standard Time":
		case "Greenwich Standard Time": return "UTC";
		case "Central Europe Standard Time":
		case "Central European Standard Time":
		case "Romance Standard Time":
		case "W. Europe Standard Time":
		case "W. Central Africa Standard Time": return "UTC+1";
		case "E. Europe Standard Time": 
		case "Egypt Standard Time": 
		case "FLE Standard Time": 
		case "GTB Standard Time": 
		case "Israel Standard Time": 
		case "South Africa Standard Time": return "UTC+2";
		case "Russian Standard Time": 
		case "Arab Standard Time": 
		case "E. Africa Standard Time": 
		case "Arabic Standard Time": return "UTC+3";
		case "Iran Standard Time": return "UTC+3.5";
		case "Arabian Standard Time": 
		case "Caucasus Standard Time": return "UTC+4";
		case "Transitional Islamic State of Afghanistan Standard Time": return "UTC+4.5";
		case "Ekaterinburg Standard Time": 
		case "West Asia Standard Time": return "UTC+5";
		case "India Standard Time": return "UTC+5.5";
		case "Nepal Standard Time": return "UTC+5.75";
		case "Central Asia Standard Time": 
		case "Sri Lanka Standard Time": 
		case "N. Central Asia Standard Time": return "UTC+6";		
		case "Myanmar Standard Time": return "UTC+6.5";		
		case "S.E. Asia Standard Time": 
		case "North Asia Standard Time": return "UTC+7";		
		case "China Standard Time": 
		case "Singapore Standard Time": 
		case "Taipei Standard Time": 
		case "W. Australia Standard Time": 
		case "North Asia East Standard Time": return "UTC+8";
		case "Korea Standard Time": 
		case "Tokyo Standard Time": 
		case "Yakutsk Standard Time": return "UTC+9";		
		case "A.U.S. Central Standard Time": 
		case "Cen. Australia Standard Time": return "UTC+9.5";				
		case "A.U.S. Eastern Standard Time": 
		case "E. Australia Standard Time": 
		case "Tasmania Standard Time": 
		case "Vladivostok Standard Time": 
		case "West Pacific Standard Time": return "UTC+10";
		case "Central Pacific Standard Time": return "UTC+11";					
		case "Fiji Islands Standard Time": 
		case "New Zealand Standard Time": return "UTC+12";
		case "Tonga Standard Time": return "UTC+13";
		default: throw new EvalException("Unrecognized Time Zone: "+tz);
	}
}
function _mapTimeZonebyID(tz){
	switch(tz){
		case "000": return "UTC-12";
		case "001": return "UTC-11";
		case "002": return "UTC-10";
		case "003":	return "UTC-9";
		case "004": return "UTC-8";
		case "010":
		case "013":
		case "015": return "UTC-7";
		case "020":
		case "025":
		case "030":
		case "033": return "UTC-6";
		case "035":
		case "040":
		case "045": return "UTC-5";
		case "050":
		case "055":
		case "056": return "UTC-4";
		case "060":
		case "065":
		case "070":
		case "073": return "UTC-3";
		case "075": return "UTC-2";
		case "080":
		case "083": return "UTC-1";
		case "085":
		case "090": return "UTC";
		case "095":
		case "100":
		case "105":
		case "110":
		case "113": return "UTC+1";
		case "115": 
		case "120": 
		case "125": 
		case "130": 
		case "135": 
		case "140": return "UTC+2";
		case "145": 
		case "150": 
		case "155": 
		case "158": return "UTC+3";
		case "160": return "UTC+3.5";
		case "165": 
		case "170": return "UTC+4";
		case "175": return "UTC+4.5";
		case "180": 
		case "185": return "UTC+5";
		case "190": return "UTC+5.5";
		case "193": return "UTC+5.75";
		case "195": 
		case "200": 
		case "201": return "UTC+6";		
		case "203": return "UTC+6.5";		
		case "205": 
		case "207": return "UTC+7";		
		case "210": 
		case "215": 
		case "220": 
		case "225": 
		case "227": return "UTC+8";
		case "230": 
		case "235": 
		case "240": return "UTC+9";		
		case "245": 
		case "250": return "UTC+9.5";				
		case "255": 
		case "260": 
		case "265": 
		case "270": 
		case "275": return "UTC+10";
		case "280": return "UTC+11";					
		case "285": 
		case "290": return "UTC+12";
		case "300": return "UTC+13";
		default: throw new EvalException("Unrecognized Time Zone Index: "+tz);
	}
}
// Convert a timestamp from Universal Time Coordinated (UTC) to the target time zone.
function convertFromUtc(timestamp, destinationTimeZone, format){
	var dt = luxon.DateTime.fromISO(timestamp);
	dt = dt.setZone(_mapTimeZone(destinationTimeZone));
	return _formatHelper(dt,format);
}
// Convert a timestamp from the source time zone to the target time zone.
function convertTimeZone(timestamp,sourceTimeZone,destinationTimeZone,format){
	var dt = luxon.DateTime.fromISO(timestamp);
	dt = dt.setZone(_mapTimeZone(sourceTimeZone));
	dt = dt.setZone(_mapTimeZone(destinationTimeZone));
	return _formatHelper(dt,format);
}
// Convert a timestamp from the source time zone to Universal Time Coordinated (UTC).
function convertToUtc(timestamp,sourceTimeZone,format){
	var dt = luxon.DateTime.fromISO(timestamp);
	dt = dt.setZone(_mapTimeZone(sourceTimeZone));
	return _formatHelper(dt,format);
}
// Return the day of the month component from a timestamp.
function dayOfMonth(timestamp){
	var dt = luxon.DateTime.fromISO(timestamp);
	return dt.month;
}
// 	Return the day of the week component from a timestamp.
function dayOfWeek(timestamp){
	var dt = luxon.DateTime.fromISO(timestamp);
	return dt.weekday;
}
// 	Return the day of the year component from a timestamp.
function dayOfYear(timestamp){
	var dt = luxon.DateTime.fromISO(timestamp);
	return parseInt(dt.toFormat('o'));	// ordinal/day of year
}
// Return the timestamp as a string in optional format.
function formatDateTime(timestamp, format){
	var dt = luxon.DateTime.fromISO(timestamp);
	return _formatHelper(dt,format);
}
// Return the current timestamp plus the specified time units. See also addToTime.
function getFutureTime(interval, timeUnit, format){
	return addToTime(luxon.DateTime.local(), interval,timeunit, format);
}
// Return the current timestamp minus the specified time units. See also subtractFromTime.
function getPastTime(interval, timeUnit, format){
	return addToTime(luxon.DateTime.local(), interval*-1,timeunit, format);
}
// Return the start of the day for a timestamp.
function startOfDay(timestamp,format){
	var dt = luxon.DateTime.fromISO(timestamp);
	return _formatHelper(dt.startOf('day'),format);
}
// 	Return the start of the hour for a timestamp.
function startOfHour(timestamp,format){
	var dt = luxon.DateTime.fromISO(timestamp);
	return _formatHelper(dt.startOf('hour'),format);
}
// 	Return the start of the month for a timestamp.
function startOfMonth(timestamp,format){
	var dt = luxon.DateTime.fromISO(timestamp);
	return _formatHelper(dt.startOf('month'),format);
}
// Subtract a number of time units from a timestamp. See also getPastTime.
function subtractFromTime(timestamp, interval, timeUnit, format){
	return addToTime(luxon.DateTime.fromISO(timestamp),interval*-1,timeunit, format);
}
// Return the ticks property value for a specified timestamp.
function ticks(timestamp){
	var dt = luxon.DateTime.fromISO(timestamp);
	var diffInMilliSeconds = dt.diffNow('milliseconds');
	return parseInt(diffInMilliSeconds.milliseconds)*-10000;	//a tick is 100 nanoseconds
}
// Return the current timestamp as a string.
function utcNow(format){
	return _formatHelper(luxon.DateTime.local(),format);
}

		