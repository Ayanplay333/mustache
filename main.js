function preload()
{
    mustache = loadImage("https://i.postimg.cc/Y2Pfn1Mw/mustache.png");
}
noseX = 0;
noseY = 0;
function setup()
{
canvas = createCanvas(350,300);
canvas.center();
video = createCapture(VIDEO);
video.size(350,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);

}
function draw()
{
    image(video,0,0,350,300);
    image(mustache,noseX - 45,noseY - 20,100,70);
    
}

function take_snapshot()
{
    save("myImage.png");
}
function modelLoaded(){
    console.log("pose net is initalized"); 
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y
        console.log("nose x -"+results[0].pose.nose.x);
        console.log("nose y -"+results[0].pose.nose.y);
    }
}