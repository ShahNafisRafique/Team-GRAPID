
	
  function drawScene() {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

    var lighting = document.getElementById("lighting").checked;
    gl.uniform1i(shaderProgram.useLightingUniform, lighting);
    if (lighting) {
      
	  gl.uniform3f(
        shaderProgram.ambientColorUniform,
        parseFloat(document.getElementById("ambientR").value),
        parseFloat(document.getElementById("ambientG").value),
        parseFloat(document.getElementById("ambientB").value)
      );

      var lightingDirection = [
        parseFloat(document.getElementById("lightDirectionX").value),
        parseFloat(document.getElementById("lightDirectionY").value),
        parseFloat(document.getElementById("lightDirectionZ").value)
      ];
      var adjustedLD = vec3.create();
      vec3.normalize(lightingDirection, adjustedLD);
      vec3.scale(adjustedLD, -1);
      gl.uniform3fv(shaderProgram.lightingDirectionUniform, adjustedLD);

      gl.uniform3f(
        shaderProgram.directionalColorUniform,
        parseFloat(document.getElementById("directionalR").value),
        parseFloat(document.getElementById("directionalG").value),
        parseFloat(document.getElementById("directionalB").value)
      );
    }
	mat4.identity(mvMatrix);

    mat4.translate(mvMatrix, [0, 0, -6]);
	
	gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sphereTexture);
    gl.uniform1i(shaderProgram.samplerUniform, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, sphereVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, sphereVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, sphereVertexTextureCoordBuffer);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, sphereVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, sphereVertexNormalBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, sphereVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sphereVertexIndexBuffer);
    setMatrixUniforms();
    gl.drawElements(gl.TRIANGLES, sphereVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
  }
  var sphereVertexPositionBuffer;
  var sphereVertexNormalBuffer;
  var sphereVertexTextureCoordBuffer;
  var sphereVertexIndexBuffer;
  
  function initBuffers() {
    var latitudeBands = 30;
    var longitudeBands = 30;
    var radius = 2;
	var vertexPositionData = [];
    var normalData = [];
    var textureCoordData = [];
    for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
      var theta = latNumber * Math.PI / latitudeBands;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);

      for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
        var phi = longNumber * 2 * Math.PI / longitudeBands;
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);

        var x = cosPhi * sinTheta;
        var y = cosTheta;
        var z = sinPhi * sinTheta;
        var u = 1 - (longNumber / longitudeBands);
        var v = 1 - (latNumber / latitudeBands);

        normalData.push(x);
        normalData.push(y);
        normalData.push(z);
        textureCoordData.push(u);
        textureCoordData.push(v);
        vertexPositionData.push(radius * x);
        vertexPositionData.push(radius * y);
        vertexPositionData.push(radius * z);
      }
    }
	var indexData = [];
    for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
      for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
        var first = (latNumber * (longitudeBands + 1)) + longNumber;
        var second = first + longitudeBands + 1;
        indexData.push(first);
        indexData.push(second);
        indexData.push(first + 1);

        indexData.push(second);
        indexData.push(second + 1);
        indexData.push(first + 1);
      }
    }
	var mouseDown = false;
  var lastMouseX = null;
  var lastMouseY = null;

  var sphereRotationMatrix = mat4.create();
  mat4.identity(sphereRotationMatrix);

  function handleMouseDown(event) {
    mouseDown = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }

  function handleMouseUp(event) {
    mouseDown = false;
  }

  function handleMouseMove(event) {
    if (!mouseDown) {
      return;
    }
    var newX = event.clientX;
    var newY = event.clientY;

    var deltaX = newX - lastMouseX;
    var newRotationMatrix = mat4.create();
    mat4.identity(newRotationMatrix);
    mat4.rotate(newRotationMatrix, degToRad(deltaX / 10), [0, 1, 0]);

    var deltaY = newY - lastMouseY;
    mat4.rotate(newRotationMatrix, degToRad(deltaY / 10), [1, 0, 0]);

    mat4.multiply(newRotationMatrix, sphereRotationMatrix, sphereRotationMatrix);

    lastMouseX = newX
    lastMouseY = newY;
  }