//This function places the textures in the order that they are specified in texturePaths since all textures are loaded asynchronously.
function orderTextureList(_textList) {
	
	//Array used to store the correct order of textures.
	var temp =[];
	
	//populates the array
	for(var i=0;i<_textList.length;i++) 
	{
		temp.push(0);
	}
	
	//Places the textures in the correct order.
	for(var j=0;j<_textList.length;j++)
	{
		
		temp[_textList[j].rank]=_textList[j];
	}
	
	//Returns the result.
	return temp;
	
}