//constructoor
	//name of the object
	//position of the obj w.r.t origin
	//all the vertices *note should add size check*
	//color *note add size check*
	//vertexIndices for the vertices of the triangles *note add size check
	//@@@@@ variables inside the constructor here have values,but outside they are undefined,aka in the setters down below
	var positionBufferNumItems;
	
		
		
		var Cube = function(name,position,vertices,colors,vertexIndices,drawType) {
			var me = this;
			
			this.name=name;
			this.position=position;
			this.vertices=vertices;
			this.colors=colors;
	
			this.vertexIndices=vertexIndices;
			this.drawType=drawType;
			
			//based off above
			
			this.positionBuffer=gl.createBuffer();
			this.positionBufferItemSize=3;
			this.positionBufferNumItems=(this.vertices.length)/(this.positionBufferItemSize);
			
			this.colorBuffer= gl.createBuffer();
			this.colorBufferItemSize=4;
			this.colorBufferNumItems=(this.colors.length)/(this.colorBufferItemSize);
			
			this.indexBuffer= gl.createBuffer()
			this.indexBufferItemSize=1;
			this.indexBufferNumItems=(this.vertexIndices.length)/(	this.indexBufferItemSize);
			
			this.rotationAxis=[0,0,0];
			this.rotationDegree=0;
			this.rotationSpeed=0;
			
			
		


//setter functions
	
	//sets colors,defaults to black if invalid size or nothing is passed
		this.setColor = function(color) {	
			
			if((color===undefined)|| ((color.length/4)!=me.positionBufferNumItems))
			{
				console.log("defaulting colour to black");
				
				
				var unpackedColors = [];
				for (var i in colors) {
					var color = colors[i];
					for (var j=0; j < 4; j++) {
						unpackedColors = unpackedColors.concat([0.0,0.0,0.0,0.0]);
					}
				}
				
				me.colors=unpackedColors;
			}
			else
			{
				me.colors=color;
			}
		}

	//sets name of object
		this.setName = function(name) {
			me.name=name;
		}
		
	//sets position of object,defaults to [0,0,0] if invalid or no input given
		this.setPosition = function(pos) {
			if((pos===undefined) || (pos.length!=3))
			{
				console.log("defaulting position vector");
				me.position=[0,0,0];
			}
			else
			{
				me.position=pos;
			}
		}

	//sets rotation axis, defaults to no rotation if invalid or no input given
		this.setRotationAxis = function(rotAxis) {
			if((rotAxis===undefined) || (rotAxis.length!=3))
			{
				me.rotationAxis=[0,0,0];
				console.log("defaulting to no rotation axis");
			}
			else
			{
				me.rotationAxis=rotAxis;
			}
			
		}
		
	//sets degree to rotate by, if no or invalid input defaults to 0	
		this.setRotationDegree = function(rotDeg) {
			if((rotDeg===undefined) || (typeof rotDeg != 'number'))
			{
				me.rotationDegree=0;
				console.log("defaulting to no rotation degree");
			}
			else
			{
				me.rotationDegree=rotDeg;
			}
			
		}
		
	//sets speed to rotate by, if no or invalid input defaults to 0	
		this.setRotationSpeed = function(rotSpeed) {
			if((rotSpeed===undefined) || (typeof rotSpeed != 'number'))
			{
				me.rotSpeed=0;
				console.log("defaulting to no rotation degree");
			}
			else
			{
				me.rotationSpeed=rotSpeed;
			}
			
		}

	//sets vertices,defaults if invalid or no input given to 1x1x1 cube
		this.setVertices = function(vertices) {
			if((vertices===undefined))
			{
				console.log("defaulting to 1x1x1 cube");
				me.vertices=[
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
			}
			else
			{
				me.vertices=vertices;
			}
		}

	//sets the vertex indicies,aka the triangles of a square's face and which vertex is part of wat triangle, defaults to default one???
		this.setVertexIndices = function(vertIndi) {
			if((vertIndi===undefined))
			{
				console.log("defaulting vertex indicies");
				me.vertexIndices=[
					0, 1, 2,      0, 2, 3,    // Front face
					4, 5, 6,      4, 6, 7,    // Back face
					8, 9, 10,     8, 10, 11,  // Top face
					12, 13, 14,   12, 14, 15, // Bottom face
					16, 17, 18,   16, 18, 19, // Right face
					20, 21, 22,   20, 22, 23  // Left face
				];
			}
			else
			{
				me.vertexIndices=vertIndi;
			}
		}
	};




