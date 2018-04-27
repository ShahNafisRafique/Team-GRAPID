/* 
Contents: Initialization Module - provides methods for initialization of
webgl resources (e.g. context, buffers.. etc.).

Authors: Matt Smitherman, Shah Nafis Rafique, Yoonah Lee

Last Updated: 4/26/2018
*/

"use strict";

var gl;

var init = ( function () {
	
	function webGL(_canvas) {
    
		try {
      
			gl = _canvas.getContext("webgl");
			gl.viewportWidth = _canvas.clientWidth;
			gl.viewportHeight = _canvas.clientHeight;
      
		} catch (_e) {
      
			console.error(_e);
      
		}
				
		if (!gl) {
      
			console.error("WebGL was not initialized");
      
		}
    
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);
    
	}

  
  function buffers(_object, _objectArray) {
    
    let props = Object.keys(_object.properties);
    
    for(let prop of props){
      
    	let bufferRef = _object.type + prop;
      
      console.log("initializing " + bufferRef + " buffer");
      
      if(prop != "_indices"){
      
        gl.bindBuffer(gl.ARRAY_BUFFER, _objectArray[bufferRef]);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_object.properties[prop]), gl.STATIC_DRAW);
        
       /*  DEBUGGING STATEMENTS
       
       console.log(gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE));
        console.log(_object.properties[prop]);
        console.log(gl.isBuffer(_objectArray[bufferRef])); */
      } else {
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, _objectArray[bufferRef]);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_object.properties[prop]), gl.STATIC_DRAW);
      
      }
      
    }

  }

    function shaders() {
      
     var shaderProgram;
     
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

        shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

        shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
        gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

        shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
        shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
        
        return shaderProgram;
    }
  
  return {
    
		"webGL" : function(_canvas) {
				return webGL(_canvas);
		},
    
    "buffers" : function(_object, _objectArray) {
			return buffers(_object, _objectArray);
		},
    
    "shaders" : function() {
      return shaders();
    }
    
	};
	
}());
