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
    constructor(agencia, numero, tipo, saldo){
    this.agencia = agencia;
    this.agencia = numero;
    this.agencia = tipo;
    this.agencia = saldo;
    }
    get saldo(){
        return this._saldo;
    }

    set saldo(val){
        this._saldo = val;
    }

    sacar(){

    }
    depositar(){

    }
}

class ContaCorrente extends ContaBancaria {
    constructor(type = 'conta corrente', cartaoCredito){
        this.type = type;
        super('ContaCorrente');
    }
    
    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(val){
        this._cartaoCredito = val;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(){
        super('ContaPoupanca');
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(){
        super('ContaUniversitaria');
    }

    sacar(val){
        if(val < 500){
            return `Saque realizado com sucesso.`
        }
    }
}