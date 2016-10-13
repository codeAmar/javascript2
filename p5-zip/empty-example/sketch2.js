var x=0,y=0,loc=20;
function setup() {
createCanvas(windowWidth,windowHeight);
stroke(20);
strokeWeight(1);
colorMode(HSB, height, height, height);  
}
// this function draws the normal robot
function draw() {
	
	background(200);
	width=width+x;
	height=height+y;
	ellipse(width/2,height/2,100,80);
	rect((width/2)-100,(height/2)+40,200,200,10);
	ellipse((width/2)-50,(height/2)+240,loc+20,100);
	ellipse((width/2)+50,(height/2)+240,loc+20,100);
	ellipse((width/2)-150,(height/2)+60,100,loc);
	ellipse((width/2)+150,(height/2)+60,100,loc);

// this fill function color the robot according to its location
    fill(mouseX, height, height);
}

// this event moves the robot to place of mouse click
function mousePressed() {
  	width=mouseX*2;
	height=mouseY*2;
}


// this function enlarges the arms and legs of robot with mouse wheel.
function mouseWheel(event) {
	
  print(event.delta);
  loc += event.delta;
  }

