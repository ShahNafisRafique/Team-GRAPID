class SquarePyramid extends baseObj {
	
	//The square Pyramid object is very basic, as of right now it appears to be the most basic 3D object so far.
	constructor(_name,_position,_vertices,_color,_drawType) {

		//Calls parent constructor and passes the parameters in
		super(_name,_position,_vertices,_color,_drawType);
		
		//This creates the buffer objects.
		this.createBuffers();
		
	}


}