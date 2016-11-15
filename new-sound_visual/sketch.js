var mic;
var vid;
var song;
var x = 0;
var y = 1;
var value = 0;
var showVid = false;

function preload() {
  song = loadSound('forbanana.mp3')
}

function setup() {
  createCanvas(800, 800);
  frameRate(25);
  song.play();
  song.loop();

  mic = new p5.AudioIn()
  mic.start();
  
  setTimeout(vidTrigger, 5000);

  vid = createVideo('MRI of a banana.mp4');
  vid.position(0,0);
  vid.loop();
  vid.play();
  vid.hide();
}

function draw() {

  background(236);
  if (showVid) {
   image(vid,0,0,800,800);  
  }
 
  micLevel = mic.getLevel();
  ellipse(width / 2, constrain(height - micLevel * height * 40, 50, height), 300, 150);
  fill(230);
  ellipse(height / 2, constrain(width - micLevel * width * 10, 100, width), 300, 300);
  fill(0);
  ellipse(width / 2, constrain(height - micLevel * height * 15, 100, height), 20, 90);

  x = x + 0.5;
  if (x > width) {
    x = 0;

    y = y + 3;
    if (y > height)
      y = 1;
  }

  line(width / 2, constrain(height - micLevel * height * 80, 50, height), 0, 0);
  stroke(255);
  strokeWeight(1.5);

  line(height / 2, constrain(width - micLevel * width * 20, 100, width), 0, 0);
  stroke(0);
  strokeWeight(1.5);

  line(width / 2, constrain(height - micLevel * height * 10, 100, height), 0, 0);
  stroke(255);
  strokeWeight(1.5);

}
function vidTrigger() {
  showVid = true;
  
}
// ellipse(height, constrain(width - micLevel * width * 100, 10, width), 300, 300);

// vid.play();


// function draw() {
//   background(0);
//   micLevel = mic.getLevel();
//   ellipse(300, 200, 100 * micLevel, 100 * micLevel);
// }


// function draw() {
//   background(0);
//   micLevel = mic.getLevel();
//   // micLevel
//   ellipse(400, 300, 400, 1200 * micLevel);
// }