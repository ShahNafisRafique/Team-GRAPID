//draws the scene
	function drawScene() {

			//sets the view port
				gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
				
			//clears teh screen and enables projective view
				gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
				
			//sets field of vision and how far and close we can see
				mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

			//4x4 identity matrix
				mat4.identity(mvMatrix);
			
			//goes through every rendable object
				for(var i=0;i<objectsToRender.length;i++)
				{
					var renderObj=objectsToRender[i];
					
					
					//stores the currnet view so that we can go back to it once we are done creating the object
					mvPushMatrix();
					
					//moves to the place where the object would like to be draw
						mat4.translate(mvMatrix,renderObj.position);
					
					//if theres rotation properties are defined,rotate
						if((renderObj.rotationDegree !== undefined) && (renderObj.rotationAxis!==undefined))
						{	
							//scary linear algebra stuff, not really Dr.Igor is lit
								mat4.rotate(mvMatrix, degToRad(renderObj.rotationDegree), renderObj.rotationAxis);
						}
					
					//hey remember those buffers I made at initBuffers...yea those,lets do stuff with em
						gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.positionBuffer);
						gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, renderObj.positionBufferItemSize, gl.FLOAT, false, 0, 0);

					//remember those colors,yea do stuff
						gl.bindBuffer(gl.ARRAY_BUFFER, renderObj.colorBuffer);
						gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,renderObj.colorBufferItemSize, gl.FLOAT, false, 0, 0);
					
					//for any object that has this vertex indices defined, aka the cube
						if(!(renderObj.vertexIndices===undefined))
						{
							//remember that buffer with the indecies
								gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, renderObj.indexBuffer);
								
							setMatrixUniforms();
							
							//draw
								gl.drawElements(gl.TRIANGLES, renderObj.indexBufferNumItems, gl.UNSIGNED_SHORT, 0);
							
						}
						else
						{	
							//for objects that done have the above defined, aka pyramid
								setMatrixUniforms();
								
								//draw
									gl.drawArrays(gl.TRIANGLES, 0, renderObj.positionBufferNumItems);
						}
						
					//go back to where the eye was
						mvPopMatrix();
				}
		
		}