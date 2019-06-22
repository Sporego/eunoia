var TurnGame = (function () {
    var instance;
    var initiate = function (heroName) {
      //YOU
      var hero = {
        name: heroName,
        lev: 1,
        maxHp: 100,
        hp: 100,
        xp: 0,
        att: 10
      };
      //MONSTERS
      var monsters = [{
        name: 'SLIME',
        hp: 25 + hero.lev * 3,
        att: 10 + hero.lev,
        xp: 10 + hero.lev,
      }, {
        name: 'SKELETON',
        hp: 50 + hero.lev * 5,
        att: 15 + hero.lev * 2,
        xp: 20 + hero.lev * 2,
      }, {
        name: 'Barlog [BOSS]',
        hp: 100 + hero.lev * 10,
        att: 25 + hero.lev * 5,
        xp: 50 + hero.lev * 5,
      }];
      var monster = null;
      var turn = true;
      return {
        //hero's stats
        showLevel: function () {
          document.getElementById('hero-level').innerHTML = hero.lev + 'lev';
          return this;
        },
        showXp: function () {
          var self = this;
          if (hero.xp > 15 * hero.lev) {
            hero.xp -= 15 * hero.lev;
            hero.maxHp += 10;
            hero.hp = hero.maxHp;
            hero.att += hero.lev;
            hero.lev++;
            window.setTimeout(function() {
              self.setMessage('Level Up!');
            }, 1000);
          }
          document.getElementById('hero-xp').innerHTML = 'XP: ' + hero.xp + '/' + 15 * hero.lev;
          document.getElementById('hero-att').innerHTML = 'ATT: ' + hero.att;
          return this.showLevel().showHp();
        },
        showHp: function () {
          if (hero.hp < 0) {
            return this.gameOver();
          }
          document.getElementById('hero-hp').innerHTML = 'HP: ' + hero.hp + '/' + hero.maxHp;
          
          return this;
        },
        toggleMenu: function () {
          document.getElementById('hero-name').innerHTML = hero.name;
          document.getElementById('start-screen').style.display = 'none';
          if (document.getElementById('game-menu').style.display === 'block') {
            document.getElementById('game-menu').style.display = 'none';
            document.getElementById('battle-menu').style.display = 'block';
            document.getElementById('battle-input').focus();
          } else {
            document.getElementById('game-menu').style.display = 'block';
            document.getElementById('battle-menu').style.display = 'none';
            document.getElementById('menu-input').focus();
          }
          return this;
        },
        setMessage: function (msg) {
          document.getElementById('message').innerHTML = msg;
          return this;
        },
        generateMonster: function () {
          monster = JSON.parse(JSON.stringify(monsters[Math.floor(Math.random() * monsters.length)]));
          document.getElementById('monster-name').innerHTML = monster.name;
          document.getElementById('monster-hp').innerHTML = 'HP: ' + monster.hp;
          document.getElementById('monster-att').innerHTML = 'ATT: ' + monster.att;
          this.setMessage(monster.name + ' is attacking you');
          return this.toggleMenu();
        },
        menuInput: function (input) {
          if (input === '1') {
            return this.generateMonster();
          } else if (input === '2') {
            hero.hp = hero.maxHp;
            return this.showHp().setMessage(' recovered hp!');
          } else if (input === '3') {
            return this.exit();
          } else {
            alert('Wrong Command');
          }
        },
        //battle menu
        battleInput: function (input) {
          if (input === '1') {
            return this.attackMonster();
          } else if (input === '2') {
            if (hero.hp + hero.lev * 20 < hero.maxHp) {
              hero.hp += hero.lev * 20;
            } else {
              hero.hp = hero.maxHp;
            }
            return this.showHp().setMessage('Recovered Hp!').nextTurn();
          } else if (input === '3') {
            return this.clearMonster().setMessage('Ran away!');
          } else {
            alert('Wrong Command');
          }
        },
        attackMonster: function () {
          monster.hp -= hero.att;
          document.getElementById('monster-hp').innerHTML = 'HP: ' + monster.hp;
          if (monster.hp > 0) {
            return this.setMessage(hero.att + ' of damage you have attacked.').nextTurn();
          }
          return this.win();
        },
        attackHero: function () {
          hero.hp -= monster.att;
          return this.showHp();
        },
        nextTurn: function () {
          var self = this;
          turn = !turn;
          document.getElementById('battle-button').disabled = true;
          if (!turn) {
            window.setTimeout(function () {
              self.setMessage(monster.name + ' s turn');
              window.setTimeout(function () {
                document.getElementById('battle-button').disabled = false;
                if (self.attackHero()) {
                  self.setMessage(monster.att + ' of damage is attacked!');
                  window.setTimeout(function () {
                    self.setMessage(hero.name + ' s turn now');
                  }, 1000);
                }
              }, 1000);
            }, 1000);
            return this.nextTurn();
          }
          return this;
        },
        win: function () {
          this.setMessage(monster.name + ' You have gained ' + monster.xp + ' of EXP!');
          hero.xp += monster.xp;
          return this.clearMonster().showXp();
        },
        clearMonster: function () {
          monster = null;
          document.getElementById('monster-name').innerHTML = '';
          document.getElementById('monster-hp').innerHTML = '';
          document.getElementById('monster-att').innerHTML = '';
          return this.toggleMenu();
        },
        gameOver: function () {
          document.getElementById('screen').innerHTML = hero.name + ' has died on Level' + hero.lev + ' Reload this page to restart your journey!';
          return false;
        },
        exit: function (input) {
          document.getElementById('screen').innerHTML = 'Reload this page to restart your journey!';
        }
      };
    };
    return {
      getInstance: function (name) {
        if (!instance) {
          instance = initiate(name);
        }
        return instance;
      }
    };
  })();
  document.getElementById('start-screen').onsubmit = function (e) {
    var name = document.getElementById('name-input').value;
    e.preventDefault();
    if (name && name.trim() && confirm(name + 'is correct?')) {
      TurnGame.getInstance(name).showXp().toggleMenu();
    } else {
      alert('What is your name?');
    }
  };
  document.getElementById('game-menu').onsubmit = function (e) {
    var input = document.getElementById('menu-input');
    var option = input.value;
    e.preventDefault();
    input.value = '';
    TurnGame.getInstance().menuInput(option);
  };
  document.getElementById('battle-menu').onsubmit = function (e) {
    var input = document.getElementById('battle-input');
    var option = input.value;
    e.preventDefault();
    input.value = '';
    TurnGame.getInstance().battleInput(option);
  };
