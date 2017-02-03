// 0. Hi! Hope life is good :D
// 1. Context!
//     - pre:  Trees!
//     - now:  Hashes!
//     - post: Trees!
// 2. Today!
//   Hashes!
//     wait...like hasmapps? Ive heard that before...
//     its that thing with objects for instant lookup right?
//     WHY!
//       instant lookup
//     WHat?how?
//       hash table
//         - structure to store hashed things
//         - it doesn't have to SEARCH
//       hash function:
//         - hashes things :D
//         - lol ok what is hashing?
//           - turning a key into a location!
//         - ideally hashes to distribute things evenly
//       okay, so things are hashed inot a spot, what if same spot?
//       HASH COLLISION! BOOM!
//         - 2 keys get hashed/mapped to same value
//         what do?
//         - we''ll get there...
//       Vocabulary Words!
//         - Load Factor: ratio of number of contained inofrmations and buckets
//           - high is slow, too low is wasteful, hence importance of sizing
//         - Open Addressing: looking around table for a place to put dat
//           - Linear Probing: interval in probing is fixed
//           - Quadratic Probing: interval in probing increases
//           - double hasing: interval in probing is fixed, but computed by another hashing
//         - Separate Chaining: make each index its own list of entris
//         - Map: keys and values
//         - unordered/ordered: whether sequence is preserved when hashing, makes realtional operations HARD
//         -
//
//     Okay, so i kinda get it...how start?
//     Hash Tabl class!
//       - do teh usual!
//       - empty, add, size, remove, front, contains
//       - dat hash function doe!
// 3. Today:
//   - add
//   - isEmpty
//   - find key
//   - remove
//   - grow
//   - setsize
//   - selectkeys
//   - addmap
