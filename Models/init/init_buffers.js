//This method creates any object that is going to be  made on startup.
function initBuffers() {
	
	//Calls the test function which creates data for and creates the objects.
	objectTestFunction();


	//This loop goes through each object and binds the buffers for each variable in the shaders
	for(var i=0;i<objectsToRender.length;i++) {
		var initObj=objectsToRender[i];
		
		
		//This binds the position buffer,which each object will have.
		gl.bindBuffer(gl.ARRAY_BUFFER, initObj.getPositionBuffer());		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getVertices()), gl.STATIC_DRAW);
	    console.log("checking pos buffer 7",gl.isBuffer(initObj.getPositionBuffer()));
	   
	   //Binds the texture to the texture buffer.
		gl.bindBuffer(gl.ARRAY_BUFFER,initObj.getTextureCoordBuffer());
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getTextureCoord()), gl.STATIC_DRAW);
		console.log("checking text cord buffer 8",gl.isBuffer(initObj.getTextureCoordBuffer()));
	
	
		//This bind the color data to the color buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, initObj.getColorBuffer());			   
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getColor()), gl.STATIC_DRAW);
		console.log("checking color  buffer 9",gl.isBuffer(initObj.getColorBuffer()));

		
		//This if statment checks if a object has vertex indices, if not then those buffers wont be bound.
		if(!(initObj.getVertexIndice()===undefined)) {	
			
			
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, initObj.getIndexBuffer());

			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(initObj.getVertexIndice()), gl.STATIC_DRAW);
			console.log("checking index  buffer 10",gl.isBuffer(initObj.getIndexBuffer()));
			
		}//end if.
		//console.log("max",Math.max.apply(Math, initObj.getVertexIndice()));
		

	}//end for loop.
		
		

}//end init buffer.