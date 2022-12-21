img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;




function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240, 336);
	video = createCapture(VIDEO);
	video.size(800, 400);
	poseNet = ml5.poseNet(video, modelLoaded);
	video.parent('game_console');
	instializeInSetup(mario);
	poseNet.on('pose', gotPoses);
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + " noseY = " + noseY);
	}
}

function modelLoaded(){
	console.log("Modelo cargado");
}

function draw() {
	background("#D3D3D3");
	game()
	if(noseX < 300){
		marioX = marioX - 1;
	}
	if(noseX > 300){
		marioX = marioX + 1;
	}
	if(noseY < 150){
		marioY = marioY - 1;
	}
	image(img, marioX, marioY, 40, 70);
}






