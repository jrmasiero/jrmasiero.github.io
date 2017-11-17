
var estado = 0;



var num = 18;

var imgs;
var bot_imgs;

var intro;

var rec_pos = 0;
var rec_tam = 0;

var tempo_texto = 0;
var texto_intro = "THIS";

var som_intro;

var n = null;


var lynes;
var numLines = 30;

var pos_img = 0;

var projetos;
var sobre;
var ver_video;

var video_atual;


var rosto;
var descricao;

var show_descricao = false;
var proj_titulos;
var proj_textos;
var video_links;
var timer_texto = 0;
var contar_tempo = false;


function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);

  angleMode(RADIANS);
  rectMode(CENTER);


  imgs = new Array();
  bot_imgs = new Array();
  lynes = new Array();

  //LINHAS
  var index = 0;
  for (var j=0; j < numLines; j++) {
    lynes[index++] = new Lyne(200, 100, 300, 0.003, 30+(30*j));
  }

  projetos = createButton("PROJETOS", 1);
  projetos.position(50, 0);
  projetos.size(120, 50);
  projetos.style("font-family", "Helvetica");
  projetos.hide();
  projetos.style("font-size", "20px");
  projetos.style("border", color(0, 0));
  projetos.style("background-color", color(0, 0));
  projetos.mousePressed(menu_superior);

  sobre = createButton("SOBRE", 2);
  sobre.position(175, 0);
  sobre.size(120, 50);
  sobre.style("font-family", "Helvetica");
  sobre.style("font-size", "20px");
  sobre.style("border", color(0, 0));
  sobre.style("background-color", color(0, 0));
  sobre.hide();
  sobre.mousePressed(menu_superior);

  ver_video = createButton("VIDEO", 3);
  ver_video.position(width/2, height/1.15);
  ver_video.size(170, 60);
  ver_video.style("font-family", "Helvetica");
  ver_video.style("font-size", "40px");
  ver_video.style("border", color(0,0));
  ver_video.style("background-color", color(0,0));
  ver_video.style("margin-left", -85);
  ver_video.hide();
  ver_video.mousePressed(assistir);

  for (var i = 1; i <= num; i++) {

    imgs[i] = loadImage("data/frame("+i+").png");
    append(imgs, imgs[i]);

    bot_imgs[i] = createImg("data/bot("+i+").png");
    bot_imgs[i].value(i);
    bot_imgs[i].hide();
    bot_imgs[i].mouseOver(selec); 
    bot_imgs[i].mouseOut(noSelec); 

    bot_imgs[i].style("margin-left", -40);
    bot_imgs[i].style("margin-top", -30);
    // imgs[i] = img;

    append(bot_imgs, bot_imgs[i]);
  }

  rosto = loadImage("data/rosto.png");
  
  carregar_descricoes();

  descricao = loadStrings('data/descricao.txt');
}




