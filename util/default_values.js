function defaultRotationAxis() {
	return [1,0,0];
}

function defaultRotationDegree() {
	return 0;
}

function defaultRotationSpeed() {
	return 0;
}

function defaultColor() {
	return [0.0,0.0,0.0,0.0];
}

function defaultColor(_vert) {
	var unpackedColors = [];
			
	//Creates the white color set.
	for (var j=0; j < _vert; j++) {
		unpackedColors = unpackedColors.concat([0.0,0.0,0.0,0.0]);
	}
	
	return unpackedColors;
}