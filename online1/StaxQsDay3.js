// 0: Howdy! nice Weekend?!
// 1: Context!
// 	a. Stacks and Queues
// 	b. Today is DeQues, a continuation of implementing different classes with specific uses
// 	c. Only one more class and fun algorithm to do
// 2: yesterday:
//	a. queue
//	b. 2stackQ
// 3: Today!
// 	a. DeQueues
// 		- why!!!!
// 		- what!!!
// 4: MissionTime:
// 	a. implement a dequeue
// 		- push&pop for front&back
//		- front & back
// 	b. Make a Queue using 2 stacks

function Stac() {
	this.storage = [];
	this.size = this.storage.length - 1;

	this.push = function(data) {
		this.storage.push(data);
		return this;
	};

	this.pop = function() {
		return this.storage.pop();
	}

	this.top = function() {
		return storage[this.size];
	}

	this.isEmpty = function() {
		return this.storage.length === 0;
	}
}


function TwoStacQ() {
	// storage structures
	this.storage = new Stac();
	this.storageHelp = new Stac();
	this.dqmode = false;


	this.display = function() {
		console.log('********chekcing in on myself 4u**********');
		console.log('dqmode is: ', this.dqmode);
		console.log('how empty?: ', this.isEmpty());
		console.log('storage is: ', this.storage.storage);
		console.log('storageHelp is: ', this.storageHelp.storage);
		return this;
	}


	// returns if Empty or not
	this.isEmpty = function() {
		return (this.storage.isEmpty() && this.storageHelp.isEmpty());
	}

	// adds stufffff....
	this.nQ = function(data) {
			if (this.dqmode) {
				while (!this.storageHelp.isEmpty()) {
					this.storage.push(this.storageHelp.pop())
				}
				this.dqmode = false;
			}
			this.storage.push(data);
			return this;
	}

	// removes stufffff
	this.dQ = function() {
		if (!this.dqmode) {
			while (!this.storage.isEmpty()) {
				this.storageHelp.push(this.storage.pop());
			}
			this.dqmode = true;
		}
		return this.storageHelp.pop();
	}
}

var bob = new TwoStacQ();
console.log(bob.isEmpty());
bob.nQ(42).nQ(3.14).nQ(2.17).nQ(56);
console.log(bob.isEmpty());
bob.display();
console.log(bob.dQ());
bob.display();
