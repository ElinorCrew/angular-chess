var chess = new ch.Chess();

while (!chess.game_over()) {
    util.puts('position: ' + chess.fen());
    var moves = chess.moves();
    var move = moves[Math.floor(Math.random() * moves.length)];
    chess.move(move);
    util.puts('move: ' + move);
}