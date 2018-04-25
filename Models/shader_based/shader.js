//Shader module 

	
	"use strict";//not sure wat dis doez ask matty



//initz shaders,enables which attributes are actually being used
    var shaderProgram;

    function initShaders() {
        var fragmentShader = getShader(gl, "fragment-shader");
        var vertexShader = getShader(gl, "vertex-shader");

        shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.error("Could not initialize shader");
        }

        gl.useProgram(shaderProgram);

		//Location of this attribute is 0.
        shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

		
		//Location of this attribute is 1.
        shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
        gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

		//Location of this attribute is 2.
		shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTexCoord");
        gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
		
		
	    //These var is a uniform variable,aka a varialbe that is constant per object,that set
		shaderProgram.uniformRotationAxis = gl.getUniformLocation(shaderProgram, "uRotationAxis");
		shaderProgram.uniformRotationDegree = gl.getUniformLocation(shaderProgram, "uRotationDegree");
		
		
        shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
        shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
		
		shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uTexSamp");
		
		
		

	
    }//end initShader()
	
	
