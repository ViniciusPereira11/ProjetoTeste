var bigodeImg;
var bigodeX = 0;
var bigodeY = 0;

function preload(){
    bigodeImg = loadImage("bigode.png");
}
//configura o site
function setup(){
canvas = createCanvas(649, 480);
canvas.position(windowWidth/2-320, 200);

//captura o video da webcam
video = createCapture(VIDEO);
//esconde o vídeo
video.hide();
//ccoloca uma rede de 17 pontos na imagem do vídeo
poseNet = ml5.poseNet(video,modelLoaded);
//determina o que acontece quando muda a pose 
poseNet.on("pose", gotPose);

imageMode(CENTER);
}
function modelLoaded(){
console.log("poseNet inicializado com sucesso");
}
function gotPose(result){
if( result.length > 0 ){
    bigodeX = result[0].pose.nose.x;
    bigodeY = result[0].pose.nose.y;
}
}
function draw(){
    image (video, width/2, height/2, 640, 480);
}

function TirarFoto(){
    save("foto.png");
}