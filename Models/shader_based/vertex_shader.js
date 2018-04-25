/*Now this 'variable' actually stores the vertex shader code which is in GLSL which is a C type language. When called
	this variable returns that code and that code is ran in the gpu. This is why any math is suggested to be done in the shader code
	as the GPU is really fast at doing that compared to the CPU. Vertex shader deals with the vertices ,so properties such as position,
	color and texture and such are relevant.
*/
	var vShader = (function() {
		
		var type = "vertex-shader";
		
	    function getScript(){
			return `
			
			mat4 rotationMatrix(vec3 axis, float angle)
			{
				axis = normalize(axis);
				float s = sin(angle);
				float c = cos(angle);
				float oc = 1.0 - c;
				
				return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
							oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
							oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
							0.0,                                0.0,                                0.0,                                1.0);
			}
			
			attribute vec3 aVertexPosition;
			attribute vec4 aVertexColor;
			attribute vec2 aTexCoord;
			

			uniform vec3 uRotationAxis;
			uniform float uRotationDegree;

			
			
			uniform mat4 uMVMatrix;
			uniform mat4 uPMatrix;
			

		    varying vec2 vTexCoord;
			varying vec4 vColor;

			void main(void) {
				
				
				gl_Position = uPMatrix * uMVMatrix*rotationMatrix(uRotationAxis,uRotationDegree) *vec4(aVertexPosition, 1.0);
				

				vColor = aVertexColor;
				
				vTexCoord=aTexCoord;
				
				
			}`
		};
		
		return {
			"type": function() {
				return type;
			},
			"getScript": function() {
				return getScript();
			}
		};				
	}());//end vertex Shader code