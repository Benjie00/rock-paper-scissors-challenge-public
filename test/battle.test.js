const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const Battle = require("../src/battle");

chai.use(chaiHttp);

describe('Testing game logic', () => {

    it('should set up a new player name', () => {
        const battle = new Battle;
        const name = "name";
        battle.playerNameSetUp(name);
        expect(battle.player.name).to.be.equals(name);
        expect(battle.player.name).to.be.a('string');
    });

    it('should set up a new weapon', () => {
  
        const battle = new Battle;
        const weapon = "testWeapon";
        battle.playerWeaponSetUp(weapon);
        expect(battle.player.weapon).to.be.equals(weapon);
        expect(battle.player.weapon).to.be.a('string');
    });

    it('should choose a random weapon for the computer', () => {
        const battle = new Battle;
        battle.computerTurn();
        expect(battle.computer).to.be.oneOf(['Rock', 'Paper', 'Scissors']);
        expect(battle.computer).to.be.a('string');
    });

    it('should return the result of the game is a draw', () => {
        const battle = new Battle;
        battle.computer = 'Paper';
        battle.player.weapon = 'Paper';
        const result = battle.result();
        expect(result).to.be.equal("It's a tie");
        expect(result).to.be.a('string');
    });
    
    it('should count the win-streak', () => {
        const battle = new Battle;
        battle.computer = 'Paper';
        battle.player.weapon = 'Scissors';
        battle.winStreak();
        battle.winStreak();
        
        expect(battle.streak).to.be.equal(2);
        expect(battle.streak).to.be.a('number');
    });
})
 



