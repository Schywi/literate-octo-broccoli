const years = Number(prompt("Digite o numero de anos")); 
const perDay = Number(prompt("Digite o numero de cigarros fumados por dia")); 
const priceOne = Number(prompt("Preço da carteira")); 


const costBy = (years * 365) * (perDay * priceOne); 

alert(costBy);