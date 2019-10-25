let width = 1500;
let height = 1000;
var start = 0;
var inc = 0.0005;

function setup(){
  createCanvas(width, height);
  colorMode(HSB);
  incslider = createSlider(0, 20, 100);
  incslider.position(20, 20);
  hueslider = createSlider(0, 255, 100);
  hueslider.position(20, 40);
}

function draw(){

  // Sets inc and hue value based on sliders
  inc = incslider.value() * 0.0005;
  var hue = hueslider.value();

  // Color and drawing things
  background(0);
  stroke(hue, 255, 255);
  noFill();

  // SHAPE + SEED
  beginShape();
  noiseSeed("Bazinga");

  // X offset to start getting noise from
  var xoff = start;
  for(var i = 0; i < width; i++){

    // Gets noise at x offset and maps it to height
    var y = noise(xoff) * height;
    vertex(i, y);

    // increases xoffset every time to get different noise
    xoff += inc;
  }
  endShape();
  // SHAPE

  // Increases start to do moving look
  start += inc;

}
