/*Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original*/


const BOTAOSELETOR = document.getElementById('mode-selector');
const TITULOPAGE = document.getElementById('page-title');
const CORPO = document.getElementsByTagName('body')[0];
const RODAPE = document.getElementsByTagName('footer')[0];

BOTAOSELETOR.addEventListener('click', changeMode);
const DARKMODECLASS = 'dark-mode'

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    TITULOPAGE.classList.toggle(DARKMODECLASS);
    BOTAOSELETOR.classList.toggle(DARKMODECLASS);
    RODAPE.classList.toggle(DARKMODECLASS);
    CORPO.classList.toggle(DARKMODECLASS);
}

function changeText(){
    const LIGHTMODE = 'Light Mode';
    const DARKMODE = 'Dark Mode';

    if(CORPO.classList.contains(DARKMODECLASS)){
        BOTAOSELETOR.innerHTML = LIGHTMODE;
        TITULOPAGE.innerHTML = DARKMODE + ' ON';
        return;
    }
    
    BOTAOSELETOR.innerHTML = DARKMODE;
    TITULOPAGE.innerHTML = LIGHTMODE + ' ON'
}