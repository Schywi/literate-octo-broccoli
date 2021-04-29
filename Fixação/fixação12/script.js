  // 1ª ETAPA
 
        let personagens = [ 
            {
                id: 0, 
                nome: "Tanjiro",
                img: "https://criticalhits.com.br/wp-content/uploads/2020/01/tanjiro.jpg",
              
            }, 
            {
                id: 1,
                nome: "Nezuko",
                img: "https://i.pinimg.com/564x/7e/51/d0/7e51d0c73d7cb86629e945660bf7cfdf.jpg",
           
            },
            {
                id: 2, 
                nome: "Inosuke",
                img: "https://i2.wp.com/www.otakupt.com/wp-content/uploads/2020/04/Inosuke-Hashibira-doa-m%C3%A1scaras-a-Escola-de-Enfermagem.jpg?fit=1280%2C720&ssl=1",
              
            }
        ];

            // 2ª ETAPA
      
            function mostraPersonagem() {
                let kimetsu = document.querySelector("#produtos")
                
                personagens.forEach((i) => {
                    kimetsu.innerHTML += `
                  
                    <div>
                        <img src="${i.img}">
                        <p>${i.nome}</p>
                     
                    </div>
                  `;
                })                

            }
            mostraPersonagem();