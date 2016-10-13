var x=0,y=0,loc=20;
function setup() {
createCanvas(windowWidth,windowHeight);
stroke(20);
strokeWeight(1);
colorMode(HSB, height, height, height);  

}

// this function draws the basic shape of robot.
function draw() {
	background(200);

	beginShape();
	vertex(((width+x)/2)-300,((height+y)/2));
	vertex(((width+x)/2),((height+y)/2)); 
	vertex(((width+x)/2),((height+y)/2)+400);
	vertex(((width+x)/2)-300,((height+y)/2)+400);
	vertex(((width+x)/2)-300,((height+y)/2));
	endShape();

	beginShape();
	vertex(((width+x)/2)-100,((height+y)/2)-10);
	vertex(((width+x)/2)-100,((height+y)/2)-110);
	vertex(((width+x)/2)-200,((height+y)/2)-110);
	vertex(((width+x)/2)-200,((height+y)/2)-10);
	vertex(((width+x)/2)-100,((height+y)/2)-10);
	endShape();

	beginShape();
	vertex(((width+x)/2)-300,((height+y)/2)+20);
	vertex(((width+x)/2)-500,((height+y)/2)+loc);
	vertex(((width+x)/2)-500,((height+y)/2)+loc);
	vertex(((width+x)/2)-300,((height+y)/2)+40);
	endShape();
	
	beginShape();
	vertex(((width+x)/2),((height+y)/2)+20);
	vertex(((width+x)/2)+200,((height+y)/2)+loc);
	vertex(((width+x)/2)+200,((height+y)/2)+loc);
	vertex(((width+x)/2),((height+y)/2)+40);
	endShape();

	beginShape();
	vertex(((width+x)/2)-20,((height+y)/2)+400);
	vertex(((width+x)/2)-20,((height+y)/2)+600);
	vertex(((width+x)/2)-60,((height+y)/2)+600);
	vertex(((width+x)/2)-60,((height+y)/2)+400);
	endShape();

	
	beginShape();
	vertex(((width+x)/2)-240,((height+y)/2)+400);
	vertex(((width+x)/2)-240,((height+y)/2)+600);
	vertex(((width+x)/2)-280,((height+y)/2)+600);
	vertex(((width+x)/2)-280,((height+y)/2)+400);
	endShape();

	// this function colors the robot based upon the location of cursor
    fill(mouseX, height, height);
 
}

// this function calls another function when an mouse press event occurs
function mousePressed() {
  init();
  
}

// this function moves the robot to top-right corner on a  mouse click 
function init(){
	x=x+40;
	y=y-40;
}


// this function helps the robot to shake its arms with the
// moment of the mouse wheel
function mouseWheel(event) {
	
  print(event.delta);
  loc += event.delta;
  }

