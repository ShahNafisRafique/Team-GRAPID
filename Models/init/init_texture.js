


var texturePaths=["nehe.gif"];
//,"nehe2.gif"];
var textureList=[];
function initTexture() {

	for(var i=0;i<texturePaths.length;i++)
	{
		var textureTemp=gl.createTexture();
		textureTemp.image=new Image();
		
		textureTemp.image.onload = function () {
		//above thhe init text
		handleLoadedTexture(textureTemp)
		}
		
		textureTemp.image.src = texturePaths[i];
		
		
		textureList.push(textureTemp);
		
	}


	
	
}