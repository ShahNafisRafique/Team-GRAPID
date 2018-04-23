var cubeVertexTextureCoordBuffer

//This method creates any object that is going to be  made on startup.
function initBuffers() {
		
	//These two variables are simply here to store values that will then be passed to a constructor.
	var pyramid;
	var cube;

	//Makes an empty object which allows attributes to be set on it.
	pyramid=[];

	//This attribute stores the name of the object.
	pyramid.name="pyramid 1";

	//This variable stores the position relative to the eye for the object to be placed on.
	pyramid.position=[-1.5,0,-8.0];

	//This array is the position of the vertices relative to its position defined above. 
	pyramid.vertices= [
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

	//This array stores the colors of each vertices, which match up to the vertices above.
	pyramid.colors= [
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


	//Below is the values for the cube,which for the most part are the same as the pyramid

	//This is an empty object to which attributes can be assigned onto.
	cube=[];

	//Gives the object a name.
	cube.name="cube 1";

	//This stores the position of the object relative to the eye.
	cube.position=[1.5,0,-8.0];

	//This array stores the vertices position relative to the object position defined above.
	cube.vertices=[
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
	];




	//Creates the color array for the cube.
	colors = [
		[1.0, 0.0, 0.0, 1.0], // Front face-RED=RED
		[1.0, 1.0, 0.0, 1.0], // Back face-RED+GREEN=yellow?
		[0.0, 1.0, 0.0, 1.0], // Top face-GREEN=GREEN
		[1.0, 0.5, 0.5, 1.0], // Bottom face-idk
		[1.0, 0.0, 1.0, 1.0], // Right face-RED+BLUE=purple?
		[0.0, 0.0, 1.0, 1.0]  // Left face-BLUE=BLUE
	];

	
	var unpackedColors = [];
	for (var i in colors) {
		var color = colors[i];
		
		for (var j=0; j < 4; j++) {
			unpackedColors = unpackedColors.concat(color);
		}
	}

	//Assings the output of combining all the colors of the vertices from above to the color array attribute.
	cube.colors=unpackedColors;



	//This array below differs from the pyramid , this array tells webgl what triangles to draw for the cube. A square,which is a face for a cube, can be draw as 
	//two triangles.This tells webgl which vertives relate to which triangle on each face.
	cube.indexBuffer= gl.createBuffer()
	cube.vertexIndices= [
		0, 1, 2,      0, 2, 3,    // Front face
		4, 5, 6,      4, 6, 7,    // Back face
		8, 9, 10,     8, 10, 11,  // Top face
		12, 13, 14,   12, 14, 15, // Bottom face
		16, 17, 18,   16, 18, 19, // Right face
		20, 21, 22,   20, 22, 23  // Left face
	];

	//With object variable declaration done,now its time to actually create the objects.
	
	
	//With the variables above defined, pass them into the cube constructor.
	var cubeTest=new Cube("cube 1",cube.position,cube.vertices,unpackedColors,gl.TRIANGLE_STRIP,cube.vertexIndices);

	//The three varialbes below are set so that the cube will have some rotation properties and not the default 0's. 
	cubeTest.setRotationAxis([1,1,1]);
	cubeTest.setRotationDegree(0);
	cubeTest.setRotationSpeed(-75);
	
	cubeVertexTextureCoordBuffer = gl.createBuffer()//
    
	
	//Since the cube is going to have a texture,this array stores the coordinates of the texture.
	var textureCoordsCube = [
		// Front face
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,

		// Back face
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,

		// Top face
		0.0, 1.0,
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,

		// Bottom face
		1.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,
		1.0, 0.0,

		// Right face
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
		0.0, 0.0,

		// Left face
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0,
		];
	
    cubeVertexTextureCoordBuffer.itemSize = 2;
    cubeVertexTextureCoordBuffer.numItems = 24;
	
	
	
	cubeTest.setTexture(textureList[0],textureCoordsCube);

	//Just like the cube above, the variable defined earlier are being passed into the pyramid constructor.
	var pyramidTest = new SquarePyramid("pyramid test 1",pyramid.position,pyramid.vertices,pyramid.colors,gl.TRIANGLES);
	
	//Just like the cube above, these three variables are being set so that the pyramid rotates.
	pyramidTest.setRotationAxis([0,1,0]);
	pyramidTest.setRotationDegree(50);
	pyramidTest.setRotationSpeed(90);


	
	var textureCoordsPyr = [
		// Front face
		0.50, 1.0,
		0.0, 0.0,
		1.0, 0.0,
		


		// Back face
		0.50, 1.0,
		0.0, 0.0,
		1.0, 0.0,

		// Top face
		0.50, 1.0,
		0.0, 0.0,
		1.0, 0.0,

		// Bottom face
		0.50, 1.0,
		0.0, 0.0,
		1.0, 0.0,

	
		];
	
	pyramidTest.setTexture(textureList[0],textureCoordsPyr);
	
	
	//These two lines adds the two objects made to teh global array that has all objects that are to be renedered on screen.
	objectsToRender.push(pyramidTest);
	objectsToRender.push(cubeTest);


	//This loop goes through each object and binds the buffers for each variable in the shaders
	for(var i=0;i<objectsToRender.length;i++)
	{
		var initObj=objectsToRender[i];
		
		
		//This binds the position buffer,which each object will have.
		gl.bindBuffer(gl.ARRAY_BUFFER, initObj.getPositionBuffer());		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getVertices()), gl.STATIC_DRAW);
	   
	   
	   
		gl.bindBuffer(gl.ARRAY_BUFFER,initObj.getTextureCoordBuffer());
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getTextureCoord()), gl.STATIC_DRAW);

		//This if statement decides if an object has a texture set,if so the texture buffer will be bound and color disabled, else color will be enabled and texture disabled.
	
		
		gl.bindBuffer(gl.ARRAY_BUFFER, initObj.getColorBuffer());			   
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getColor()), gl.STATIC_DRAW);
		

		
		//This if statment checks if a object has vertex indices, if not then those buffers wont be bound.
		if(!(initObj.getVertexIndice()===undefined))
		{
			
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, initObj.getIndexBuffer());
		
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(initObj.getVertexIndice()), gl.STATIC_DRAW);
		}
			
		


	}
		
}