//Callback is the function that will be called once all textures have been loaded in, and only if all the textures have been loaded in. 
function initTexture(callback) {
	
	//Used to store promise data
    var promises = [];
	
	/*This loop goes through each texture and updates that element by adding in the root path. Also stores that location
		in the image variable, creates that texture and checks to see that it was made. Finally adds the onLoad property that pushes
		the texture onto the global texture object array and calls the loadTexutre method.
	*/
    for (var i=0; i<texturePaths.length; i++) {
      var image_src = texturePathRoot+texturePaths[i][0];
	  texturePaths[i][0]=image_src;
	  
	  /*This creates a variable from the object promise which is a javascript object.
		Promises allow the compeltion of loading images asynchronously and hold the value of if the loading failed or not.
	  */
      var prom = new Promise(function(resolve, reject) {
      var texture = gl.createTexture();
		texture.rank=texturePaths[i][1];
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

	//This function is ran if the promise succesfully completes, so it calls the tick function which is passed in and thus kicks off the rest of the pipeline.
    Promise.all(promises).then(function() {
      if (callback) {
		textureList=orderTextureList(textureList);
		console.log(textureList);
        callback();
		 
      }
    }, function(error) {
      console.log('Error loading images', error);
    })//end Promise.all(promises)
	
}//end initTexture(callback)

 