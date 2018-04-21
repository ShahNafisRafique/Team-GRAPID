function isCorrectArrayType(_arr,_type)
{
	var returnAnswer=true;
	
	for(var i=0;i<_arr.length;i++){
		returnAnswer=returnAnswer&&(typeof _arr[i]==_type);
	}
	return returnAnswer;
}