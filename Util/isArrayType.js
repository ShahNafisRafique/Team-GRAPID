//This function checks to see if every element in an array matches the data type passed in.
function isCorrectArrayType(_arr,_type)
{
	var returnAnswer=true;
	
	for(var i=0;i<_arr.length;i++){
		
		//If any one of the elements is the wrong data type then the who return variable goes false.
		returnAnswer=returnAnswer&&(typeof _arr[i]==_type);
		
		//Breaks if the return varialbe goes false.
		if(!returnAnswer)
		{
			break;
		}
	}
	
	return returnAnswer;
}