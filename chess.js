var chess = new Chess();

while (!chess.game_over()) {
    console.log('position: ' + chess.fen());
    var moves = chess.moves();
    var move = moves[Math.floor(Math.random() * moves.length)];
    chess.move(move);
    console.log('move: ' + move);
}