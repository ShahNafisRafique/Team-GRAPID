 
"use strict";
	
 var sceneObjectModule = (function () {
	 
	
	var objArray = [];
	
	objArray.activeClasses = {};
	
	function createBuffers(obj) {
		var buffer_name;
		if(!objArray.activeClasses[obj.objClass]){
			let property_names = Object.keys(obj.properties);
			for(let i = 0; i < property_names.length; i++){
				buffer_name = obj.objClass + "_" + property_names[i] + "_buffer";
				objArray[buffer_name] = gl.createBuffer();
			}
			
		}
		objArray.activeClasses[obj.objClass] = obj.objClass;
	}
	
	function createObject(objClass, options) {
		
		let obj = {};
		obj.objClass = objClass;
		obj.properties = {
			"position" : [],
			"color" : []
		};
		let recognized = true;
		
		createBuffers(obj);
	
			switch (objClass) {
				
				case "triangle" : {
				
					
					obj.vertSize = 3;
					obj.numVert = 3;
					obj.colorSize = 4;
					obj.numColor = 3;
				
					obj.properties.position = [
						0.0,  1.0,  0.0,
					   -1.0, -1.0,  0.0,
						1.0, -1.0,  0.0
					];
						
					//check if there are parameters for place and color, if not, use default values
					if (!options){  
				
						obj.place = [0.0, 0.0, -7.0]; 
							
						obj.properties.color = [
							0.0, 0.0, 1.0, 1.0,
							0.0, 0.0, 1.0, 1.0,
							0.0, 0.0, 1.0, 1.0
							];
						
					} else {
					
						if (options.place && options.color) {
							obj.place = options.place;
							obj.properties.color = options.color;
						} else if (options.color) {
							obj.place = [0.0, 0.0, -7.0];
							obj.properties.color = options.color;
						} else if(options.place){
							obj.place = options.place;
							obj.properties.color = [
							0.0, 1.0, 0.0, 1.0,
							0.0, 1.0, 0.0, 1.0,
							0.0, 1.0, 0.0, 1.0
							];
						}
					}
					
					break;
				}
					
				case "square" : {
					obj.vertSize = 3;
					obj.numVert = 4;
					obj.colorSize = 4;
					obj.numColor = 4;
					
					obj.properties.position = [
						 1.0,  1.0,  0.0,
						-1.0,  1.0,  0.0,
						 1.0, -1.0,  0.0,
						-1.0, -1.0,  0.0
					];
					
					if (!options){  
	
						obj.place = [0.0, 0.0, -7.0]; 
							
						obj.properties.color = [
							0.0, 0.0, 1.0, 1.0,
							0.0, 0.0, 1.0, 1.0,
							0.0, 0.0, 1.0, 1.0,
							0.0, 0.0, 1.0, 1.0
							];
						
					} else {
					
						if (options.place && options.color) {
							obj.place = options.place;
							obj.properties.color = options.color;
						} else if (options.color) {
							obj.place = [0.0, 0.0, -7.0];
							obj.properties.color = options.color;
						} else if(options.place){
							obj.place = options.place;
							obj.properties.color = [
							0.0, 1.0, 0.0, 1.0,
							0.0, 1.0, 0.0, 1.0,
							0.0, 1.0, 0.0, 1.0,
							0.0, 1.0, 0.0, 1.0	
							];
						}
					}
					
					break;
				}	
				
				case "square-pyramid" : {
					
					obj.vertSize = 3;
					obj.numVert = 12;
					obj.colorSize = 4;
					obj.numColor = 12;
				
					obj.properties.position = [
								// Front face
								 0.0,  1.0,  0.0,
								-1.0, -1.0,  1.0,
								 1.0, -1.0,  1.0,

								// Right face
								 0.0,  1.0,  0.0,
								 1.0, -1.0,  1.0,
								 1.0, -1.0, -1.0,

								// Back face
								 0.0,  1.0,  0.0,
								 1.0, -1.0, -1.0,
								-1.0, -1.0, -1.0,

								// Left face
								 0.0,  1.0,  0.0,
								-1.0, -1.0, -1.0,
								-1.0, -1.0,  1.0
								];
						
					//check if there are parameters for size and color, if not, use default values
					if (!options){  
				
						obj.place = [0.0, 0.0, -7.0]; 
							
						obj.properties.color = [
									// Front face
									1.0, 0.0, 0.0, 1.0,
									0.0, 1.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,

									// Right face
									1.0, 0.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,
									0.0, 1.0, 0.0, 1.0,

									// Back face
									1.0, 0.0, 0.0, 1.0,
									0.0, 1.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,

									// Left face
									1.0, 0.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,
									0.0, 1.0, 0.0, 1.0
									];
						
					} else {
					
						if (options.place && options.color) {
							obj.place = options.place;
							obj.properties.color = options.color;
						} else if (options.color) {
							obj.place = [0.0, 0.0, -7.0];
							obj.properties.color = options.color;
						} else if(options.place){
							obj.place = options.place;
							obj.properties.color = [
									// Front face
									1.0, 0.0, 0.0, 1.0,
									0.0, 1.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,

									// Right face
									1.0, 0.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,
									0.0, 1.0, 0.0, 1.0,

									// Back face
									1.0, 0.0, 0.0, 1.0,
									0.0, 1.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,

									// Left face
									1.0, 0.0, 0.0, 1.0,
									0.0, 0.0, 1.0, 1.0,
									0.0, 1.0, 0.0, 1.0
							];
						}
					}
					break;
				}
				
				default: recognized = false;
			}
			
			if(recognized){
				obj.index = objArray.length;
				objArray.push(obj);
				initBuffers(obj.index);
			} else {
				console.log("createObject doesn't recognize input: " + objClass);
			}
	}


function setMatrixUniforms(perspectiveMatrix, modelViewMatrix) {
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, perspectiveMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, modelViewMatrix);
	}


function initBuffers(index) {
	
	let currObj = objArray[index];
	let bufferRef = currObj.objClass + "_position_buffer";
	gl.bindBuffer(gl.ARRAY_BUFFER, objArray[bufferRef]);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(currObj.properties.position), gl.STATIC_DRAW);
	
	bufferRef = currObj.objClass + "_color_buffer";
	gl.bindBuffer(gl.ARRAY_BUFFER, objArray[bufferRef]);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(currObj.properties.color), gl.STATIC_DRAW);

}

