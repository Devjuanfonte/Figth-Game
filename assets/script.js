let mage = new Mage('Montro');
let wolf = new Wolf();

const stage = new Stage(mage, wolf, document.querySelector('#personArea'), document.querySelector('#bossArea'));

stage.startGame();