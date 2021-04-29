const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const hashira = [
    
   
]
 
   

const addHashira = () => {
    const key = input1.value
    const value = input2.value
    const set = localStorage.setItem(key, value)
    const  get = localStorage.getItem(key)
    const remove =  localStorage.removeItem(key)
    console.log("set", set , "get", get, "remove", remove)

    hashira.push(
        {
            [key]: [value],
        }
    )
    hashira.map(item => {
        alert(item[key])
    
    })

  
}



 