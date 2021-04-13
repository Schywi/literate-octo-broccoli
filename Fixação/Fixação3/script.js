 
function validaFormulario() {
    let nome = document.querySelector("#nome").value;
    if (nome == ""){
        alert("Campo obrigatório")
        return false
    }            
}
 