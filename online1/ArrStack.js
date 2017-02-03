module.exports = function ArrStack(){
	_data = [];
	this.show = function(){
		console.log(_data);
		return this;
	}
	this.push = function(val){
		_data.push(val);
		return this;
	}
	this.pop = function(){
		return _data.pop();
	}
	this.isEmpty = function(){
		return !_data.length;
	}
	this.size = function(){
		return _data.length;
	}
	this.top = function(){
		return _data[0];
	}
	this.contains = function(val){
		return _data.indexOf(val) > -1;
	}
}
