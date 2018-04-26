/* 
Utility Module - encapsulates helper functions
Authors: Matt Smitherman, Shah Nafis Rafique, Yoonah Lee
*/

"use strict";

var utilityModule = (function () {
	
	/*
	  Transform hsl data to rgb
	  
	  credit to michael jackson https://gist.github.com/mjackson/5311256
	  
	  @param   Number  h       hue
	  @param   Number  s       saturation
	  @param   Number  l       lightness
	  @return  Array   mapped  rgb values
	 */
	 
	function hslToRgb(_h, _s, _l) {
			  let r, g, b;

			  if (_s == 0) {
				r = g = b = _l; 
			  } else {

				let q = _l < 0.5 ? _l * (1 + _s) : _l + _s - _l * _s;
				let p = 2 * _l - q;

				r = hue2rgb(p, q, _h + 1/3);
				g = hue2rgb(p, q, _h);
				b = hue2rgb(p, q, _h - 1/3);
				
				let rgb = [r, g, b];
				var mapped = rgb.map( x => Math.floor(x * 256)); 
			  }

			  return mapped;
	}
	
	function hue2rgb(_p, _q, _t) {
				  if (_t < 0) _t += 1;
				  if (_t > 1) _t -= 1;
				  if (_t < 1/6) return _p + (_q - _p) * 6 * _t;
				  if (_t < 1/2) return _q;
				  if (_t < 2/3) return _p + (_q - _p) * (2/3 - _t) * 6;
				  return p;
				}
	
	
	//This function checks to see if every element in an array matches the data type passed in.
	
	function isCorrectArrayType(_arr,_type) {
		var returnAnswer=true;
		
		for(var i=0;i<_arr.length;i++) {
			
			//If any one of the elements is the wrong data type then the who return variable goes false.
			
			returnAnswer=returnAnswer&&(typeof _arr[i]==_type);
			
			//Breaks if the return varialbe goes false.
			
			if(!returnAnswer) {
				break;
			}
		}
		
		return returnAnswer;
	}
			
	return {
		"hslToRgb" : function(_h, _s, _l) {
			return hslToRgb(_h, _s, _l);
		},
		"isCorrectArrayType" : function(_arr, _type) {
			return isCorrectArrayType(_arr, _type);
		}
	};
}());	
