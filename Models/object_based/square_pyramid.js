class SquarePyramid extends baseObj {
	
	//The square Pyramid object is very basic, as of right now it appears to be the most basic 3D object so far.
	constructor(_name,_position,_vertices,_color,_drawType) {

	
		super(_name,_position,_vertices,_color,_drawType);
		
		this.createBuffers();
		
	}


}