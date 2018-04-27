/* 
Contents: Scene Object Module - Provides methods for the creation of renderable geometric objects.

Authors: Matt Smitherman, Shah Nafis Rafique, Yoonah Lee

Last Updated: 4/26/2018
*/

"use strict";
	
 var sceneObjectModule = (function () {
	 
	// declare and initialize an empty array to hold scene objects.
  
	var objArray = [];
  
  //attach empty object literal to object array to track types of 
  //objects that have been created.
	
	objArray.activeClasses = {};
	/* 
    When a new type of object is create, createBuffers 
    creates a webgl buffer for each property that kind of object has.
    
    @params obj  type: undefined   object with properties attribute
  */
	function createBuffers(obj) {
    
    //Declare object property and buffer idententifiers.
    
		var bufferKey;
    var props;
    
    //for each key in the object's properties dictionary
    
		props = Object.keys(obj.properties);
    
		for(let prop of props){
      
      //create a key from object type and property 
      //attach it to the object array 
      //and set it's value to a new webgl buffer
      
			bufferKey = obj.type + prop;
			objArray[bufferKey] = gl.createBuffer();
			
    }
		
	}
  
	
	function createObject(_type, _options) {
		
		let obj = {};
		obj.type = _type;
		obj.properties = {
			"_vertexArray" : [],
			"_color" : []
		};
    
		if(_type == "cube") obj.properties._indices = _options.vertexIndices;
		let recognized = true;
    
		if(!objArray.activeClasses[_type]){
      
			createBuffers(obj);
      
      objArray.activeClasses[_type] = _type;
			
		}
	
			switch (_type) {
				
				case "triangle" : {
					
					obj.vertSize = 3;
					obj.numVert = 3;
					obj.colorSize = 4;
					obj.numColor = 3;
				
					obj.properties._vertexArray = defaults.triangleVertexArray;
						
					//check if there are parameters for place and color, if not, use default values
					if (!_options){  
				
						obj.place = defaults.position; 
							
						obj.properties._color = defaults.triangleColorArray;
						
					} else {
					
						if (_options.place && _options.color) {
              
							obj.place = _options.place;
							obj.properties._color = _options.color;
              
						} else if (_options.color) {
              
							obj.place = defaults.position;
							obj.properties._color = _options.color;
              
						} else if(_options.place) {
              
							obj.place = _options.place;
							obj.properties._color = defaults.triangleColorArray;
              
						}
            
					}
					
					break;
				}
					
				case "square" : {
          
					obj.vertSize = 3;
					obj.numVert = 4;
					obj.colorSize = 4;
					obj.numColor = 4;
					
					obj.properties._vertexArray = defaults.squareVertexArray;
					
					if (!_options){  
	
						obj.place = defaults.position; 
							
						obj.properties._color = defaults.vertColor(obj.numVert);
						
					} else {
					
						if (_options.place && _options.color) {
							obj.place = _options.place;
							obj.properties._color = _options.color;
						} else if (_options.color) {
							obj.place = defaults.position;
							obj.properties._color = _options.color;
						} else if(_options.place){
							obj.place = _options.place;
							obj.properties._color = defaults.vertColor(obj.numVert);
						}
					}
					
					break;
				}	
				
				case "square-pyramid" : {
					
					obj.vertSize = 3;
					obj.numVert = 12;
					obj.colorSize = 4;
					obj.numColor = 12;
				
					obj.properties._vertexArray = defaults.squarePyramidVertexArray;
						
					//check if there are parameters for size and color, if not, use default values
					if (!_options){  
				
						obj.place = defaults.position; 
							
						obj.properties._color = defaults.vertColor(obj.numVert);
						
					} else {
					
						if (_options.place && _options.color) {
							obj.place = _options.place;
							obj.properties._color = _options.color;
						} else if (_options.color) {
							obj.place = defaults.position;
							obj.properties._color = _options.color;
						} else if(_options.place){
							obj.place = _options.place;
							obj.properties._color = defaults.vertColor(obj.numVert);
						}
            
					}
          
					break;
				}
				
				case "cube" : {
					
					obj.vertSize = 3;
					obj.colorSize = 4;
					let position = defaults.position;
					let vertArray = defaults.cubeVertexArray;
					let vertexIndices = defaults.cubeVertexIndices;
					
					let cube = new Cube("cube", position, vertArray, _options.color, gl.TRIANGLE_STRIP, vertexIndices);
					//obj.properties._vertexArray = cube.getVertices();
          obj.properties._vertexArray = vertArray;
					obj.properties._color = cube.getColor();
					obj.properties._indices = cube.getVertexIndice();
					obj.place = position;
          obj.numVert = (vertArray.length + vertexIndices.length)/obj.vertSize;
          
					
					break;
          
				}
				
				default: recognized = false;
        
			}
			
			if(recognized){
        
				obj.index = objArray.length;
				objArray.push(obj);
				init.buffers(obj, objArray);
        
			} else {
        
				console.log("createObject doesn't recognize input: " + type);
        
			}
	}


function setMatrixUniforms(_shaderProgram, _perspectiveMatrix, _modelViewMatrix) {
	gl.uniformMatrix4fv(_shaderProgram.pMatrixUniform, false, _perspectiveMatrix);
	gl.uniformMatrix4fv(_shaderProgram.mvMatrixUniform, false, _modelViewMatrix);
	}


function drawScene(_shaderProgram) {
		
		let modelViewMatrix = mat4.create();
		let perspectiveMatrix = mat4.create();
	
		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		gl.clear(gl.COLOR_BUFFER_BIT || gl.DEPTH_BUFFER_BIT);

		mat4.perspective(perspectiveMatrix, 45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);        
		
		for (let i = 0; i < objArray.length; i++){
			
			let currObj = objArray[i];
			
			mat4.identity(modelViewMatrix);
			mat4.translate(modelViewMatrix, modelViewMatrix, currObj.place);
			mat4.rotateY(modelViewMatrix, modelViewMatrix, 30);
			
			let posBufferRef = currObj.type + "_vertexArray";
			gl.bindBuffer(gl.ARRAY_BUFFER, objArray[posBufferRef]);
			gl.vertexAttribPointer(_shaderProgram.vertexPositionAttribute, currObj.vertSize, gl.FLOAT, false, 0, 0);
		  
			let colBufferRef = currObj.type + "_color";
		  
			gl.bindBuffer(gl.ARRAY_BUFFER, objArray[colBufferRef]);
			gl.vertexAttribPointer(_shaderProgram.vertexColorAttribute, currObj.colorSize, gl.FLOAT, false, 0, 0);
       
       /* DEBUGGING STATEMENTS   
       
        console.log(_shaderProgram);
        console.log(gl.getProgramParameter(_shaderProgram, gl.ACTIVE_ATTRIBUTES));
           */
      
			if(currObj.type == "cube"){
			
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, objArray["cube_indices"]);
        
			}
			
			setMatrixUniforms(_shaderProgram, perspectiveMatrix, modelViewMatrix);
		
			switch (currObj.type) {
				case "triangle": 
        
      
					gl.drawArrays(gl.TRIANGLES, 0, currObj.numVert); 
          
					break;
				case "square" :
        
					gl.drawArrays(gl.TRIANGLE_STRIP, 0, currObj.numVert);
          
					break;
				case "square-pyramid" :
        
					gl.drawArrays(gl.TRIANGLES, 0, currObj.numVert);
          
					break;
				case "cube" : 
        
					gl.drawElements(gl.TRIANGLES, currObj.numVert, gl.UNSIGNED_SHORT, 0);
          
					break;
				default : 
        
					console.log("object type " + currObj.type + " not recognized in drawScene");
			}
		}
		
}

	return {
		
		"setMatrixUniforms" : function(_shaderProgram, _perspectiveMatrix, _modelViewMatrix) {
			return setMatrixUniforms(_shaderProgram, _perspectiveMatrix, _modelViewMatrix);
		},
		
		"drawScene" : function(_shaderProgram) {
			return drawScene(_shaderProgram);
		},
		
		"createObject" : function(type, options) {
			return createObject(type, options);
		},
		
		"getObjArray" : function() {
			return objArray;
		}
		
	};

 }());

