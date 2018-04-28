 function handleLoadedTexture(texture) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.bindTexture(gl.TEXTURE_2D, null);
    }


    var sphereTexture;

    function initTexture() {
        sphereTexture = gl.createTexture();
        sphereTexture.image = new Image();
		
		sphereTexture.image.crossOrigin = "anonymous";
		
		
        sphereTexture.image.onload = function () {
            handleLoadedTexture(sphereTexture)
        }

		sphereTexture.image.src = "https://i.imgur.com/SNyYPNT.jpg";
     //   sphereTexture.image.src = "https://i.imgur.com/uLnofLJ.gif";
	//	sphereTexture.image.src = "https://i.imgur.com/abFYUlV.jpg";
	}