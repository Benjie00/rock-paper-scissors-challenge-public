const express = require('express');
const router = express.Router();
const Battle = require('../src/battle.js');

router.post('/', (req, res) => {
  const battle = new Battle();
  const name = req.body.player;
  battle.playerNameSetUp(name);
  req.app.locals.battle = battle; 
  res.redirect('/game'); 
})

router.get('/', (req, res) => {
  const player = req.app.locals.battle.player;

  res.render('game', {
    name: player.name  
  });
})

module.exports = router;
