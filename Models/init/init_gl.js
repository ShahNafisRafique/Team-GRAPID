//Creates the global variable gl 
var gl;

//This function takes the canvas passed in and creates the gl variable, and if it cant it displays an alert.
function initGL(_canvas) {
	try {
		gl = _canvas.getContext("experimental-webgl");
		
		//Sets the viewports to the size of the canvas which is defined in the html section.
		gl.viewportWidth = _canvas.width;
		gl.viewportHeight = _canvas.height;
	} catch (e) {
	}
	if (!gl) {
		alert("Could not initialise WebGL, sorry :-(");
	}
}
	
	