function drawScene() {

        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

        mat4.identity(mvMatrix);
		
		for(var i=0;i<objectsToRender.length;i++)
		{
			var renderObj=objectsToRender[i];
			
			
			
			mvPushMatrix();
			
			mat4.translate(mvMatrix,renderObj.position);
			
			mat4.rotate(mvMatrix, degToRad(renderObj.rotationDegree), renderObj.rotationAxis);
			
			gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.positionBuffer);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, renderObj.positionBufferItemSize, gl.FLOAT, false, 0, 0);

			gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.colorBuffer);
			gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,renderObj.colorBufferItemSize, gl.FLOAT, false, 0, 0);

			if(!(renderObj.vertexIndices===undefined))
			{
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, renderObj.indexBuffer);
				setMatrixUniforms();
				gl.drawElements(gl.TRIANGLES, renderObj.indexBufferNumItems, gl.UNSIGNED_SHORT, 0);
				
			}
			else
			{	
				
				setMatrixUniforms();
				gl.drawArrays(gl.TRIANGLES, 0, renderObj.positionBufferNumItems);
			}
			
			   mvPopMatrix();
		}
	
    }