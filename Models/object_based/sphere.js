class Sphere extends BaseObj {
	
	//The square Pyramid object is very basic, as of right now it appears to be the most basic 3D object so far.
	constructor(_name,_position,_vertices,_color,_drawType,_radius,_latBand,_longBand,_vertexIndices) {
		this.createSphereData(_radius,_latBand,_longBand)
	
	
		//Calls parent constructor and passes the parameters in
		super(_name,_position,this.vertices,_color,_drawType);
		
		//This creates the buffer objects.
		this.createBuffers();
		
	}
	
	
	//Creates the buffers for the sphere
	createBuffers() {
		super.createBuffers();
		
		if(this.indexBuffer===undefined)
		{
			
			this.indexBuffer= gl.createBuffer()
			this.indexBufferItemSize=1;
			this.indexBufferNumItems=(this.vertexIndice.length)/(	this.indexBufferItemSize);
		}
	}// end buffer
	
	
	function createSphereData(_radius,_latBand,_longBand) {

		var latitudeBands = _latBand;
        var longitudeBands = _longBand;
        var radius = _radius;
		
        var vertexPositionData = [];
        var normalData = [];
        var textureCoordData = [];
		
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
				
				//?
                normalData.push(x,y,z);
				//send to text
                textureCoordData.push(u,v);
				//send to vertex
                vertexPositionData.push(radius * x,radius * y,radius * z);

            }//end long
        }//end lat
		
		this.textureCoord=textureCoordData;
		this.normal=normalData;
		this.vertices=vertexPositionData;
		
	}//end sphereVertices function
	
	
	function createVerticeIndex() {
		 var indexData = [];
        for (var latNumber=0; latNumber < latitudeBands; latNumber++) {
            for (var longNumber=0; longNumber < longitudeBands; longNumber++) {
                var first = (latNumber * (longitudeBands + 1)) + longNumber;
                var second = first + longitudeBands + 1;
                indexData.push(first);
                indexData.push(second);
                indexData.push(first + 1);

                indexData.push(second);
                indexData.push(second + 1);
                indexData.push(first + 1);
            }
        }
	}//end create vertex index


}//end calss