function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background - skyblue
  background(250, 250, 255);

	// set a fill color for ground
	fill(89, 63, 63);
	// draw ground
	noStroke();
	rect(0, 300, 640, 100);

	// set a fill color for queen sun
  fill(249, 244, 120);

	// draw a circle for queen sun
	ellipse(115, 100, 85, 85);

	// set a fill color for queen sun's crown
	fill(191, 185, 35);


  // draw a triangle for queen sun's crown
  triangle(86, 70, 95, 40, 106, 70);
  triangle(106, 70, 115, 40, 126, 70);
  triangle(126, 70, 135, 40, 146, 70);


	// set a fill color for queen sun's crown
	fill(216, 83, 61);

	// draw a jewllery in crown
	ellipse(95, 60, 8, 15);
	ellipse(115, 60, 8, 15);
	ellipse(135, 60, 8, 15);

	// set a fill color for queen sun's crown
	fill(255, 255, 1);

	// draw a jewllery in crown
	ellipse(95, 60, 5, 7);
	ellipse(115, 60, 5, 7);
	ellipse(135, 60, 5, 7);

	// set a fill color for queen sun's crown
	fill(253, 253, 253);

  //draw eyes for the queen sun
	ellipse(100, 90, 15, 15)
  ellipse(135, 90, 15, 15)

	// set a fill color for pupil
  fill(36,7,12)

	//draw pupil for the eyes
	ellipse(100, 90, 10, 10)
	ellipse(135, 90, 10, 10)

	// set a fill color for queen lips
	fill(240, 40, 40);

	//draw lips for queen
	ellipse(114, 121, 15, 7)
	ellipse(122, 121, 15, 7)
	ellipse(118, 125, 15, 5)

  //nofill for the nose
  noFill()
	// stroke for the nose
strokeWeight(2);
stroke(51);

	//draw nose for queen
	arc(128, 105, 40, 60, PI, PI+QUARTER_PI);
}
