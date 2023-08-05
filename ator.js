//var ator
let xAtor = 100;
let yAtor = 370;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(personagem, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (limiteDeMovimento()){
      yAtor += 3;
    }
    
    
  }}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i = 0; i < imgCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    
    if(colisao){
      voltaPosicaoinicial();
      pontosMaiorQueZero();
    
    }
  }
}

function pontuacao(){
  textAlign(CENTER)
  textSize(22);
  fill(255,255,80)
  text(pontos, width / 5, 27)
}

function voltaPosicaoinicial(){
  somDaColisao.play();
   yAtor = 365;
}

function pontosMaiorQueZero(){
    if (pontos > 0){
        pontos -= 1;
      }
}

function marcarPonto(){
  if (yAtor < 25){
    pontos += 1
    somDoPonto.play();
    yAtor = 365
  }
}

function limiteDeMovimento(){
  return yAtor < 366;
}