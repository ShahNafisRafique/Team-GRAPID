//Callback is the function that will be called once all textures have been loaded in, and only if all the textures have been loaded in. 
function initTexture(callback) {
	
	//Creates the promise varialbe that is later used to store all the promises.
    var promises = [];
	
	/*This loop goes through each texture and updates that element by adding in the root path. Also stores that location
		in the image variable, creates that texture and checks to see that it was made. Finally adds the onLoad property that pushes
		the texture onto the global texture object array and calls the loadTexutre method.
	*/
    for (var i=0; i<texturePaths.length; i++) {
      var image_src = texturePathRoot+texturePaths[i];
	  texturePaths[i]=image_src;
	  
	  //The promise object allowas for asynchronous loading of the textures by basicly promising that the texture will either be loaded or not. 
      var prom = new Promise(function(resolve, reject) {
      var texture = gl.createTexture();
		
		//This checks if the texture has been made.
       if (!texture) {
          reject(new Error('Failed to create the texture object'));
        }//end if
		
		//Creates a image for the texture.
        texture.src = image_src;
        texture.image = new Image();
		
		//Checks to see if image was correclty made.
       if (!texture.image) {
          reject(new Error('Failed to create the image object'));
        }//end if
		
		//Adds a propterty which runs the code inside once the image has been loaded.
        texture.image.onload = function(){
        
		  textureList.push( texture);
          loadTexture(texture);
          resolve("success");
        };//end onLoad
		
        texture.image.src = image_src;
		
      });//end promise
	  
      promises.push(prom);
    }

	//Once all the promises are succesfull, as in all textures loaded, the callback is called, whichis tick which kicks off the animation process.
    Promise.all(promises).then(function() {
      if (callback) {
		
        callback();
		 
      }
    }, function(error) {
      console.log('Error loading images', error);
    })//end Promise.all(promises)
	
}//end initTexture(callback)

 