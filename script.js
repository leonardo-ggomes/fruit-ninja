
//Criando o elemento
var canvas = document.createElement("canvas")

//Definindo tamanho
canvas.width = window.innerWidth
canvas.height = window.innerHeight

document.body.prepend(canvas)
var ctx = canvas.getContext("2d")

var x = 0
var y = 0
var w = 50
var h = 50

var p_inicial_x = 0
var p_inicial_y = canvas.height - 50

var graus = 60
var velocidade = 110 //Alcance

var angulo_radiano = graus * (Math.PI / 180) //Angulo
var v_inicial_x = velocidade * Math.cos(angulo_radiano)
var v_inicial_y = -velocidade * Math.sin(angulo_radiano)
const g = 9.82
var tempo = 0
var escala = 8 //Velocidade

function desenhar(p_tempo){

    tempo += p_tempo * escala

    ctx.clearRect(0,0,canvas.width, canvas.height)

    x = p_inicial_x + v_inicial_x * tempo
    y = p_inicial_y + (v_inicial_y * tempo) + (0.5 * g * tempo * tempo)
    
    ctx.beginPath()
    ctx.rect(x, y, w, h)
    ctx.fillStyle = "red"
    ctx.fill()

    if(y > canvas.height - 50){
        tempo = 0
    }
}


var ultimoTempo = 0

function atualizar(deltaTempo){
    var time = (deltaTempo - ultimoTempo) / 1000 
    ultimoTempo = deltaTempo

    //console.log(time)
    desenhar(time)
    requestAnimationFrame(atualizar)

}

requestAnimationFrame(atualizar)

