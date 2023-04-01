const ulC = document.querySelector('.player1 span');
const ulR = document.querySelector('.player2 span');
let number1 = document.querySelector('.number1');
let number2 = document.querySelector('.number2');

alert("Quem fizer 20 repetições primeiro, ganha!");
alert("Pressione a TECLA A para jogar com o Azul e a TECLA L para jogar com o Vermelho!");

let name1 = prompt("Digite o nome do primeiro jogador:");
let name2 = prompt("Digite o nome do segundo jogador:");

class Person{
    //Variáveis
    series = 0;
    score = 0;

    //Construtor
    constructor(name){
        this.name = name;
    }

    winMatch(p){
        alert(`Parabéns ${this.name}, você ganhou a rodada!`);
        this.score++;
        p.innerHTML = `${this.score}`;
        p1.series = 0;
        p2.series = 0;
        ulC.innerHTML = "";
        ulR.innerHTML = "";
    }

    malhar(log, placar){
        if(this.series == 20){
            this.winMatch(placar);
        }else{
            this.series++;
            let newP = document.createElement('p');
            newP.innerHTML = `${this.name} já fez ${this.series} repetições na academia!`;
            log.prepend(newP);
        }
    }
}

let p1 = new Person(name1);
let p2 = new Person(name2);
document.querySelector('.player1 h3').innerHTML = p1.name;
document.querySelector('.player2 h3').innerHTML = p2.name;

document.addEventListener('keyup', teclar = (e) => {
    switch(e.key){
        case 'a':
            p1.malhar(ulC, number1);
            break;
        case 'l':
            p2.malhar(ulR, number2);
            break;
        case 'Enter':
            alert('Pressione a TECLA A para jogar com o Azul e a TECLA L para jogar com o Vermelho!');
    }
});