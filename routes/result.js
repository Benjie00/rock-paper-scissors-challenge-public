const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const battle = req.app.locals.battle;
  const weapon = req.body.choice; 
  battle.playerWeaponSetUp(weapon)
  battle.computerTurn();
  const name = battle.player.name;
  const result = battle.result(); 
  const computerChoice = battle.computer;
  const streak = battle.winStreak();
  
  res.render('result', {
    name: name,
    weapon: weapon,
    computerChoice: computerChoice,
    streak: streak,
    result: result
  });
})

module.exports = router;
