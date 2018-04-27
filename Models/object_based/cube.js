class Cube extends BaseObj {

	//Assings the parameters to attributes of the cube and calls parent constructor.
	constructor(_name,_position,_vertices,_color,_drawType,_vertexIndices) {

	
		super(_name,_position,_vertices,_color,_drawType);
		
		this.vertexIndice=_vertexIndices;
		
		this.createBuffers();
		
	}// end constructor

	//Creates the buffers for the cube
	createBuffers() {
		super.createBuffers();
		
		if(this.indexBuffer===undefined) {
			
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
	
	//Returns the vertex indices array.
	getVertexIndice() {
		
		if(this.vertexIndice===undefined) {

			this.vertexIndice = defaults.cubeIndexArray;

			console.log("vertex indices undefined,defaulting");
			this.vertexIndice= defaults.cubeIndexArray;

		
			return this.vertexIndice
		}
		else
		{
			return this.vertexIndice;
		}
		
	}
	
	//Sets the vertx indices but not before checking it.
	
	setVertexIndice(_vertIndi) {
		if(_vertIndi!==undefined && (_vertIndi.length==this.vertices.length/3)) {
			this.vertexIndice=defaults.cubeVertexIndices;
		}
	}
	
	
	
	
	
}