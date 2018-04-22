    function handleLoadedTexture(texture) {
		//tell webgl texture is currnet texture
        gl.bindTexture(gl.TEXTURE_2D, texture);
		//the image used here have the cord increase as u go down,aka 0,0 is top left. 
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		//load into rtexture space. kind of image,level of detail,format,size of each channle,and image it self
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
		//how to scale up
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		//how to scale down
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		//sets to null?
        gl.bindTexture(gl.TEXTURE_2D, null);
    }