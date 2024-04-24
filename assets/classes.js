class Char {
    constructor(name) {
        this.name = name;
        this.life = 0;
        this.maxLife = 10;
        this.attack = 1; 
        this.def = 1;
    }
}

class Mage extends Char {
    constructor(name) {
        super(name);
        this.life = 8;
        this.maxLife = this.life;
        this.attack = 12; 
        this.def = 6;
    }
}

class Warrior extends Char {
    constructor(name) {
        super(name);
        this.life = 10;
        this.maxLife = this.life;
        this.attack = 8;
        this.def = 10;
    }
}

class Wolf extends Char {
    constructor() {
        super('Wolf');
        this.life = 10;
        this.maxLife = this.life;
        this.attack = 6; 
        this.def = 7;
    }
}

class Bear extends Char {
    constructor() {
        super('Bear');
        this.life = 15;
        this.maxLife = this.life;
        this.attack = 10; 
        this.def = 9;
    }
}

class Stage extends Char {
    constructor(player, enemy, playerEl, enemyEl) {
        super(); // chama o construtor da classe pai
        this.player = player;
        this.enemy = enemy;
        this.playerEl = playerEl;
        this.enemyEl = enemyEl;        
    }

    startGame() {
        this.updateGame();
        let playerButton = document.querySelector('.personAtackButton');
        let enemyButton = document.querySelector('.enemyAtackButton')


        playerButton.addEventListener('click', ()=> this.doAttack(this.player, this.enemy))
        enemyButton.addEventListener('click', ()=>  this.doAttack(this.enemy, this.player))
        
    }

    updateGame() {
        // player: 
        let playerPCT = (this.player.life / this.player.maxLife) * 100 ;  
        this.playerEl.querySelector('.lifeBar').style.width = `${playerPCT}%`;
        this.playerEl.querySelector('#character').innerHTML = `${this.player.name} - ${playerPCT}HP`;


        // enemy: 
        
        let enemyPCT = (this.enemy.life / this.enemy.maxLife) * 100;  
        this.enemyEl.querySelector('.lifeBar').style.width = `${enemyPCT}%`;
        this.enemyEl.querySelector('#boss').innerHTML = `${this.enemy.name} - ${enemyPCT}HP`;
    }


    doAttack(attacking, attacked){
        console.log(`O ${attacking.name} atacou o ${attacked.name}`)


        this.updateGame();
    }
    
}