function chessboard(n){
	bool=true;
	board=[];
	for (i=0; i <= n; i++){
		board.push('#');
	}
	while (n >= 0){
		if (bool===true){
			console.log(board.join(' '));
		}
		else{
			console.log(" " + board.join(' '));
		}
		bool= !bool;
		n -= 1;
	}
};

chessboard(8);
console.log("-----------------------");
chessboard(3);