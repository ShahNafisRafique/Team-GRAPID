//Create eye/model matrix to define object and viewer positions in global co-ordinate system.
var mvMatrix = mat4.create();
	
//This matrix keeps track of old positions of the eye.
   var mvMatrixStack = [];
	
//This matrix is used to squish everything down, used for frustum.
   var pMatrix = mat4.create();
	
//This stores old eye position so that we can later on revert back.
function mvPushMatrix() {
	var copy = mat4.create();
	mat4.set(mvMatrix, copy);
	mvMatrixStack.push(copy);
}

//Reverts back to old eye position.	
function mvPopMatrix() {
	if (mvMatrixStack.length == 0) {
		throw "Invalid popMatrix!";
	}
	mvMatrix = mvMatrixStack.pop();
}

//This binds the mvmatrix and pMatrix to the variables in the shader code.
function setMatrixUniforms() {
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}