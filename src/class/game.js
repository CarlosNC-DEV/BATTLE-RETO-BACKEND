class Game {
  constructor(code) {
    this.code = code;
    this.players = [];
  }

  addPlayer(player) {
    if (this.players.length < 7) {
      this.players.push(player);
      return true;
    } else {
      return false;
    }
  }
}
