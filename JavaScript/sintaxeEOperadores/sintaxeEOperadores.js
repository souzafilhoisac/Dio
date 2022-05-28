function numeros(num1,num2) {
    if (!num1 || !num2) {
        return 'Defina 2 números reais e diferente de 0'
    } else {
        let comparacao = num1 === num2 ? `são iguais` : `não são iguais`;
        let soma = num1 + num2;
        let maiorQue10 = soma > 10 ? `maior que 10` : `menor que 10`;
        let menorQue20 = soma < 20 ? `menor que 20` : `maior que 20`;
        return `Os números ${num1} e ${num2} ${comparacao}. Sua soma é ${soma}, que é ${maiorQue10} e ${menorQue20}.`;
    }
    
}

numeros(16)