function setup() {
  createCanvas(500, 400);
  somDoJogo.loop();
}

function draw() {
  background(imagemDaEstrada);
  
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  posicaoinicialCarro();
  verificaColisao();
  pontuacao();
  marcarPonto()
}