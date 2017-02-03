var Stack = require('./ArrStack.js');
var Queue = require('./ArrQueue.js');

// Assumes Q for storage
function sortStack(stack){
	// checks to make stuff easy
	if(stack.size() < 2){
		console.log('baby stack passed in');
		return stack;
	}
	// empty stack into storage &&
	// extract minimum as gate <-- idea: build a sorted array using slice? Would that just be a stack/q? so no lol
	var gate = stack.top();
	var storage = new Queue();
	// while runs stack.size number of times
	while(stack.size() !== 0){
		// check for min
		gate = gate > stack.top() ? stack.top() : gate;
		// move from stack to storage
		storage.nQ(stack.pop());
	}
	// Cycle through Q, stacking values that pass gate
	// nQing values that dont
	// Save time and prep NEXT_GATE_VALUE
	var next_gate = storage.front();
	// this while loop runs for potentially stack.size times 
	while(!storage.isEmpty()){
		var h = storage.size();
		// this while only runs h times
		while(h>0){
			// check if stack-able
			if(storage.front() <= gate){
				stack.push(storage.dQ());
			} else {
				// nQ + chekc for next gate-ness
				next_gate = next_gate < storage.front() ? storage.front() : next_gate;
				storage.nQ(storage.dQ());
			}
			h--;
		}
		// exits after emptying storage h number of times
	}
	// exits if storage isEmpty()!
	return stack;
}