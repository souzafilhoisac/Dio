/*Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.*/

class ContaBancaria {
    constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
    }
//sempre usar o underline '_' quando for utilizar o getter e o setter
    get saldo(){
        return this._saldo;
    }

    set saldo(val){
        this._saldo = val;
    }

    sacar(val){
        if(val > this._saldo){
            return `Saldo insuficiente`;
        }
        console.log('Realizando saque...');
        this._saldo -= val;
        return `Seu saldo agora é de ${this._saldo}.`;
    }

    depositar(val){
        console.log('Realizando depósito...');
        this._saldo += val;
        return `Seu saldo agora é de ${this._saldo}.`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(val){
        this._cartaoCredito = val;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
        constructor(agencia, numero){
            super(agencia, numero);
            this.tipo = 'universitária';
        }

    sacar(val){
        if(val > 500){
            return `Valor excede o limite diário.`
        }
        console.log('Realizando saque...');
        this._saldo -= val;
        return `Seu saldo agora é de ${this._saldo}.`;
    }
}