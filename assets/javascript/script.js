var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var descricao = document.querySelector('#descricao')
var nomeOk = false
var emailOk = false


function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
    if(nome.value.length < 2){
        TxtNome.innerHTML = 'Nome invalido!'
        TxtNome.style.color = 'red'
        nomeOk = false
    }else{
        TxtNome.innerHTML = 'Nome valido!'
        TxtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaremail(){
    let TxtEmail = document.querySelector('#TxtEmail') 
    if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
        TxtEmail.innerHTML = 'Email valido!!'
        TxtEmail.style.color = 'green'
        emailOk = true
    }else{
        TxtEmail.innerHTML = 'Email invalido'
        TxtEmail.style.color = 'red'
        emailOk = false
    }

    }




function Enviar(){
    if(nomeOk == true && emailOk == true){
        alert('Enviado com sucesso!')
        
    }else{
        alert('você digitou algo errado!') 
    }
}