noseX=0;
noseY=0;
function preload(){
clownnose=loadImage("clown image.png");
}

function setup(){
    canvas = createCanvas(400 , 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("poseNet is Initialized.");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x -10;
        noseY=results[0].pose.nose.y -10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
   image(video , 0 , 0 , 400 , 400);
   fill(255 , 0 , 0);
   stroke(255 , 0 , 0);
   image( clownnose , noseX , noseY , 30 , 30);
}

function takesnapshot(){
    save("myfilterimg.png");
}
