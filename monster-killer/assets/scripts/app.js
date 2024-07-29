const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACT_VALUE = 14;
const HEAL_VALUE = 20;

let choseMaxLife = 100;
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;

adjustHealthBars(choseMaxLife);

function endRound (){
    const playerDamage = dealPlayerDamage(MONSTER_ATTACT_VALUE);
    currentPlayerHealth -= playerDamage;
  
    if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
      alert("You won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
      alert("You lost!");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
      alert("You have a draw!");
    }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster("ATTACK");
}
function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}
function healPlayerHandler (){
    let healValue;
    if(currentPlayerHealth >= choseMaxLife - HEAL_VALUE){
        alert("You can't heal to more than your max initial health!");
        healValue = choseMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
