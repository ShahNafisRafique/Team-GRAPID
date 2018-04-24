function tick() {
	//magical part of code from the google provided .js file that calls it self.
	requestAnimFrame(tick);
	
	//calls the method to draw the scene.
	drawScene();
	
	//calls the calculations method that will calculate for the next scene.
	calculations();
}