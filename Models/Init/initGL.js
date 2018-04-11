//grand varialbe gl,creates the gl object
	var gl;
	//@@@@@ again idk how to pass the canvas id
	//otherwise this gets the gl object and if it fails it sends a sad message
    function initGL(canvas) {
        try {
            gl = canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        } catch (e) {
        }
        if (!gl) {
            alert("Could not initialise WebGL, sorry :-(");
        }
    }
	
	