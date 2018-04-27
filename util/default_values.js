/* 
Content: default_values.js provides
default values for scene-object initialization

Authors: Matt Smitherman, Shah Nafis Rafique, Yoonah Lee

Last Updated: 4/26/2018
 */

const defaults = {
  
  
  "rotationAxis" : [1,0,0],
  
  "rotationDegree" : 0,
  
  "rotationSpeed" : 0,
  
  "color" : [0.0,0.0,0.0,0.0],

  "vertColor" :  function(_numVert) { 
    var unpackedColors = [];
    //Creates the white color set.
    for (var j=0; j < _numVert; j++) {
      unpackedColors = unpackedColors.concat([0.0,0.0,0.0,0.0]);
    }
    
    return unpackedColors;
  },
  
  "cubeIndexArray" : [
			0, 1, 2,      0, 2, 3,    // Front face
			4, 5, 6,      4, 6, 7,    // Back face
			8, 9, 10,     8, 10, 11,  // Top face
			12, 13, 14,   12, 14, 15, // Bottom face
			16, 17, 18,   16, 18, 19, // Right face
			20, 21, 22,   20, 22, 23  // Left face
	],    
  
  "triangleVertexArray" : [
    0.0,  1.0,  0.0,
		-1.0, -1.0,  0.0,
		1.0, -1.0,  0.0
	],
  
  "position" : [0.0, 0.0, -7.0],
  
  /* "triangleColorArray" : [
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0,
			0.0, 0.0, 1.0, 1.0
	], */
  
  "squareVertexArray" : [
			1.0,  1.0,  0.0,
			-1.0,  1.0,  0.0,
      1.0, -1.0,  0.0,
		  -1.0, -1.0,  0.0
	],
  
  /* "squareColorArray" : [
    1.0,  1.0,  0.0,
		-1.0,  1.0,  0.0,
		1.0, -1.0,  0.0,
		-1.0, -1.0,  0.0
	], */
  
  /* "squarePyramidColorArray" : [  
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
									]; */
  
  "squarePyramidVertexArray" : [
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
	],
  
  "cubeVertexArray" : [
								// Front face
								-1.0, -1.0,  1.0,
								 1.0, -1.0,  1.0,
								 1.0,  1.0,  1.0,
								-1.0,  1.0,  1.0,

								// Back face
								-1.0, -1.0, -1.0,
								-1.0,  1.0, -1.0,
								 1.0,  1.0, -1.0,
								 1.0, -1.0, -1.0,

								// Top face
								-1.0,  1.0, -1.0,
								-1.0,  1.0,  1.0,
								 1.0,  1.0,  1.0,
								 1.0,  1.0, -1.0,

								// Bottom face
								-1.0, -1.0, -1.0,
								 1.0, -1.0, -1.0,
								 1.0, -1.0,  1.0,
								-1.0, -1.0,  1.0,

								// Right face
								 1.0, -1.0, -1.0,
								 1.0,  1.0, -1.0,
								 1.0,  1.0,  1.0,
								 1.0, -1.0,  1.0,

								// Left face
								-1.0, -1.0, -1.0,
								-1.0, -1.0,  1.0,
								-1.0,  1.0,  1.0,
								-1.0,  1.0, -1.0
								],
                
  "cubeVertexIndices" : [
											0, 1, 2,      0, 2, 3,    // Front face
											4, 5, 6,      4, 6, 7,    // Back face
											8, 9, 10,     8, 10, 11,  // Top face
											12, 13, 14,   12, 14, 15, // Bottom face
											16, 17, 18,   16, 18, 19, // Right face
											20, 21, 22,   20, 22, 23  // Left face
										],
                    
  "vertexSize" : 3,
  
  "colorSize" : 4,
  
  
};

console.log("working");