function draw() {
console.log(timer_texto);
  background(255);

  for (var j = 0; j < lynes.length; j++)
  {
    lynes[j].drive();
    lynes[j].display();
  }  

  //image(img,0,0);
  if (estado==0) {
    fill(0);
    rect(width/2, height/2, width, height);

    fill(255);

    rect(width/2, rec_pos, 10+(rec_tam*1.2), 10+rec_tam);

    if (rec_pos < height/2) {
      rec_pos = rec_pos + 5;
    } else {


      if (rec_tam<width) {
        rec_tam = rec_tam + 20;
      }

      fill(0);
      noStroke();
      //textFont(intro, 100);
      textSize(400);
      textAlign(CENTER, CENTER);
      if (tempo_texto <= 80) {
        texto_intro = "THIS";
      } else if (tempo_texto > 80 && tempo_texto <= 110) {
        texto_intro = "IS";
      } else if (tempo_texto > 110 && tempo_texto <= 140) {
        texto_intro = "MY";
      } else if (tempo_texto > 140 && tempo_texto <= 190) {
        texto_intro = "WORK";
      } else {
        estado = 1;
      }


      text(texto_intro, width/2, height/2);

      tempo_texto++;
    }
  } else if (estado==1) {

    projetos.show();
    sobre.show();

    var tam_X_ret_men = 80;
    var tam_Y_ret_men = 40;

    var tam_X_ret_mai = width/1.5;
    var tam_Y_ret_mai = height/1.5;

  
  
    
    /*
    fill(0,10);
     stroke(0);
     rect(mouseX, mouseY,tam_X_ret_men, tam_Y_ret_men);
     
     line(mouseX-(tam_X_ret_men/2), mouseY-(tam_Y_ret_men/2), (width/2) -(tam_X_ret_mai/2), (height/2) -(tam_Y_ret_mai/2));
     line(mouseX-(tam_X_ret_men/2), mouseY+(tam_Y_ret_men/2), (width/2) -(tam_X_ret_mai/2), (height/2) +(tam_Y_ret_mai/2));
     line(mouseX+(tam_X_ret_men/2), mouseY-(tam_Y_ret_men/2), (width/2) +(tam_X_ret_mai/2), (height/2) -(tam_Y_ret_mai/2) );
     line(mouseX+(tam_X_ret_men/2), mouseY+(tam_Y_ret_men/2), (width/2) +(tam_X_ret_mai/2), (height/2) +(tam_Y_ret_mai/2));
     fill(255);
     rect(width/2, height/2, tam_X_ret_mai, tam_Y_ret_mai);
     
     */

    for (var i = 1; i <= num; i++) { 

      // buttons[i].show();
      bot_imgs[i].show();

      if (i<=num/2) {
        var a = map(i, 0, num/2, 0.1, 0.6);
        bot_imgs[i].position(width/3, (height/2));
      } else {
        var a = map(i, 0, num/2, 0.1, 0.6);
        bot_imgs[i].position(width/1.5, (height/2));
      }


      // buttons[i].position(width/3,(height/2));

      bot_imgs[i].style("translate", height/4, height/4);

      bot_imgs[i].style("rotate", (360*a));
      bot_imgs[i].attribute("rotate", "center");
    }

    if (n!=null) {
      
      ver_video.position(width/2, height/1.15);
    
      
      imageMode(CENTER);
      
      for (var i = 1; i <= num; i++) { 
        if(i == n){
           bot_imgs[i].style("opacity", 1);
        } else {
           bot_imgs[i].style("opacity", 0.3);
        }
        
      }
      
      if ( pos_img  > height/2) {
        pos_img = pos_img - 30;
      } else {
        pos_img = height/2;
      }
      
      var b = map(pos_img, height, height/2, 0, 150);
      var d = map(pos_img, height, height/2, 0, 255);
      tint(255, d);
      image(imgs[n], width/2, pos_img, width/4 + b, width/4 + b);
      tint(255, 255);
      
      if(timer_texto < 100){
        if( contar_tempo){
       timer_texto++;
        }
      } else {
        contar_tempo = false;
      }
      
      if( timer_texto > 50){
        
       
        
        var transp = map(timer_texto,50,100,0,200);
        
     fill(255, transp);
     ellipse(width/2, height/2, width/4 + b, width/4 + b);
      
       fill(0);
      noStroke();
       textFont("Helvetica", 40);
        textSize(40);
      textAlign(CENTER, CENTER);
      text(proj_textos[n], width/2, height/2, width/4 + b, width/4 + b);
      } 
      


      if (show_descricao) {
        fill(0,50);
        strokeWeight(1);
        stroke(0);
        textFont("Helvetica", 22);
        textSize(22);
          textAlign(CENTER, TOP);
          text( proj_titulos[n], mouseX, mouseY-20, 300, 100);
      
      }
      strokeWeight(1);
      
      
    } else {
      fill(0, 50);
      noStroke();
      //textFont(intro, 100);
      textSize(50);
      textAlign(CENTER, BOTTOM);
      text("Escolha", width/2, height/2);
      text("um trabalho", width/2, (height/2) + 50);
    }
    
    
    
    
  //SOBRE  
  
  
    
  } else if (estado==2) {

    n = null;

    for (var i = 1; i <= num; i++) { 
      bot_imgs[i].hide();
    }


    imageMode(CENTER);
    image(rosto, width/2, height/2, width/3, width/3);

    //for(var i = 0; i < descricao.length; i++){
    fill(0);
    noStroke();
    textFont("Helvetica", 20);
    textSize(17);
    textAlign(LEFT, CENTER);
    text(descricao, width/6, height/2, width/4, height);

    //}
  }
  
  
  
  //VIDEO GALERI
   else if (estado==3) {
     
     n = null;

    for (var i = 1; i <= num; i++) { 
      bot_imgs[i].hide();
    }
     
  video_atual.show();
  video_atual.position((width/2)-320,(height/2)-240);
   }
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {

  if (keyCode = ENTER) {
    estado = 1;
  }
}


function menu_superior () {

  estado = this.value();
    ver_video.hide();
   video_atual.hide();
    video_atual.remove();
}


function selec() {

  n = this.value();

  pos_img = height;

  // console.log("Valor ="+n);
  show_descricao = true;
  
   timer_texto = 0;
  contar_tempo = true;
  if(video_links[n]!=''){
   ver_video.show();
  } else {
   ver_video.hide(); 
  }
}
function noSelec() {

  show_descricao = false;
}

function assistir() {
  ver_video.hide();
  video_atual = createDiv(video_links[n]);
  //video_atual.attribute("align","center");
  
  
   estado = this.value();
  
}

//LINHAS


function Lyne(pConstant, pAngle, pScalar, pSpeed, pYfix)
{
  this.constant = pConstant;
  this.angle = pAngle;
  this.scalar = pScalar;
  this.speed = pSpeed;
  this.yfix = pYfix;


  // drive method
  this.drive = function()
  {
    this.xpos = 100 + this.constant + sin(this.angle) * this.scalar;
    this.ypos = this.constant + cos(this.angle) * this.scalar;
    this.angle = this.angle + this.speed;
  }

  // display method
  this.display = function()
  {
    stroke(80, 100);
    noFill();
    bezier(0, this.yfix, width/2, this.xpos, width/2, this.ypos, width, this.yfix);
  }
}