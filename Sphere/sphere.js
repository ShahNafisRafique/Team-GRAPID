/*
class Sphere extends baseObj {
	
	constructor(_name,_latitude,_longtitude,_radius,_position,_vertices,_color,_drawType) {
		
		super(_name,_position,_vertices,_color,_drawType);
		
		this.latitude = _latitude;
		this.longtitude = _longtitude;
		this.radius = _radius;
		
		//make data and after, call createbuffers for Normal, TextureCoordBuffer
		this.makingdata_forBuffersBuffers();
		
	}
	static makingdata_forBuffers(){
		
		var normalData = [];
		var textureCoordata = [];
		var vertexPositionData = [];

		for( var lat_i = 0; lat_i <= this.latitude; lat_i++ ) {
			var theta = lat_i*Math.PI / this.latitude;
			var sinTheta = Math.sin(theta);
			var cosTheta = Math.cos(theta);
			
			for( var long_i = 0; long_i <= this.longtitude; long_i++ ) {
				var phi = long_i * 2 * Math.Pi / this.longtitude;
				var sinPhi = Math.sin(phi);
				var cosPhi = Math.cos(phi);
				
				var x = cosPhi*sinTheta;
				var y = cosTheta;
				var z = sinPhi * sinTheta;
					
				var u = 1 - ( long_i / this.longtitude);
				var v = lat_i / this.latitude;
				
				normalData.push(x);
				normalData.push(y);
				normalData.push(z);
				
				textureCoordata.push(u);
				textureCoordata.push(v);
				
				
				vertexPositionData.push(radius*x);
				vertexPositionData.push(radius*y);
				vertexPositionData.push(radius*z);
				
			}
		}
		
		console.log(textureCoordata.length,vertexPositionData.length);
		var indexData = [];
		
		for( var lat_i =0; lat< this.latitude ; lat_i++) {
			for( var long_i = 0; long_i < this.longtitude ; long_i++ ) {
				var first = (lat_i*(this.longtitude+1)) + long_i;
				var second = first + this.longtitude + 1;
				indexData.push(first);
				indexData.push(second);
				indexData.push(first+1);
				indexData.push(second);
				indexData.push(second+1);
				indexData.push(first+1);
			}
		}	
		createPlusBuffers(indexData,normalData,textureCoordata,vertexPositionData);
	}
	//making IndexBuffer,NormalBuffer,TextureCoordBuffer,PositionBuffer
	static createPlusBuffers(indexData,normalData,textureCoordata,vertexPositionData) {
		
		//make buffers for positionBuffer , ColorBuffer
		super.createBuffers();
		//binding buffer 또는 binding data안해도 되나??
		gl.bindBuffer(gl.Array_BUFFER,this.positionBuffer);
		gl.bindBuffer(gl.Array_BUFFER,new WebGLFloatArray(vertexPositionData),gl.STATIC_DRAW);
		
		console.log(this.getPositionBuffer());
		
		this.positionBufferNumItems=(vertexPositionData)/(this.positionBufferItemSize);
		
		
		if( this.indexBuffer===undefined ) {
			
			this.indexBuffer= gl.createBuffer();
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			gl.bindData(gl.ELEMENT_ARRAY_BUFFER,new WebGLUnsignedShortArray(indexData),gl.STREAM_DRAW);
			this.indexBufferItemSize=3;
			this.indexBufferNumItems=indexData.length;
		}
		
		
		if( this.normalBuffer === undefined ) {
			
			this.normalBuffer = gl.createBuffer();
			//binding data and buffer
			gl.bindBuffer(gl.ARRAY_BUFFER,this.normalBuffer);
			gl.bindData(gl.ARRAY_BUFFER,new WebGLFloatArray(normalData),gl.STATIC_DRAW);
			this.normalBufferItemSize = 3;
			this.normalBufferNumItems = normalData.length/3;
			
		}
		if( this.textureCoordBuffer === undefined ) {
			this.textureCoordBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordBuffer);
			gl.bindData(gl.ARRAY_BUFFER,new WebGLFloatArray(textureCoordata),gl.STATIC_DRAW);
			this.textureCoordBufferItemSize = 2;
			this.textureCoordBufferNumItems = (textureCoordata.length)/2;
		}
		
	}
	
	getLatitude() {
		return this.latitude;
	}
	
	getLongtitude() {
		return this.longtitude;
	}
	
	getIndexBuffer() {
		
		return this.indexBuffer;
	}
	
	getIndexBufferNumItems() {
		return this.indexBufferNumItems;
	}
	
}*/