
// Given a DNA strand of 'ACGGGTAAG' 
// return an mRNA strand of 'UGCCCAUUC' which when translated 
// returns is Cys, Pro, Phe
// Transcription rules:
// A->U, T->A, G->C, C->G

// Translation rules:
// -See Codon Table :)

var trxd = {
	'UUU': 'phe',
	'UUC': 'phe',
	'UUA': 'leu',
	'UUG': 'leu',
	'UCU': 'ser',
	'UCC': 'ser',
	'UCA': 'ser',
	'UCG': 'ser',
	'UAU': 'tyr',
	'UAC': 'tyr',
	'UAA': 'stop',
	'UAG': 'stop',
	'UGU': 'cys',
	'UGC': 'cys',
	'UGA': 'stop',
	'UGG': 'trp',

	'CUU': 'leu',
	'CUC': 'leu',
	'CUA': 'leu',
	'CUG': 'leu',
	'CUC': 'pro',
	'CCC': 'pro',
	'CCA': 'pro',
	'CCG': 'pro',
	'CAU': 'his',
	'CAC': 'his', 
	'CAA': 'gln', 
	'CAG': 'gln', 
	'CGU': 'arg', 
	'CGC': 'arg', 
	'CGA': 'arg', 
	'CGG': 'arg',

	'AUU': 'ile', 
	'AUC': 'ile', 
	'AUA': 'ile', 
	'AUG': 'met', 
	'ACU': 'pro', 
	'ACC': 'pro', 
	'ACA': 'pro', 
	'ACG': 'pro',
	'AAU': 'his',
	'AAC': 'his', 
	'AAA': 'gln', 
	'AAG': 'gln', 
	'AGU': 'arg', 
	'AGC': 'arg', 
	'AGA': 'arg', 
	'AGG': 'arg', 

	'GUU': 'val',
	'GUC': 'val',
	'GUA': 'val',
	'GUG': 'val',
	'GCU': 'ala', 
	'GCC': 'ala', 
	'GCA': 'ala', 
	'GCG': 'ala', 
	'GAU': 'asp', 
	'GAC': 'asp', 
	'GAA': 'glu', 
	'GAG': 'glu',
	'GGU': 'gly', 
	'GGC': 'gly', 
	'GGA': 'gly', 
	'GGG': 'gly',

}

function trans(dna){
	var dd = {
		'A': 'U',
		'T': 'A',
		'G': 'C',
		'C': 'G'
	}
	var rna = '';
	// transcribe
	for(var i = 0; i <dna.length; i++){
		ran += dd[dna[i]];
	}
}











// var codondict = {
// 	'stop': 'stop';
// 	leu
// 	phe
// 	met 
// 	cys 
// 	ala 
// 	gly 
// 	pro 
// 	thr 
// 	ser 
// 	tyr 
// 	try 
// 	gln 
// 	asp 
// 	his 
// 	glu 
// 	asp
// 	lys 
// 	arg
// }