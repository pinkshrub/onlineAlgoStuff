module.exports = function ArrQueue(){
	var _data = [];

	this.show = function(){
		console.log(_data);
		return this;
	}
	this.dQ = function(){
		return _data.shift();
	}
	this.nQ = function(val){
		_data.push(val);
		return this;
	}
	this.front = function(){
		return _data[0];
	}
	this.size = function(){
		return _data.length;
	}
	this.contains = function(val){
		return _data.indexOf(val) > -1;
	}
	this.isEmpty = function(){
		return _data.length === 0;
	}
}