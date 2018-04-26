//Utility package

"use strict";

var utilityModule = (function () {
	
  //algorithm to convert hsl to rgb only slightly modified from original
  //Credit to mjackson https://gist.github.com/mjackson/5311256
  
	function hslToRgb(h, s, l) {
			  var r, g, b;

			  if (s == 0) {
				r = g = b = l; 
			  } else {
			  
				function hue2rgb(p, q, t) {
				  if (t < 0) t += 1;
				  if (t > 1) t -= 1;
				  if (t < 1/6) return p + (q - p) * 6 * t;
				  if (t < 1/2) return q;
				  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
				  return p;
				}

				var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
				var p = 2 * l - q;

				r = hue2rgb(p, q, h + 1/3);
				g = hue2rgb(p, q, h);
				b = hue2rgb(p, q, h - 1/3);
			  }
        
        let rgb = [r, g, b];
        let map = rgb.map(x => Math.floor(x * 256));

			  return map;
			}
      
      
  function isCorrectArrayType(_arr, _type) {
	
  var returnAnswer=true;
	
	for(var i = 0;i < _arr.length; i++) {
		
		//If any one of the elements is the wrong data type then return false.
		returnAnswer = returnAnswer&&(typeof _arr[i]==_type);
		
		//Breaks if the return variable goes false.
		if(!returnAnswer) {
			break;
		}
	}
	
	return returnAnswer;
}

			
	return {
		"hslToRgb" : function(h, s, l)  {
			return hslToRgb(h, s, l);
		},
    "isCorrectArrayType" = function(_arr, _type)  {
        return isCorrectArrayType(_arr, _type);
	};
  
}());	
