let botao1 = document.querySelector("#setAttribute");
let botao2 = document.querySelector("#getAttribute");
let titulos = document.querySelectorAll("h2");

botao1.addEventListener("click", mudarCor => {
    document.querySelector("#nome").setAttribute("value", "Kamado")
    
    for (i in titulos) {
        titulos[i].setAttribute("class", "cor");
    }            
})

botao1.addEventListener("mouseout", retirarCor =>{
    document.querySelectorAll("h2")[1].removeAttribute("class");
})

botao2.addEventListener("click", capturarValor => {
    let valor = document.querySelector("#nome").getAttribute("value");
    document.querySelector("#valorElemento").innerHTML = valor;
})

let paragrafo = document.createElement("p");
paragrafo.innerHTML = "Ce ta baum ?";

document.body.appendChild(paragrafo);

const minhaDiv = document.createElement('div');

minhaDiv.setAttribute('class', 'fundo');

document.body.appendChild(minhaDiv);