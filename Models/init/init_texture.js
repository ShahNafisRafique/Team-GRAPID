


var texturePaths=["whiteTexture.gif","neheNorm.gif","neheRed.gif","neheGreen.gif"];
var textureList=[];

 function initTexture(callback) {
    var promises = [];
    for (var i=0; i<texturePaths.length; i++) {
      var image_src = texturePaths[i];
      var prom = new Promise(function(resolve, reject) {
        var texture = gl.createTexture();
		
       /* if (!texture) {
          reject(new Error('Failed to create the texture object'));
        }*/
		
        texture.src = image_src;
         texture.image = new Image();
		 texture.image.crossOrigin = "anonymous";
		
       /* if (!image) {
          reject(new Error('Failed to create the image object'));
        }*/
		
        texture.image.onload = function(){
         // _textureList[texture.src] = texture;
		  textureList.push( texture);
          loadTexture(texture);
          resolve("success");
        };
        texture.image.src = image_src;
      });
      promises.push(prom);
    }

    Promise.all(promises).then(function() {
      if (callback) {
		
        callback();
		 
      }
    }, function(error) {
      console.log('Error loading images', error);
    })
  }

  function loadTexture(texture) {
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