let texto = document.getElementById('txts')
let res = document.getElementById('res')

function adicionar() {
    if(texto.value === undefined || texto.value === '' || texto.value === null)
        res.innerHTML = `Please, type some task`
}