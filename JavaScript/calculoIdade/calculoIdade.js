/*Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!


o call define qual objeto você quer chamar quanto há propriedades iguais em diferentes objetos.
é possível usar o call também como um parâmetro "a mais" na função, fazendo com que essa função returne a chamada do call + sua funcionalidade ex.:

const MYOBJ = {
    num1: 6,
    num2: 7,
};

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(MYOBJ, 3, 5)

temos também o apply, que tem praticamente a mesma funcionalidade, só que a função fica separada entre chaves[] na sua chamada ex.:

soma.apply(MYOBJ, [3, 5])

*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const PESSOAS = {
    nome: 'FULANO',
    idade: 23,
};

const ANIMAIS = {
    nome: 'LILY',
    idade: 3,
};


console.log(calculaIdade.apply(PESSOAS, [7]))
console.log(calculaIdade.call(ANIMAIS, 7))





/*console.log(PESSOAS.nomeCompleto())
console.log(PESSOAS.getIdade())
//console.log(calculaIdade(30))

{
        nome:"CICLANO",
        idade: 32,
    } */

