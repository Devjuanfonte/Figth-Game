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
        this.life = 10;
        this.maxLife = this.life;
        this.attack = 10; 
        this.def = 10;
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
        this.attack = 10; 
        this.def = 10;
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
        this.playerEl.querySelector('#character').innerHTML = `${this.player.name} - ${playerPCT.toFixed(2)}HP`;


        // enemy: 
        
        let enemyPCT = (this.enemy.life / this.enemy.maxLife) * 100;  
        this.enemyEl.querySelector('.lifeBar').style.width = `${enemyPCT}%`;
        this.enemyEl.querySelector('#boss').innerHTML = `${this.enemy.name} - ${enemyPCT.toFixed(2)}HP`;
    }


    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            alert('O personagem já está morto')
            return;
        }
    
        let randomAttack = Math.random() * 2;
        let randomDefense = Math.random() * 2;
    
        let actualAttack = attacking.attack * randomAttack;
        let actualDefense = attacked.def * randomDefense;
    
        console.log('O ataque causou ' + (actualAttack - actualDefense) + ' de dano!');
    
        if (actualAttack > actualDefense) {
            let damage = Math.max(1, Math.floor(actualAttack - actualDefense)); // Garante que o dano mínimo seja 1
            attacked.life -= damage;
        } else {
            console.log('vasco da gama');
        }
    
        this.updateGame();
    }
    
    
}