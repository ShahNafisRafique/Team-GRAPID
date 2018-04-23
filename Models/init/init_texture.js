var neheTexture;
var whiteTexture;
function initTexture() {
	
	whiteTex = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, whiteTex);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    new Uint8Array([1, 1, 1, 1]));

	

	//creates text ref
	neheTexture = gl.createTexture();
	//js images ovject
	neheTexture.image = new Image();
	
	//out images into an attribute
	//runs when images is loaded
	neheTexture.image.onload = function () {
		//above thhe init text
		handleLoadedTexture(neheTexture)
	}

	neheTexture.image.src = "nehe.gif";
	
	
}