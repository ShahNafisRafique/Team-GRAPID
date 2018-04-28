/* 
Contents: Fragment Shader Module - Stores the fragment shader script (the glsl code that is responsible for processing fragments 
produced by rasterization to determine depth and color data for individual pixels) in a template literal and provides an accessor.
Shah wrote the checkColor function to switch between displaying color and texture data without 
changing shaders or modifying the template with tags.

Authors: Shah Nafis Rafique, Matt Smitherman, Yoonah Lee

Last Updated: 4/26/2018

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
		
		
	}());//End fragment shader code.