function validar(){
    let CPF = cadastro.cpf.value
    let senha = cadastro.senha.value
    let confirm = cadastro.conf_senha.value

    confirm = String(confirm)
    senha = String(senha)

    if(CPF.length > 11 || CPF.length < 11){
        alert("CPF de tamanho invalido")
        return false
    }

    if(isNaN(CPF)){
        alert("informe apenas numeros no CPF")
        cadastro.cpf.focus()
        return false
    }

    if(senha != confirm){
        alert("Senhas estão diferentes")
        cadastro.senha.value = null
        cadastro.conf_senha.value = null
        cadastro.senha.focus()
        return false
    }

    document.cadastro.submit()
}