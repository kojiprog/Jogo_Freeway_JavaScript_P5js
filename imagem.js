let imagemDaEstrada;
let personagem;
let carro1;
let carro2;
let carro3;
let carro4;
let carro5;
let carro6;

let somDoJogo;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage("imagem/estrada.png");
  personagem = loadImage("imagem/ator-1.png");
  carro1 = loadImage("imagem/carro-1.png");
  carro2 = loadImage("imagem/carro-2.png");
  carro3 = loadImage("imagem/carro-3.png");
  carro4 = loadImage("imagem/carro-1.png");
  carro5 = loadImage("imagem/carro-2.png");
  carro6 = loadImage("imagem/carro-3.png");
  imgCarros = [carro1, carro2, carro3, carro4, carro5, carro6];
  
  somDoJogo = loadSound("som/trilha.mp3");
  somDaColisao = loadSound("som/colidiu.mp3");
  somDoPonto = loadSound("som/pontos.wav");
  
}