class Sphere extends BaseObj {
	
	//The square Pyramid object is very basic, as of right now it appears to be the most basic 3D object so far.
	constructor(_name,_position,_color,_drawType,_radius,_latBand,_longBand) {
		
	
		//Calls parent constructor and passes the parameters in
		console.log("passing to super for sphere 1");
		super(_name,_position,0,_color,_drawType);
		
		console.log("Creating vertex and text 2");
		this.createVertexAndTextureData(_radius,_latBand,_longBand);
		
		console.log("creating index vertices 4");
		this.createIndexVerticeData(_latBand,_longBand);
		
		console.log("create color 4.a");
		this.setColor(_color);
		
		console.log("creating buffers 6");
		this.createBuffers();
	}
	
	createBuffers() {
		super.createBuffers();
		
		if(this.indexBuffer===undefined)
		{
			
			this.indexBuffer= gl.createBuffer()
			this.indexBufferItemSize=1;
			
			this.indexBufferNumItems=(this.vertexIndice.length)/(	this.indexBufferItemSize);
		}
	}// end buffer
	
	
	//gets the index buffer for the cube. The index buffers refers to the points that define the triangle for a face.
	getIndexBuffer() {
		
		return this.indexBuffer;
	}//end get indexbuffer
	
	//Gets the number of index buffer items
	getIndexBufferNumItems() {
		return this.indexBufferNumItems;
	}
	
	createVertexAndTextureData(_raduis,_lat,_long) {
		var textureCoordData=[];
		var vertexPositionData=[];
		var count=0;
		for (var latNumber=0; latNumber <= _lat; latNumber++) 
		{
			var theta = latNumber * Math.PI / _lat;
			var sinTheta = Math.sin(theta);
			var cosTheta = Math.cos(theta);

			for (var longNumber=0; longNumber <= _long; longNumber++) 
			{
				var phi = longNumber * 2 * Math.PI / _long;
				var sinPhi = Math.sin(phi);
				var cosPhi = Math.cos(phi);
				//normal vector = (sin(theta)*cos(phi), cos(theta), sin(theta)*sin(phi)) 
				var x = cosPhi * sinTheta;
				var y = cosTheta;
				var z = sinPhi * sinTheta;
				//we can assume that this texture is stretched at the top and the bottom
				// left to the right
				var u = 1 - (longNumber / _long);
				var v = 1 - (latNumber / _lat);

				//normal is a vector with a length of one that sticks directly out of a surface
				//Thus, For a sphere with a radius "1", that is the same as the vector that
				//goes from the center of the sphere to the surface
				//Thus, calculate Normal Vector with radius 1
				

				textureCoordData.push(u,v);

				//and then calculate vertice multiplying radius on normal vector
				vertexPositionData.push(_raduis * x,_raduis * y,_raduis * z);
count++;
			}//for
	
		}//for
		
		console.log("setting vertices 3",vertexPositionData.length,textureCoordData.length);
		this.setVertices(vertexPositionData);
		this.setTextureCoord(textureCoordData);
		console.log("extra count ->",count);
	}//end create
	
	
	createIndexVerticeData(_lat,_long) {
		var indexData = [];
        for (var latNumber=0; latNumber < _lat; latNumber++) 
		{
            for (var longNumber=0; longNumber < _long; longNumber++) 
			{
                var first = (latNumber * (_long + 1)) + longNumber;
                var second = first + _long + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }//end for
        }//end for
		
		console.log("seting index 5",indexData.length);
		this.setVertexIndice(indexData);
		
	}//end create index
	
	
	//Returns the vertex indices array.
	getVertexIndice() {
		
		if(this.vertexIndice===undefined)
		{
			console.log("vertex indices undefined,defaulting");
			this.vertexIndice=[
			0, 1, 2,      0, 2, 3,    // Front face
			4, 5, 6,      4, 6, 7,    // Back face
			8, 9, 10,     8, 10, 11,  // Top face
			12, 13, 14,   12, 14, 15, // Bottom face
			16, 17, 18,   16, 18, 19, // Right face
			20, 21, 22,   20, 22, 23  // Left face
			];
		
			return this.vertexIndice
		}
		else
		{
			return this.vertexIndice;
		}
		
	}
	
	setColor(_color) {
		var colorData=[];
		
		for(var i=0;i<this.getVertices().length;i++) 
		{
			colorData.push(_color);
		}
		super.setColor(colorData);
		
		console.log("sphere class color ",this.color.length);
	}
	
	
	setVertexIndice(_vertIndi) {
		if(_vertIndi!==undefined )
		{
			this.vertexIndice=_vertIndi;
		}
	}
	

}//end calss