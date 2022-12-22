function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
  video.size(800,400);
  video.parent("game_console");
  poseNet= ml5.poseNet(video,model_loaded);
  poseNet.on("pose",get_poses);
}
function model_loaded(){
console.log("model is loaded");
}
function get_poses(results){
if(results.length > 0){
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log(noseX,noseY);
}
}
function draw() {
	game()
}






