    // 1ª ETAPA

        let caçador = [ 
            {
                id: 0, 
                nome: "Tanjiro",
                img: "https://criticalhits.com.br/wp-content/uploads/2020/01/tanjiro.jpg",
                quantidade: 0 
            }, 
            {
                id: 1,
                nome: "Nezuko",
                img: "https://i.pinimg.com/564x/7e/51/d0/7e51d0c73d7cb86629e945660bf7cfdf.jpg",
                quantidade: 0 
            },
            {
                id: 2, 
                nome: "Inosuke",
                img: "https://i2.wp.com/www.otakupt.com/wp-content/uploads/2020/04/Inosuke-Hashibira-doa-m%C3%A1scaras-a-Escola-de-Enfermagem.jpg?fit=1280%2C720&ssl=1",
                quantidade: 0 
            }
        ];

            // 2ª ETAPA

            function mostraPersonagem() {
                let personagens = document.querySelector("#personagens")
                
                caçador.forEach((i) => {
                    personagens.innerHTML += `
                  
                    <div>
                        <img src="${i.img}">
                        <p>${i.nome}</p>
                        <a class="adiciona" key="${i.id}" href="#">Adicionar a lista</a>
                    </div>
                  `;
                })                

            }
            mostraPersonagem();

            // 3ª ETAPA
        
            mostraLista = () => {
                let caçadores = document.querySelector("#lista");
                caçadores.innerHTML = "";

                caçador.forEach((i) => {
                   
                    if(i.quantidade > 0) {

                        caçadores.innerHTML += `
                            <div>
                                <p>${i.nome} | Quantidade: ${i.quantidade}</p>
                                <hr>
                            </div>                    
                        `;
                    }
                })
            }

            // 4ª ETAPA 
         
            let lista = document.querySelectorAll(".adiciona");

            for (i = 0; i < caçador.length; i++) {
                lista[i].addEventListener('click', function() {
                    let key = this.getAttribute('key');
                    caçador[key].quantidade++;
                    
                    mostraLista();
                })
            }
