//Tis variable keeps track of the last time that the calculations method ran.
var lastTime = 0;

//This is the method where all calculations are done.
function calculations() 
{
	//This variable stores current time.
	var timeNow = new Date().getTime();
	
	//This loop runs after the program has been started.
	if (lastTime != 0) 
	{
		
		//This variable stores the time since the method calculations() was ran.
		var elapsed = timeNow - lastTime;
		
			//This loop goes through each object that is gonig to be rendered from the object list.
			for(var i=0;i<objectsToRender.length;i++)
			{
				//Stores the currnet object in a variable for use.
				var currentObj=objectsToRender[i];
				
				//Now if a object has no rotation speed,then it wont rotate, by default all objects have 0 rotation speed.
				currentObj.setRotationDegree(currentObj.getRotationDegree()+(currentObj.getRotationSpeed()*elapsed)/1000);
				
			}//End for
			

	  
	}//End if
	
	//Update last time this method was ran.
	lastTime = timeNow;
	
}//End calculatios


