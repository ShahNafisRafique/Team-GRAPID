	//fragment shader ,runz on all pixels between vertices
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
			}
			
			void main(void) {
			//	gl_FragColor = texture2D(uTex, vTexCoord) * vColor;
			
			//gl_FragColor = texture2D(uTexSamp, vec2(vTexCoord.s, vTexCoord.t))*vColor;
			gl_FragColor = texture2D(uTexSamp, vec2(vTexCoord.s, vTexCoord.t))*vColor;
			//gl_FragColor = texture2D(uTexSamp, vec2(vTexCoord.s, vTexCoord.t))*checkColor(vColor);
			
			
			
				
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