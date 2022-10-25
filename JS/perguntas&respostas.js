const select = el => document.querySelector(el);

// Containers
const cntIndex = select('.container-index');
const cnt01 = select('.container-page01');
const cnt02 = select('.container-page02');
const cnt03 = select('.container-page03');
const cnt04 = select('.container-page04');
const cnt05 = select('.container-page05');
const cnt06 = select('.container-page06');
const cnt07 = select('.container-page07');

// respostas
let resp01 = select('.acertos-07 .n1 p');
let resp02 = select('.acertos-07 .n2 p');
let resp03 = select('.acertos-07 .n3 p');
let resp04 = select('.acertos-07 .n4 p');
let resp05 = select('.acertos-07 .n5 p');
let resp06 = select('.acertos-07 .n6 p');


select('.container-page01').style.display = 'none';
select('.container-page02').style.display = 'none';
select('.container-page03').style.display = 'none';
select('.container-page04').style.display = 'none';
select('.container-page05').style.display = 'none';
select('.container-page06').style.display = 'none';
select('.container-page07').style.display = 'none';
select(".area-response-07 .winner").style.display = 'none';
select(".area-response-07 .lost").style.display = 'none';


// Botões
const buttonIndex = select('.container-index .btn-index');
const buttonRegras = select(".area-jogo .btn-regras");
const button01 = select('.container-page01 .btn-01');
const button02 = select('.container-page02 .btn-02');
const button03 = select('.container-page03 .btn-03');
const button04 = select('.container-page04 .btn-04');
const button05 = select('.container-page05 .btn-05');
const button06 = select('.container-page06 .btn-06');
const button07 = select('.container-page07 .btn-07');


// Area de eventos
// Botão index
buttonIndex.addEventListener('click', () => {
    
    select('.container-page01 .area-one').style.backgroundColor = '#fff';
    
    cntIndex.style.display = 'none';
    cnt01.style.display = 'flex';
});


// regras
buttonRegras.addEventListener('click', () => {
    const text = `
        Regras do jogo:
        --------------
        Para ser vencedor é necessario
        ter a pontuação igual a 300 pontos ou acima.
        A cada erro você perde 100 pontos, e a cada acerto,
        você ganha 100 pontos.
    `;
    alert(text);
});


// Botão pagina 01
let count = [];
let counts = 0;

button01.addEventListener('click', () => {

    let pergunta01 = select('.answer-one #resp');
   
    if(pergunta01.value === "verdadeiro") {
        localStorage.setItem("resposta1", "acertou");
        resp01.innerHTML = localStorage.getItem("resposta1");
        count.push(localStorage.resposta1);
    }
    if(pergunta01.value !== "verdadeiro") {
        localStorage.setItem("resposta1", "errou");
        resp01.innerHTML = localStorage.getItem("resposta1");
        count.push(localStorage.resposta1);
    }

    select('.container-page02 .area-one-02').style.backgroundColor = '#fff';
    
    cnt01.style.display = 'none';
    cnt02.style.display = 'flex';
});


// Botão pagina 02
button02.addEventListener('click', () => {

    let pergunta02 = select('.answer-one-02 #resp-02');

    if(pergunta02.value === "verdadeiro") {
        localStorage.setItem("resposta2", "acertou");
        resp02.innerHTML = localStorage.getItem("resposta2");
        count.push(localStorage.resposta2);
    }
    if(pergunta02.value !== "verdadeiro") {
        localStorage.setItem("resposta2", "errou");
        resp02.innerHTML = localStorage.getItem("resposta2");
        count.push(localStorage.resposta2);
    }
    
    select('.container-page03 .area-one-03').style.backgroundColor = '#fff';
    
    cnt02.style.display = 'none';
    cnt03.style.display = 'flex';

});

// Botão pagina 03
button03.addEventListener('click', () => {

    let pergunta03 = select('.area-answer-03 #resp-03');

    if(pergunta03.value === "sabedoria") {
        localStorage.setItem("resposta3", "acertou");
        resp03.innerHTML = localStorage.getItem("resposta3");
        count.push(localStorage.resposta3);
    }
    if(pergunta03.value !== "sabedoria") {
        localStorage.setItem("resposta3", "errou");
        resp03.innerHTML = localStorage.getItem("resposta3");
        count.push(localStorage.resposta3);
 
    }
    
    select('.container-page04 .area-one-04').style.backgroundColor = '#fff';
    
    cnt03.style.display = 'none';
    cnt04.style.display = 'flex';
});


