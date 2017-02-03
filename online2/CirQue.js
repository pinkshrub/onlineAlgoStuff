function CirQ(size){
	var _data = new Array(size),
		f 	  =  0,
		b 	  =  0,
		size  =  0;
	this.iterateF = function(){
		if( f !== b){
			var t = f + 1 < _data.length ? f + 1 : 0;
			f = t;
		}
	}
	this.iterateB = function(){
		var t = b + 1 < _data.length ? b + 1 : 0;
		if(t != f){
			b = t;
			return true;
		}
		return false;
	}
	this.show = function(){
		console.log(_data);
		console.log('front: ', f, 'back: ', b);
		return this;
	}
	this.isEmpty = function(){
		return (b = f && f == undefined);
	}
	this.isFull  = function(){
		return _data.indexOf(undefined) !== -1;
	}
	this.contains= function(val){
		return _data.indexOf(val) > -1;
	}
	this.size 	 = function(){
		console.log('size is:', size);
		return size;
	}
	this.nQ 	 = function(val){
		// console.log('f:', f, 'b:', b, 'val:',val);
		if(_data[b] === undefined){
			_data[b] = val;
			this.iterateB();
			size++;
		} else if(this.iterateB()){
			// console.log('moved b');
			_data[b] = val;
			size++;
		} else {
			console.log('Q full');
		}
		return this;
	}
	this.dQ 	 = function(){
		if(_data[f]){size --};
		_data[f] = undefined;
		this.iterateF();
		return this;
	}
	this.grow = function(){
		// do this better using splice(b,0,undefined)
		if(this.isEmpty()){
			_data.length++;
		} else if ( f !== b ){
			while(f > 0){
				_data.push(_data.shift());
				--f;
				if (b-1<0){
					b = _data.length;
				}
			}
		} else {
			_data[0] = _data[f];
			f = b = 0;
		}
		_data.length++;
		return this;
	}
	this.front = function(){
		return _data[f];
	}
	this.back = function(){
		if(_data[b]){
			return _data[b];
		} else {
			return _data[f];
		}
	}

}

// var bob = new CirQ(6);
// bob.show().nQ(1).show().nQ(2).show().nQ(3).nQ(4).nQ(5).nQ(6).show().nQ(7).show().dQ().show().nQ(7).show().nQ(8).show();
// bob.grow().show().nQ(10).show();


module.exports.CirQue = CirQ;