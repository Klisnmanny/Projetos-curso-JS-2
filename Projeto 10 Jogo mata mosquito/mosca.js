
// pegando o tamanho da tela

var altura = 0
var alrgura = 0
var nv = 0
var tempo = 15
var criarmoscatempo =1500

    var dificuldade = window.location.search
    dificuldade = dificuldade.replace('?', '')

        if (dificuldade === 'normal'){
            criarmoscatempo = 1500
        }
        else if (dificuldade === 'medio'){
            criarmoscatempo = 1000
        }
        else if (dificuldade === 'dificil'){
            criarmoscatempo = 700
        }


function tamanhotela() {
    
    altura = window.innerHeight
    largura = window.innerWidth
    
}

  tamanhotela()

    var relogio = setInterval (function() { 
        
        tempo = tempo - 1                                          // função para cronometro

        if (tempo < 0) {
            clearInterval(relogio)                        //  para a função não ficar se repetindo           
            clearInterval(criarmosca)                    //limpa a funcao de ficar criando mosca depois de termina o jogo       
            window.location.href = 'Vitoria.html'
        }
        else {
        document.getElementById('relogio').innerHTML = tempo}
    }, 1000)
            
    




function posicaoAleatoria() {

    if (document.getElementById('mosca')){                      //remove caso exista
        document.getElementById('mosca').remove()
            
            if(nv>2){
                window.location.href = 'GameOver.html'
            }

            else{
                document.getElementById('vidas' + nv).src="imagens/coracao_vazio.png"
                
                nv++
            }
    }

        //criando coordenadas aleatorias dentro da pagina
        //Math.floor ele deixa a posição sem casas decimais
        //Marh.radom ele cria uma posição aleatorio

        var posicaoX = Math.floor(Math.random() * largura) -90 //foi colocado -90 para quando cair perto 
        var posicaoY = Math.floor(Math.random() * altura) -90  // das bordas nao criar barra de rolamento

        posicaoX = posicaoX < 0 ? 0 :posicaoX   //Se a posição cair muito para a esquerda o valor não 
        posicaoY = posicaoY < 0 ? 0 :posicaoY   // ficar negativo e criar e sumir da tela
                                               // se posicção foi menor que 0, recebe 0 se nao sera ela mesmo
        


        //criar o mosquito(elemento)

        var mosquito = document.createElement('img')
            mosquito.src = 'imagens/mosca.png'                      // pegando a imagem do mosquito
            mosquito.className = 'mosquito' + tamanhoAleatorio() + ' '+'lado' + ladoAleatorio()              //criando classe para o css organizar
            mosquito.style.left = posicaoX + 'px'                   //pegando a posição randomica feita (largura)
            mosquito.style.top =posicaoY + 'px'                   //pegando a posição randomica feita (altura)
            mosquito.style.position = 'absolute'                    // precisa esta em posição absoluta
            mosquito.id = 'mosca'
            mosquito.onclick = function() {                        // remove o elemento quando se clicar 
                this.remove()                                   //no caso o this remove o proprio elemento da funcao
            
            }

            document.body.appendChild(mosquito)

         
}

    function tamanhoAleatorio() {
        
        return Math.floor(Math.random() * 3)
 
    }

    function ladoAleatorio(){

        return  Math.floor(Math.random() * 2)
    
        }
        
