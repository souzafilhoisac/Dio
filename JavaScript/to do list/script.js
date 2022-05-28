const texto = document.getElementById('txts')
const res = document.getElementById('res')


function adicionar() {
    if(!String(texto.value) || Number(texto.value)) {
        alert(`Please, type some task`)
    } else {
        let lista = document.createElement('option')
        lista.text = String(texto.value)
        res.appendChild(lista)
    }
}