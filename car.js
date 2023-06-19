let des = document.getElementById('des').getContext('2d')
let carro = new Object(200,200,50,50, 'red')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        carro.dir += 1
        
    } //apertou a tecla
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // carro.dir = 0
        
    } //soltou a tecla
})
function desenha(){
    carro.des_obj()
}

function mover(){
    carro.move()
}

function main(){
    des.clearRect(0,0,500,700)
    desenha()
    mover()
}

setInterval(main,10)

// des.beginPath()
// des.lineWidh = '8'
// des.strokeStyle = 'red'
// des.fillStyle = 'purple'
// des.rect(200,200,50,50) 
// des.closePath()
// des.stroke()
// des.fill()