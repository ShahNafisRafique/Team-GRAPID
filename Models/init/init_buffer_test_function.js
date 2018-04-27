var pyramidTest;
var cubeTest;
var pyramidTest2;
var cubeTest2;
var sphereTest;
var sphereGround;
var sphereMoon;
var sphereMars;
var sphereSun;
var sphereRocket;
var cubeRocket;
var sphereRocket2
//This variable is created to help with storing some data that will be used to create a cube.
//var cubeVertexTextureCoordBuffer;
	
//These two variables are simply here to store values that will then be passed to a constructor.
var pyramid;
var cube;

function objectTestFunction() {
	
	//Makes an empty object which allows attributes to be set on it.
	pyramid=[];

	//This attribute stores the name of the object.
	pyramid.name="pyramid 1";

	//This variable stores the position relative to the eye for the object to be placed on.
	pyramid.position=[-3,0,-8.0];

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

	//This array stoes the position of the texture on each vertex.
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
	
	//------------------------------------------------------------------------------end pyramid 1----------------------------------------------------------------------------------------------------

	//This is an empty object to which attributes can be assigned onto for the cube.
	cube=[];

	//Gives the object a name.
	cube.name="cube 1";

	//This stores the position of the object relative to the eye.
	cube.position=[3,.75,-8.0];

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


	//Specifies the triangles for the cube so that webgl knows which triangles make up the cubes face.
	cube.indexBuffer= gl.createBuffer()
	cube.vertexIndices= [
		0, 1, 2,      0, 2, 3,    // Front face
		4, 5, 6,      4, 6, 7,    // Back face
		8, 9, 10,     8, 10, 11,  // Top face
		12, 13, 14,   12, 14, 15, // Bottom face
		16, 17, 18,   16, 18, 19, // Right face
		20, 21, 22,   20, 22, 23  // Left face
	];

	
	//Creates a buffer to hold the texture coordinates for the cube
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
	//Stores data based off the textureCoord array
    cubeVertexTextureCoordBuffer.itemSize = 2;
    cubeVertexTextureCoordBuffer.numItems = 24;
	
	//-------------------------------------------------------------end cube 1--------------------------------------------------------------------------------------------------------------------------


	var pyramid2=[];
	pyramid2.vertices= [
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

	pyramid2.colors= [
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

	
	pyramid2.pos=[0,5,-20];
	
	
	
	//--------------------------------------------------------------------------- end pyramid 2-----------------------------------------------------------------------------
	
	var cube2=[];
	cube2.pos=[-3,1,-15];
	
	cube2.vertices=[
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
	
	
	
	
	var colors2 = [
		[1.0, 0.0, 0.0, 1.0], // Front face-RED=RED
		[1.0, 1.0, 0.0, 1.0], // Back face-RED+GREEN=yellow?
		[0.0, 1.0, 0.0, 1.0], // Top face-GREEN=GREEN
		[1.0, 0.5, 0.5, 1.0], // Bottom face-idk
		[1.0, 0.0, 1.0, 1.0], // Right face-RED+BLUE=purple?
		[0.0, 0.0, 1.0, 1.0]  // Left face-BLUE=BLUE
	];

	
	var unpackedColors2 = [];
	for (var i in colors) {
		var color = colors[i];
		
		for (var j=0; j < 4; j++) {
			unpackedColors2 = unpackedColors2.concat(color);
		}
	}
	
	cube2.color=unpackedColors2;
	
	
	
	
	//---------------------------------------------- end data creation-----------------------------------------------------------------------
	
	//Creates the world sphere that will have the sky texture.
	sphereTest=new Sphere("Sphere test 1",[0,0,-10],[1,1,1,1],gl.TRIANGLES,20,30,30);
	sphereTest.setRotationAxis([0,1,0]);
	sphereTest.setRotationDegree(50);
	sphereTest.setRotationSpeed(9);
	sphereTest.setTexture(5,sphereTest.getTextureCoord(),true);

	
	
	//Creates ground 'sphere' thats actually a diamond that will have the grass texture.
	sphereGround=new Sphere("Sphere ground",[0,-1,0],[1,1,1,1],gl.TRIANGLES,100,2,2);
	sphereGround.setRotationAxis([1,0,0]);
	sphereGround.setRotationDegree(90);
	sphereGround.setTexture(9,sphereGround.getTextureCoord(),true);
	
	//Creates the moon sphere that will have the moon texture.
	sphereMoon=new Sphere("Sphere moon",[-4,3,-10],[1,1,1,1],gl.TRIANGLES,1,30,30);
	sphereMoon.setRotationAxis([0,1,0]);
	sphereMoon.setRotationDegree(90);
	sphereMoon.setRotationSpeed(-10);
	sphereMoon.setTexture(4,sphereMoon.getTextureCoord(),true);
	
	//Creates the sun sphere that will have the sun texture.
	sphereSun=new Sphere("Sphere sun",[4,3,-10],[1,1,1,1],gl.TRIANGLES,2,30,30);
	sphereSun.setRotationAxis([0,-1,0]);
	sphereSun.setRotationDegree(90);
	sphereSun.setRotationSpeed(-10);
	sphereSun.setTexture(10,sphereSun.getTextureCoord(),true);
	
	//Creates the cube rocket that will have the metal rocket window texture.
	cubeRocket=new Cube("cube rocket",[0,3,-20],cube.vertices,unpackedColors,gl.TRIANGLE_STRIP,cube.vertexIndices);
	cubeRocket.setRotationAxis([0,1,0]);
	cubeRocket.setRotationDegree(00);
	cubeRocket.setRotationSpeed(-500);
	cubeRocket.setTexture(7,textureCoordsCube,true);
	
	//Creates ones of the flames for the rocket sphere, has the fire texture.
	sphereRocket=new Sphere("Sphere rocket",[0,2,-20],[1,1,1,1],gl.TRIANGLES,1,30,30);
	sphereRocket.setRotationAxis([0,1,0]);
	sphereRocket.setRotationDegree(90);
	sphereRocket.setRotationSpeed(-500);
	sphereRocket.setTexture(8,sphereRocket.getTextureCoord(),true);
	
	//Creates the 2nd fire sphere that also has the fire texture.
	sphereRocket2=new Sphere("Sphere moon",[0,.5,-20],[1,1,1,1],gl.TRIANGLES,1.5,3,5);
	sphereRocket2.setRotationAxis([0,1,0]);
	sphereRocket2.setRotationDegree(-10);
	sphereRocket2.setRotationSpeed(-400);
	sphereRocket2.setTexture(8,sphereRocket2.getTextureCoord(),true);
	
	//Creates the 1st pyramid and set a rotation to it and set the texture for it.
	pyramidTest = new SquarePyramid("pyramid test 1",pyramid.position,pyramid.vertices,pyramid.colors,gl.TRIANGLES);
	
	pyramidTest.setRotationAxis([0,1,0]);
	pyramidTest.setRotationDegree(50);
	pyramidTest.setRotationSpeed(90);
	
	pyramidTest.setTexture(1,textureCoordsPyr,true);
	
	
	
	//Creates the 1st cube and sets rotation and texture properties.
	cubeTest =new Cube("cube 1",cube.position,cube.vertices,unpackedColors,gl.TRIANGLE_STRIP,cube.vertexIndices);
	
	cubeTest.setRotationAxis([1,1,1]);
	cubeTest.setRotationDegree(0);
	cubeTest.setRotationSpeed(-75);
	
	cubeTest.setTexture(3,textureCoordsCube,true);
	
	
	
	//Creates the 2nd pyramid and sets rotation and texture properties
	pyramidTest2 = new SquarePyramid("pyramid test 2",pyramid2.pos,pyramid2.vertices,pyramid2.colors,gl.TRIANGLES);
	
	pyramidTest2.setRotationAxis([0,1,0]);
	pyramidTest2.setRotationDegree(00);
	pyramidTest2.setRotationSpeed(-500);
	
	pyramidTest2.setTexture(6,textureCoordsPyr,true);
	
	
	//Creates the 2nd cube which has 'no texture' and only color and sets rotation properties.
	cubeTest2 =new Cube("cube 2",cube2.pos,cube2.vertices,cube2.color,gl.TRIANGLE_STRIP,cube.vertexIndices);
	
	cubeTest2.setRotationAxis([1,.9,0]);
	cubeTest2.setRotationDegree(60);
	cubeTest2.setRotationSpeed(80);
	
	cubeTest2.setTexture(0,textureCoordsCube,false);
	


}//end test function