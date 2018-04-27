
"use strict";//not sure wat dis doez ask matty


    var shaderProgram;
//Initilizes the shader program 
function initShaders() {
	
	//These get and store the two shader code variables
	var fragmentShader = getShader(gl, "fragment-shader");
	var vertexShader = getShader(gl, "vertex-shader");

	//Creates the shader program and attaches the vertex and fragment shaders to it
	shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	//This checks if the linking failed between the shader program and the shader code
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		console.error("Could not initialize shader");
	}
	
	//This states that the shader program that was just defined should be used.
	gl.useProgram(shaderProgram);

	//This is the position variable that is passed into the shader code. Location of this attribute is 0 based of when it was defined in vertex shader.
	shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

	
	//This is the vertex color that is passed into the shader code. Location of this attribute is 1 based of when it was defined in vertex shader.
	shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
	gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

	//This is the texture that is passed into the shader. Location of this attribute is 2 based of when it was defined in vertex shader.
	shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTexCoord");
	gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
	
	
	//These are uniform variables, that correspond to the axis of rotation and degree of rotation for the vertex shader to calculate.
	shaderProgram.uniformRotationAxis = gl.getUniformLocation(shaderProgram, "uRotationAxis");
	shaderProgram.uniformRotationDegree = gl.getUniformLocation(shaderProgram, "uRotationDegree");
	
	//These two matrices help determine wheree on the global coordinate system that objects should be placed.
	shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
	shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	
	//This also another variable passed in that helps with intpolating the texture @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uTexSamp");
	
	
	


}//end initShader().
	
	
