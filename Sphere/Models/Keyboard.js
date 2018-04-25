var past = 0;
		function animate() {
			let present = new Date().getTime();
		
			
				let delta = present - past;
				
				if(delta > 60) {
					xRotation += xSpeed;
					yRotation += ySpeed;
					
					past = present;
				}
			
		}
		
		function degToRad(deg) {
			return deg * Math.PI / 180;
		}
		
		var rcount = 0;
		function tick() {
			
			drawScene();
			animate();
			handleKeys();
			window.requestAnimationFrame(tick);
			
		}
		
		function handleKeys() { 
			if(pressedKeys[33]) {
			//page up
			z -= 0.05;
			}
			//page down
			if(pressedKeys[34]){
			z += 0.05;
			}
			if (pressedKeys[37]) {
			  // Left cursor key
			  ySpeed -= 1;
			}
			if (pressedKeys[39]) {
			  // Right cursor key
			  ySpeed += 1;
			}
			if (pressedKeys[38]) {
			  // Up cursor key
			  xSpeed -= 1;
			}
			if (pressedKeys[40]) {
			  // Down cursor key
			  xSpeed += 1;
			}
		}
		
		var pressedKeys = {};
		function handleKeyDown(event) {
			pressedKeys[event.keyCode] = true;
			
		}
		
		function handleKeyUp(event) {
			pressedKeys[event.keyCode] = false;
		}