// Botão pagina 04
button04.addEventListener('click', () => {

    let pergunta04 = select('.area-answer-04 #resp-04');

    if(pergunta04.value === "zeus") {
        localStorage.setItem("resposta4", "acertou");
        resp04.innerHTML = localStorage.getItem("resposta4");
        count.push(localStorage.resposta4);
    }
    if(pergunta04.value !== "zeus") {
        localStorage.setItem("resposta4", "errou");
        resp04.innerHTML = localStorage.getItem("resposta4");
        count.push(localStorage.resposta4);
 
    }
    
    select('.container-page05 .area-one-05').style.backgroundColor = '#fff';
    
    cnt04.style.display = 'none';
    cnt05.style.display = 'flex';
});


// Botão pagina 05
button05.addEventListener('click', () => {

    let pergunta05 = select('.area-answer-05 #resp-05');

    if(pergunta05.value === "zeus") {
        localStorage.setItem("resposta5", "acertou");
        resp05.innerHTML = localStorage.getItem("resposta5");
        count.push(localStorage.resposta5);
    }
    if(pergunta05.value !== "zeus") {
        localStorage.setItem("resposta5", "errou");
        resp05.innerHTML = localStorage.getItem("resposta5");
        count.push(localStorage.resposta5);
    }
    
    select('.container-page06 .area-one-06').style.backgroundColor = '#fff';
    
    cnt05.style.display = 'none';
    cnt06.style.display = 'flex';
});


// Botão pagina 06
button06.addEventListener('click', () => {
    
    let pergunta06 = select('.area-answer-06 #resp-06');
    
    if(pergunta06.value === "oraculo") {
        localStorage.setItem("resposta6", "acertou");
        resp06.innerHTML = localStorage.getItem("resposta6");
        count.push(localStorage.resposta6);
    }
    if(pergunta06.value !== "oraculo") {
        localStorage.setItem("resposta6", "errou");
        resp06.innerHTML = localStorage.getItem("resposta6");
        count.push(localStorage.resposta6);
    }

    
    cnt06.style.display = 'none';
    cnt07.style.display = 'flex';

    
    let acerto = count.filter(items => {
        if(items === "acertou") {
            return true;
        }
    });

    let erro = count.filter(items => {
        if(items === "errou") {
            return true;
        }
    });
    
    let countAcerto = acerto.length * 100;
    let countErro = erro.length * 100;
    let result = countAcerto - countErro;

    select(".area-response-07 .pontuacao").innerHTML = `Pontuação Geral:__________ ${result < 50 ? 0 : result}`;
    select(".area-response-07 .pontuacao").style.color = "#CD853F";
  
    if(result >= 300) {
        select(".area-response-07 .winner").style.display = 'flex';
        select(".area-response-07 .winner").innerHTML = "Você ganhou!"
        select(".area-response-07 .winner").style.color = "#7CFC00";
    }else {
        select(".area-response-07 .lost").style.display = 'flex';
        select(".area-response-07 .lost").innerHTML = "Você perdeu!"
        select(".area-response-07 .lost").style.color = "#D2691E";

    }

    select(".outra-08").innerHTML = `Você acertou:__________ ${acerto.length}`;
    select(".outra-07").innerHTML = `Você errou:__________ ${erro.length}`;
    
    select(".outra-07").style.color = "#A0522D";
    select(".outra-08").style.color = "#3CB371";
    
});


 

// Botão pagina 07
button07.addEventListener('click', () => {
    
    cnt07.style.display = 'none';
    cntIndex.style.display = 'flex';

    localStorage.removeItem("resposta1");
    localStorage.removeItem("resposta2");
    localStorage.removeItem("resposta3");
    localStorage.removeItem("resposta4");
    localStorage.removeItem("resposta5");
    localStorage.removeItem("resposta6");

    window.location.reload();
});











// let url = window.location.href = "page02.html";
// window.open(url, '_blank');