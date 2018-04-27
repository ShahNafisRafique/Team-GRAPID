/*This is the exact same as the vertex shader variable except that it stores the fragment shader code. Now the
	fragment shader deals with every point between vertices,so it has to interpolate colors and textures. 
*/
	var fShader =  (function () {
		
		var type = "fragment-shader";
		
		function getScript() {
			return `
			
			precision mediump float;

			varying vec4 vColor;
			varying vec2 vTexCoord;
			uniform sampler2D uTexSamp;
			
			vec4 checkColor(in vec4 _color) {
				 if((_color.w-.02)<0.01)
				 {
					 return vec4(1,0,0,1);
				 }
				 else
				 {
					 return vec4(_color.x,_color.y,_color.z,_color.w);
				 }
			}//end checkColor
			
			void main(void) {
				
			//gl_FragColor = texture2D(uTex, vTexCoord) * vColor;
			//gl_FragColor = texture2D(uTexSamp, vec2(vTexCoord.s, vTexCoord.t))*vColor;
			//gl_FragColor = texture2D(uTexSamp, vec2(vTexCoord.s, vTexCoord.t))*checkColor(vColor);
			
			gl_FragColor = texture2D(uTexSamp, vec2(vTexCoord.s, vTexCoord.t))*vColor;
			
			
			
			
			
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
		
		
	}());//End fragment shader code