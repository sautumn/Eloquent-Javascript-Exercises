function chessboard(n){
	var board='';

	for (var x=0; x <= n; x++){
		for (var y=0; y <= n; y++){
			if ((x+y)%2===0)
				board += ' ';
			else
				board += '#';
		}
		board += '\n';
	}
	console.log(board);
}



chessboard(8);
console.log("-----------------------");
chessboard(3);

var size = 8;

var board = "";

for (var y = 0; y <= size; y++) {
  for (var x = 0; x <= size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);