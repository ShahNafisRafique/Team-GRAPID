//create eye/model matrix to define object and viewer positions in global co-ordinate system.
	var mvMatrix = mat4.create();
	
//keeps track of old positions of the eye
    var mvMatrixStack = [];
	
//4x4 identity matrix
	var origin= mat4.identity(mvMatrix);

//used to squish everything down
    var pMatrix = mat4.create();
	
//stores old eye pos
    function mvPushMatrix() {
        var copy = mat4.create();
        mat4.set(mvMatrix, copy);
        mvMatrixStack.push(copy);
    }

//push old eye pos back	
    function mvPopMatrix() {
        if (mvMatrixStack.length == 0) {
            throw "Invalid popMatrix!";
        }
        mvMatrix = mvMatrixStack.pop();
    }

//This function passes the perspective matrix (pMatrix) and global coordinates 
//of the current object (mvMatrix) into the shader's uniform variables in the GPU;
// see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix
    function setMatrixUniforms() {
        gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
        gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
    }