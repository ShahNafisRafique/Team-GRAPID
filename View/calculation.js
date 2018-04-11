 var lastTime = 0;

    function calculations() {
        var timeNow = new Date().getTime();
        if (lastTime != 0) {
            var elapsed = timeNow - lastTime;
			
			for(var i=0;i<objectsToRender.length;i++)
			{
				objectsToRender[i].setRotationDegree(objectsToRender[i].rotationDegree+(objectsToRender[i].rotationSpeed*elapsed)/1000);
				
			}

          
        }
        lastTime = timeNow;
    }


    function tick() {
        requestAnimFrame(tick);
        drawScene();
        calculations();
    }