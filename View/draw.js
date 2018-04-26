//Draws the scene
function drawScene() {

	//Sets the view port to be at 0,0
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
		
	//Clears teh screen and enables projective view.
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		
	//This sets field of vision and how far and close we can see.
	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

	//mvMatrix is set to the 4x4 identity matrix, basicly a 1.
	mat4.identity(mvMatrix);
	
	//Goes through every rendable object
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ NOTE add a property to check if renderability is on.
	for(var i=0;i<objectsToRender.length;i++)
	{
		
		//This is a temporary varialbe to hold the currnet renderable object.
		var renderObj =objectsToRender[i];

		//stores the currnet view so that we can go back to it once we are done creating the object
		mvPushMatrix();
		
		//moves to the place where the object would like to be draw
		mat4.translate(mvMatrix,renderObj.position);
				
		//Binds the position buffer with the position of the currnet object.
		gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.positionBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, renderObj.getPositionBufferItemSize(), gl.FLOAT, false, 0, 0);

		//Binds the texture coord buffer with the texture coord of the current object
		gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.getTextureCoordBuffer());
		gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, renderObj.getTextureCoordItemSize(), gl.FLOAT, false, 0, 0);
		
		//sets the 1st texture slot to active so that we cna place a texure on it.
		gl.activeTexture(gl.TEXTURE0);
		
		//This checks to see if the object 'has a texture' and if so bind the texture buffer
		if(renderObj.getHasTexture())
		{
			try
			{
				//This tries to bind the objects texture to the buffer.
				gl.bindTexture(gl.TEXTURE_2D,textureList[renderObj.getTextureIndex()]);
			}
			catch(error) {
				//This sets the white texture to the current texture if a exception is thrown.
				gl.bindTexture(gl.TEXTURE_2D,textureList[0]);
			}
			
		}
		else
		{
			//If a object has no texture, aka color only, then set the texture to white and basicly tint the white texture to the color needed.
			gl.bindTexture(gl.TEXTURE_2D,textureList[0]);
			
		}//end if/else for texture
		
		//Binds sampler> @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
		gl.uniform1i(shaderProgram.samplerUniform, 0);
		
		//Binds the objects color to the color buffer.
		gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.colorBuffer);
		gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,renderObj.colorBufferItemSize, gl.FLOAT, false, 0, 0);
		

		//Binds the rotation data of the object to the rotation variables in the shader.
		gl.uniform3fv( shaderProgram.uniformRotationAxis, renderObj.getRotationAxis());
		gl.uniform1f( shaderProgram.uniformRotationDegree, degToRad( renderObj.getRotationDegree()));
		
		
		if(renderObj.getName()=="Sphere 1")
		{
			//console.log(renderObj.getVertices().length);
			//console.log(renderObj.position,renderObj.positionBufferItemSize,renderObj.getTextureCoordBuffer(),renderObj.getTextureCoordItemSize(),renderObj.getTextureIndex(),renderObj.colorBuffer,renderObj.colorBufferItemSize,renderObj.getRotationAxis(),renderObj.getRotationDegree());
		}
		
	//	console.log(renderObj.getVertices().length);
		//This checks if the current object has vertex indices or not.
		if(!(renderObj.getVertexIndice()===undefined))
		{

			//Bind the vertex indices to the indices buffer
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, renderObj.getIndexBuffer());														
			
			//Binds the projection and model view matrix into the shader
			setMatrixUniforms();
			
			//Draw the object now on the screen.
		//console.log( renderObj.getPositionBufferItemSize(), renderObj.getTextureCoordItemSize(),3,renderObj.getIndexBufferNumItems());
			//console.log(gl.getBufferParameter(gl.ELEMENT_ARRAY_BUFFER, gl.BUFFER_SIZE));
			gl.drawElements(renderObj.getDrawType(), renderObj.getIndexBufferNumItems(), gl.UNSIGNED_SHORT, 0);
			
		}	
		else //This area is ran if the object does not have vertex indices defined.
		{	
			//Binds the projection and model view matrix into the shader
			setMatrixUniforms();
			
			//Draw the object now on the screen.
			gl.drawArrays(renderObj.getDrawType(), 0, renderObj.getPositionBufferNumItems());
		
		}// End if/else vertex indices
		
		//Go back to where the eye was before starting to make the object.
		mvPopMatrix();
		
	}//End for loop for renderable object
	
}// End drawScene