function drawScene() {
		
		let modelViewMatrix = mat4.create();
		let perspectiveMatrix = mat4.create();
	
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);

		mat4.perspective(perspectiveMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);        
		
		for (let i = 0; i < objArray.length; i++){
			
			let currObj = objArray[i];
			
			mat4.identity(modelViewMatrix);
			mat4.translate(modelViewMatrix, modelViewMatrix, currObj.place);
			
			let posBufferRef = currObj.objClass + "_position_buffer";
			
			gl.bindBuffer(gl.ARRAY_BUFFER, objArray[posBufferRef]);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, currObj.vertSize, gl.FLOAT, false, 0, 0);
		  
			let colBufferRef = currObj.objClass + "_color_buffer";
		  
			gl.bindBuffer(gl.ARRAY_BUFFER, objArray[colBufferRef]);
			gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, currObj.colorSize, gl.FLOAT, false, 0, 0);
			
			setMatrixUniforms(perspectiveMatrix, modelViewMatrix);
		
			switch (currObj.objClass) {
				case "triangle" : 
          console.log(currObj.objClass);
          
         // let muhTriangle = new BaseObject('t0', currObj.place, currObj.properties.position, currObj.properties.color, 'TRIANGLES', 3, 4);
          
          //muhTriangle.initBuffers(posBufferRef, colBufferRef, vertPosArr, vertColArr);

          //bind buffers set attributes
          //muhTriangle.setAttributes(posBufferRef, colBufferRef);  ---666

          //send model/view and perspective matrices to shaders
          //muhTriangle.setUniforms(perspectiveMatrix, modelViewMatrix);

          //draw the things in the buffer
          //gl.drawArrays(gl.TRIANGLES, 0, muhTriangle.numVert);
          
					gl.drawArrays(gl.TRIANGLES, 0, currObj.numVert); 
					break;
				case "square" :
					gl.drawArrays(gl.TRIANGLE_STRIP, 0, currObj.numVert);
					break;
				case "square-pyramid" :
					gl.drawArrays(gl.TRIANGLES, 0, currObj.numVert);
				default : 
					console.log("objectClass " + currObj.objClass + " not recognized in drawScene");
			}
		}
		
}

	return {
		
		"setMatrixUniforms" : function() {
			return setMatrixUniforms();
		},
		
		"initBuffers" : function() {
			return initBuffers();
		},
		
		"drawScene" : function() {
			return drawScene();
		},
		
		"createObject" : function(objClass, options) {
			return createObject(objClass, options);
		},
		
		"getObjArray" : function() {
			return objArray;
		}
		
	};

 }());

