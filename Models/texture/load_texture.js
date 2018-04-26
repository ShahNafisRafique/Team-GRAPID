 function loadTexture(_texture) {
	//Tells webgl to use the currnet texture and assings the passed in texture to it.
	gl.bindTexture(gl.TEXTURE_2D, _texture);
	
	//The image is fliped so that (0,0) is the bottom left and that x increaes as you go left and y increases as you go up.
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	
	
	//Loads the texture into the texture space. Specifies the level of detail ,format and size of the image.
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _texture.image);
	
	//Specifies how to scale the texture up.
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	
	//Specifies how to scale the texture down.
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	
	
	//Wipes the current texture so that the next texture can occupy the space.
	gl.bindTexture(gl.TEXTURE_2D, null);
}