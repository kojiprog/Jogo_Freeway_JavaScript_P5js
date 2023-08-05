// var carro1

let xCarros = [450,450,450,450,450,450]
let yCarros = [50,105,155,215,265,320]
let velocidadeCarros = [2,2.2,1.5,2.5,2.35,2]
let comprimentoCarro = 30
let alturaCarro = 30

function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i = i + 1){
    image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    
  }
}

function movimentaCarro(){
  for (let i = 0; i < imgCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
    
  }  
}

function posicaoinicialCarro(){
  
  for (let i = 0; i < imgCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i]  = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}