//The file where all calculations are performed.

//this variable keeps track of the last time that the calculations method ran.
var lastTime = 0;

//this is the method where all calculations are done.
function calculations() 
{
	//this varialbe stores current time.
	var timeNow = new Date().getTime();
	
	//this loop runs after the program has been started.
	if (lastTime != 0) {
		
		//this variable stores the time since the method calculations() was ran.
		var elapsed = timeNow - lastTime;
		
			//this loop goes through each object that is gonig to be rendered from the object list.
			for(var i=0;i<objectsToRender.length;i++)
			{
				var currentObj=objectsToRender[i];
				//now if a object has no rotation speed,then it wont rotate, by default all objects have 0 rotation speed.
				currentObj.setRotationDegree(currentObj.getRotationDegree()+(currentObj.getRotationSpeed()*elapsed)/1000);
				
			}
			

	  
	}
	
	//update last time this method was ran.
	lastTime = timeNow;
}


function tick() {
	//magical part of code from the google provided .js file that calls it self.
	requestAnimFrame(tick);
	
	//calls the method to draw the scene.
	drawScene();
	
	//calls the calculations method that will calculate for the next scene.
	calculations();
}