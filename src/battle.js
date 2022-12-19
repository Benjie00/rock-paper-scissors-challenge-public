const Player = require('./player.js');

class Battle {
  player = new Player;
  computer;
  streak = 0;
 
  playerNameSetUp(name) {
    this.player.setName(name);
  }

  playerWeaponSetUp(weapon) {
    this.player.setWeapon(weapon);
  }
  
  computerTurn() {
    const r = Math.floor(Math.random() * 3) + 1;

    switch (r) {
      case 1:
        this.computer = "Rock";
        break;
      case 2:
        this.computer = "Paper";
        break;
      case 3:
        this.computer = "Scissors";
        break;
    }
    return this.computer;
  }


  result() {
    if (this.player.weapon === this.computer) {
      return "It's a tie";
    }
    if (this.computer === "Rock") {
      return (this.player.weapon === "Paper") ? "You Win!" : "You Lose";
    }
    if (this.computer === "Paper") {
      return (this.player.weapon === "Scissors") ? "You Win!" : "You Lose";
    }
    if (this.computer === "Scissors") {
      return (this.player.weapon === "Rock") ? "You Win!" : "You Lose";
    }
  }

  winStreak() {
    if (this.result() === "You Win!") {
     return this.streak += 1;
    }
    else {
      return this.streak = 0;
    }
  }
  }


module.exports = Battle;