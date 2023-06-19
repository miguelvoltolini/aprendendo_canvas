let des = document.getElementById('des').getContext('2d')

des.beginPath()
des.lineWidh = '8'
des.strokeStyle = 'red'
des.fillStyle = 'purple'
des.rect(200,200,50,50) // retângulo (x,y,w,h)
des.closePath()
des.stroke()
des.fill()