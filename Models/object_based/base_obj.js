class BaseObj {
	
	//Sets basic attributes of the objects that are passed in.
	constructor(_name,_position,_vertices,_color,_drawType) {

		this.name=_name;
		this.position=_position;
		this.vertices=_vertices;
		this.color=_color;
		this.drawType=_drawType;
		
		this.hasTexture=false;
		this.hasColor=true;
		
		
		
	}
	
	//This creates the buffers based of if the buffers are not created.
	createBuffers() {
		if(this.positionBuffer ===undefined &&  this.vertices !==undefined)
		{
			//console.log("no position and vertice buffer made,creating ",this.name);
			this.positionBuffer=gl.createBuffer();
			this.positionBufferItemSize=3;
			this.positionBufferNumItems=(this.vertices.length)/(this.positionBufferItemSize);
	
		}
		
		if(this.colorBuffer===undefined)
		{
			//console.log("no color buffer has been made, creating now ",this.name);
			this.colorBuffer= gl.createBuffer();
			this.colorBufferItemSize=4;
			console.log("color length",this.getColor().length);
			this.colorBufferNumItems=(this.color.length)/(this.colorBufferItemSize);
		}
	}
	
	//Returns color.
	getColor() {
		return this.color;
	}
	
	//Returns the color buffer.
	getColorBuffer() {
		return this.colorBuffer;
	}
	
	//Returns how many colors are in color buffer.
	getColorBufferNumItems() {
		return this.colorBufferNumItems;
	}
	
	//Returns how many items per colors.
	getColorBufferItemSize() {
		return this.colorBufferItemSize;
	}
	
	//Returns the draw type.
	getDrawType() {
		return this.drawType;
	}
	
	//Returns if color has been set.
	getHasColor()
	{
		return this.hasColor;
	}
	
	//returns if there is a 'texture'.
	getHasTexture() {
		return this.hasTexture;
	}
	
	//Returns the index buffer.
	getIndexBuffer() {
		
		return undefined;
	}
	
	//returns the number of index buffer items.
	getIndexBufferNumItems() {
		return undefined;
	}
	
	//Returns the name of the object.
	getName(){
		return this.name;
	}
	
	//Returns the position of the object.
	getPosition() {																									
		return this.position;
	}
	
	//Returns the positon buffer.
	getPositionBuffer() {
		return this.positionBuffer;
	}
	
	//Returns how many position buffer items there are.
	getPositionBufferItemSize() {
		return this.positionBufferItemSize;
	}
	
	//Returns how many position buffer items there are.
	getPositionBufferNumItems() {
		return this.positionBufferNumItems;
	}
	
	//Returns the rotation axis. If none defaualts to x axis
	getRotationAxis() {
		if(this.rotationAxis===undefined)
		{
			this.rotationAxis=[1,0,0];
			return this.rotationAxis;
		}
		
		return this.rotationAxis;
	}
	
	//Gets the rotation degree,if none defaults to 0.
	getRotationDegree() {
		if( this.rotationDegree===undefined)
		{
			console.log("rotation degree undefined,defaulting",this.name);
			 this.rotationDegree=0;
			 return  this.rotationDegree;
		}
		
		return this.rotationDegree;
	}
	
	//Gets rotation speed, if none defaults to 0.
	getRotationSpeed() {
		if(this.rotationSpeed===undefined)
		{
			console.log("rotation speed undefined,defaulting",this.name);
			this.rotationSpeed=0;
			return this.rotationSpeed;
		}
		
		return this.rotationSpeed;
	}
	
	//Returns the texture coord buffer.
	getTextureCoordBuffer() {
		return this.textureCoordBuffer;
	}
	
	//Returns the texture coordinates.
	getTextureCoord() {
		return this.textureCoord
	}
	
	//Returns size of texture coordinate for each item.
	getTextureCoordItemSize() {
		return 2;
	}
	
	//Returns the number of texture coord items.
	getTextureCoordNumItem() {
		return this.textureCoordNumItem;
	}
	
	//Returns the texture index which tells webgl what texture to get from the global texture array.
	getTextureIndex() {
		return this.textureIndex;
	}
	
	//Returns the vertices.
	getVertices() {
		return this.vertices;
	}
	
	//Returns the vertex indices,by default is undefined, if a object has vertex indices then it overides it like in the cube class.
	getVertexIndice() {
		return undefined;
	}
	
	//This checks the parameter and sets the color, if the passed in color is invalid defaults position and color a black square pyramid.
	setColor(_color) {
		
		
		//If vertices are undefined then default to a square baseless pyramid.
		if(this.vertices===undefined){
			
			console.log("vertices undefined,defaulting",this.name);
			
			this.vertices=[
			
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
		}
		
		
		if((this.vertices!==undefined)&& ((_color.length/4)==(this.vertices.length/3)) && (isCorrectArrayType(_color,"number")) ) {
			console.log("color set");
			this.color=_color;
		}
		else {
			console.log("defaulting color to black",this.name);
							
							
			var unpackedColors = [];
			
			//Creates the white color set.
			for (var j=0; j < (this.vertices.length/3); j++) {
				unpackedColors = unpackedColors.concat([0.0,0.0,0.0,0.0]);
			}
			
			
			this.color=unpackedColors;
			
		}																											
		
	}//end set color	

	//Checks and sets the draw type,if invalid defaults to points
	setDrawType(_drawType){
		if((_drawType == gl.POINTS) || (_drawType == gl.LINES) || (_drawType == gl.LINE_STRIP) || (_drawType == gl.LINE_LOOP) || (_drawType ==gl.TRIANGLES) || (_drawType ==gl.TRIANGLE_STRIP) || (_drawType ==gl.TRIANGLE_FAN))
		{
			this.drawType=_drawType;
		}
		else
		{
			console.log("draw type undefined,defaulting",this.name);
			this.drawType=gl.POINTS;								
		}
	}
	
	//Sets the name.
	setName(_name) {
		
		this.name=_name;
	}
	
	//Sets the position but first checks it, if invalid then sets to eye positon.
	setPosition(_pos) {
	
		if((this._pos!==undefined)&& ((_pos.length)==3) && (isCorrectArrayType(_pos,"number")) ) {
			console.log("position undefined,defaulting",this.name);
			this.position=_pos;
		}
		else {
			this.position[0,0,0];
		}
	}
	
	//Checks and sets the rotation axis passed in, if invalid sets to [0,0,0]
	setRotationAxis(_rotAxi) {
		
		if(_rotAxi.length==3)
		{
			this.rotationAxis=_rotAxi;
		}
		else
		{
				console.log("rotation axis undefined,defaulting",this.name);
			this.rotationAxis=[0,0,0];
		}
	}
	
	//Checks and sets the rotation degree,if invalid sets to 0 degrees.
	setRotationDegree(_rotDeg) {
		
		
		if(typeof _rotDeg=="number")
		{
			this.rotationDegree=_rotDeg
		}
		else
		{
				console.log("rotation degree undefined,defaulting",this.name);
			this.rotationDegree=0;
		}
	}
	
	//Checks and sets the rotation speed, if invalid sets to 0 speed as in no speed.
	setRotationSpeed(_speed) {
		
		if(typeof _speed=="number")
		{
			this.rotationSpeed=_speed;
		}
		else
		{
				console.log("rotation speed undefined,defaulting",this.name);
			this.rotationSpeed=0;
		}
	}
	
	//Sets the texture and creates the buffers for it. Also determines if the object 'should display' the texutre.
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ maybe add a checker for this?
	setTexture(_textIndex,_textCoord,_shouldTexture) {
		//this.textureCoordBuffer=_textBuffer;
		
		this.setTextureCoord(_textCoord);

		this.textureIndex=_textIndex;
		
		if(_shouldTexture)
		{
			console.log("wiping color for texture");
			for(var i=0;i<this.color.length;i++)
			{
				this.color[i]=1;
			}	
		
			this.hasTexture=true;
		}
		else
		{
			this.hasTexture=false;
		
			
			
		}
	}
	
	
	setTextureCoord(_textCoord) {
		if(_textCoord!==undefined) 
		{
			
			this.textureCoordBuffer=gl.createBuffer();
			this.textureCoord=_textCoord;
			this.textureCoordNumItem=_textCoord.length/2;
		}
	}

	//Checks and sets vertices, if invalid sets to the square pyramid vertices.
	setVertices(_vert){
		
		if(_vert===undefined)
		{
			
				console.log("vertices undefined,defaulting",this.name);
			//Sets to square pyramid vertices
			this.vertices=[
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
		}
		else {
			this.vertices=_vert;
		}
	}
}	


