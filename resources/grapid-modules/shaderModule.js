//Shader module 

	
	"use strict";

	//fragment shader 
	var fShader =  (function () {
		
		var type = "fragment-shader";
		
		function getScript() {
			return `
			precision mediump float;

			varying vec4 vColor;

			void main(void) {
				gl_FragColor = vColor;
			}`
		};
		
		return {
			"type": function() {
				return type;
			},
			"getScript": function() {
				return getScript();
			}
		};
		
		
	}());	

//vertex shader 
	var vShader = (function() {
		
		var type = "vertex-shader";
		
	    function getScript(){
			return `
			attribute vec3 aVertexPosition;
			attribute vec4 aVertexColor;

			uniform mat4 uMVMatrix;
			uniform mat4 uPMatrix;

			varying vec4 vColor;

			void main(void) {
				gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
				vColor = aVertexColor;
			}`
		};
		
		return {
			"type": function() {
				return type;
			},
			"getScript": function() {
				return getScript();
			}
		};				
	}());

function getShader(gl, id) {
  
		var shaderScript = "";
    var shader;
    
		try {
			if (id === vShader.type()){ 
      
				shaderScript = vShader.getScript();
        shader = gl.createShader(gl.VERTEX_SHADER);
        
			} else if (id === fShader.type()){
        
				shaderScript = fShader.getScript();
				shader = gl.createShader(gl.FRAGMENT_SHADER);
			} else {
        
        console.error("shader type not set");
        
      }
			
		} catch (e) {
			console.error(e);
		}

    if (!shaderScript) {
			console.log("shader script failed to load");
      return null;
    }

    gl.shaderSource(shader, shaderScript);
		
    gl.compileShader(shader);
        
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      console.error("there's something wrong with the shader");
      return null;
    }
		
    return shader;
		
    }
    

	
	

