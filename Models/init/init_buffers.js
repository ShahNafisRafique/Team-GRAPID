

//This method creates any object that is going to be  made on startup.
function initBuffers() {
	
	//Calls the test function which creates data for and creates the objects.
	objectTestFunction();

	//These lines adds the objects made to the global array that has all objects that are to be renedered on screen.
	objectsToRender.push(pyramidTest);
	objectsToRender.push(pyramidTest2);
	objectsToRender.push(cubeTest);
	objectsToRender.push(cubeTest2);
	

	//This loop goes through each object and binds the buffers for each variable in the shaders
	for(var i=0;i<objectsToRender.length;i++)
	{
		var initObj=objectsToRender[i];
		
		
		//This binds the position buffer,which each object will have.
		gl.bindBuffer(gl.ARRAY_BUFFER, initObj.getPositionBuffer());		
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getVertices()), gl.STATIC_DRAW);
	   
	   
	   //Binds the texture to the texture buffer.
		gl.bindBuffer(gl.ARRAY_BUFFER,initObj.getTextureCoordBuffer());
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getTextureCoord()), gl.STATIC_DRAW);

	
	
		//This bind the color data to the color buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, initObj.getColorBuffer());			   
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(initObj.getColor()), gl.STATIC_DRAW);
		

		
		//This if statment checks if a object has vertex indices, if not then those buffers wont be bound.
		if(!(initObj.getVertexIndice()===undefined))
		{	
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, initObj.getIndexBuffer());
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(initObj.getVertexIndice()), gl.STATIC_DRAW);
		}//end if

	}//end for loop
		
}//end init buffer