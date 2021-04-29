
const hashira = {
    fogo : "cabelo vermelho",
    agua: "espada de dargao",
    veneno: "usa cobra", 
    amor: "ama todo mundo",
    planta: "usa veneno",
    raio: "e super rapido"
}

alert( " tipos de hashira", hashira)
alert( `${hashira.fogo}`)


const addHashira = () => {
    hashira.vento = "e o caladão da turma"
    console.log(hashira.vento)
   alert( "Hashira do vento")
   alert( `${hashira.vento}`)
}

const obj1 = JSON.stringify(hashira)
const obj2 = JSON.parse(obj1)

alert(  obj1, obj2 ) 