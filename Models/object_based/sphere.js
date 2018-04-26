class Sphere extends BaseObj {
	
	//The square Pyramid object is very basic, as of right now it appears to be the most basic 3D object so far.
	constructor(_name,_position,_color,_drawType,_radius,_latBand,_longBand) {
		
	
		//Calls parent constructor and passes the parameters in
		super(_name,_position,0,_color,_drawType);
		
		//This creates the vertices and the textureCoord
		this.createSphereData(_radius,_latBand,_longBand);
		this.setVertices(this.getVertices());
		
		
		this.vertexIndice=this.createVerticeIndex(_latBand,_longBand);
		
		//This creates the buffer objects.
		this.createBuffers();
	}
	
	
	//Creates the buffers for the sphere
	createBuffers() {
		super.createBuffers();
		
		if(this.indexBuffer===undefined)
		{
			
			this.indexBuffer= gl.createBuffer();
			
			this.indexBufferItemSize=1;
			
			this.indexBufferNumItems=(this.vertexIndice.length)/(	this.indexBufferItemSize);
		}
	}// end buffer
	
	
	createSphereData(_radius,_latBands,_longBands) {

		var latitudeBands = _latBands;
        var longitudeBands = _longBands;
        var radius = _radius;
		
        var vertexPositionData = [];
        var normalData = [];
        var textureCoordData = [];
		var count=0;
		//console.log(count);
        for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
			
            var theta = latNumber * Math.PI / latitudeBands;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);
			
            for (var longNumber=0; longNumber <= longitudeBands; longNumber++) {
				
                var phi = longNumber * 2 * Math.PI / longitudeBands;
                var sinPhi = Math.sin(phi);
                var cosPhi = Math.cos(phi);
                var x = cosPhi * sinTheta;
                var y = cosTheta;
                var z = sinPhi * sinTheta;
                var u = 1 - (longNumber / longitudeBands);
                var v = 1 - (latNumber / latitudeBands);
				count++;
				//?
                normalData.push(x,y,z);
				//send to text
                textureCoordData.push(u,v);
				//send to vertex
                vertexPositionData.push(radius * x,radius * y,radius * z);

            }//end long
        }//end lat
		//	console.log(count);
		this.textureCoord=textureCoordData;
		this.normal=normalData;
		this.setVertices(vertexPositionData);
	//	console.log(vertexPositionData.length," hi");
	}//end sphereVertices function
	
	createColorData(_vertices) {
		var colorData=[];
		for(var i=0;i<_vertices.length/3;i++)
		{
			colorData.puhs(_color);
		}
		
		this.setColor(colorData);
	}
	
	
	createVerticeIndex(_latBands,_longBands) {
		 var indexData = [];
        for (var latNumber=0; latNumber < _latBands; latNumber++) {
            for (var longNumber=0; longNumber < _longBands; longNumber++) {
                var first = (latNumber * (_longBands + 1)) + longNumber;
                var second = first + _longBands + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }
	
		return indexData;
	}//end create vertex index

	
	//gets the index buffer for the cube. The index buffers refers to the points that define the triangle for a face.
	getIndexBuffer() {
		
		return this.indexBuffer;
	}//end get indexbuffer
	
	//Gets the number of index buffer items
	getIndexBufferNumItems() {
		
		return this.indexBufferNumItems;
	}
	
	//Returns the vertex indices array.
	getVertexIndice() {
		
		if(this.vertexIndice===undefined)
		{
			///////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ find a spheres defualt vertixc indices.
		
			return this.vertexIndice
		}
		else
		{
			//console.log(this.vertexIndice.length,"asdasdas");
			return this.vertexIndice;
		}
		
	}
	
	//Sets the vertx indices but not before checking it.
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ add default vertice?
	setVertexIndice(_vertIndi) {
		if(_vertIndi!==undefined && (_vertIndi.length==this.vertices.length/3))
		{
			this.vertexIndice=_vertIndi;
		}
	}
	
	

}//end calss