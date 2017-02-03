// 0: Howdy! nice Wednesday?!
// 1: Context!
// 	a. Stacks and Queues
// 	b. Yesterday was DeQue, a continuation of implementing different classes with specific uses
// 	c. Only one more class and fun algorithm to do
// 2: yesterday:
//	a. dequeue
// 3: Today!
// 	a. Circular Queue
// 		- why!!!!
			// -space
// 		- what!!!
			// -array
// 4: MissionTime:
// 	a. implement a circular queue
// 		- enqueue, dequeue, grow, front, back, isempty, isfull, size
// 	b. Fo' Funzies:
//    - Sorting && Partitioning
		// -Sort a stack using a queue! or a deque or a cirqueue or stack or a 2stackq

var CQ = require('./../online2/CirQue.js').CirQue;

var x = new CQ(4);
x.show().nQ('bob').nQ('ross').nQ('paints').nQ('gud').show();
x.dQ().show().dQ().show().grow().show();
x.nQ('bobob').show().nQ('borab').nQ(5).nQ(77).show();
