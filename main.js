let narizX, narizY, capacete, canvas, video;

function preload(){
    capacete = loadImage('minecraft.png')
}

function setup(){
    canvas = createCanvas(301, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(301, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modeloCarregado);
    poseNet.on('pose', pegarPoses);
}

function modeloCarregado() {
    console.log('poseNet começou');
}
function pegarPoses(results) {
    if(results.length>0){
        console.log('results');
        narizX = results[0].pose.nose.x-75;
        narizY = results[0].pose.nose.y-85;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(capacete, narizX, narizY, 155, 155);
}

function tirarFoto(){
    save("foto.png");
}