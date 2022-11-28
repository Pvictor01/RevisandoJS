const nomePersonagemA = prompt('Digite o nome do primeiro personagem');
const poderAtaqueA = prompt('Digite a quantidade de poder de ataque do primeiro personagem');

const nomePersonagemB = prompt('Digite o nome do segundo personagem');
let pontosVidaB = prompt('Digite a quantidade de pontos de vida do segundo personagem');
const poderDefesaB = prompt('Digite a quantidade do poder de defesa do segundo personagem');
const escudoPersonB = confirm('O segundo personage possui um escudo?');

const poder_ataque_a = parseInt(poderAtaqueA);
const pontos_vida_b = parseInt(pontosVidaB);
const poder_defesa_b = parseInt(poderDefesaB);

let damage = 0;

if(poder_ataque_a > poder_defesa_b && escudoPersonB == false) {
    damage = poder_ataque_a - poder_defesa_b;
} else if(poder_ataque_a > poder_defesa_b && escudoPersonB == true) {
    damage = (poder_ataque_a - poder_defesa_b) / 2;
} else if (poder_ataque_a <= poder_defesa_b) {
    damage = 0;
};

alert(`***DADOS INICIAIS DOS PERSONAGENS*** 
    \nNome personagem A: ${nomePersonagemA} \nPoder personagem A: ${poder_ataque_a}
    \nNome personagem B: ${nomePersonagemB} \nPontos de vida B: ${pontos_vida_b}
    \nPoder defesa B: ${poder_defesa_b}
    \nPossui escudo B: ${escudoPersonB}
    ***DADOS DA LUTA***
    \nO dano causado ao personagem B foi de: ${damage}
    \nPontos de vida do Personagem B: ${pontos_vida_b - damage}
`);