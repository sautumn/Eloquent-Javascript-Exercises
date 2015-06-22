function countBs(s,letter){
	s = s.toString();
	letter = letter || 'B';
	var count = 0;
	for (var i=0; i<s.length; i++){
		if (s.charAt(i) === letter)
			count++;
	}
	return count;
}

function countChar(s,letter){
	return countBs(s,letter);

}

console.log(countBs('Bad big you B lefsut b sb B'));
console.log(countChar('thid id id idb ji ig','i'));