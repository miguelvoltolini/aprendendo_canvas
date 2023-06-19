let des = document.getElementById('des').getContext('2d')

des.beginPath() // para iniciar e poder tornar um objeto
des.lineWidth = '5' // espessura da linha 
des.fillStyle = 'purple' // cor da pintura
des.strokeStyle = 'blue' // cor da linha
des.moveTo(200,200) // posiciona o pincel
des.lineTo(200,100) // risca a linha até a posição indicada (x,y)
des.lineTo(150,150) // risca a linha até a posição indicada (x,y)
des.closePath() // para fechar e poder tornar um objeto
des.stroke() // risca a linha
des.fill() // preenche a área