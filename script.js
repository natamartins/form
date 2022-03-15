const btn = document.querySelector('a')

function mostarform(e){
  e.preventDefault();
let nome = document.querySelector('[data-nome="nome"]')
let senha = document.querySelector('[data-senha="senha"]')

document.getElementById('valorNome').innerHTML = nome.value;
document.getElementById('valorSenha').innerText = senha.value;

}

btn.addEventListener('click', mostarform)


/*********************** deletar table *****************************/
const delet = document.querySelectorAll('.deletar-box')

function deletarform() {
let deletar = document.querySelectorAll('.table-js')
 delet.removeChild(deletar)
}

delet.addEventListener('click' , deletarform)



