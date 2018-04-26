//This function gets the vertex and fragment shader codes.
//@@@@@@@@@@@@@@@ add more comments.
function getShader(gl, id) {
		var shaderScript = "";
		var type = "";
		try {
			if (id === vShader.type()){ 
				shaderScript = vShader.getScript();
				type = id;
			} else if (id === fShader.type()){
				shaderScript = fShader.getScript();
				type = id;
			}
			
		} catch (e) {
			console.error(e);
		}

		if (!shaderScript) {
			console.log("shader script failed to load");
			return null;
		}

		var shader;
		if (type === "fragment-shader") {
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		} else if (type === "vertex-shader") {
			shader = gl.createShader(gl.VERTEX_SHADER);
		} else {
			console.error("shader type not set");
			return null;
		}
		gl.shaderSource(shader, shaderScript);
		
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			return null;
		}
		
		return shader;
		
	}//end getShader()
