function Moon(localTransform, x, y, z, rx, ry, rz, angle) {
    this.localTransform = localTransform;
    this.x = x;
    this.y = y;
    this.z = z;
  
    this.rx = rx;
    this.ry = ry;
    this.rz = rz;
  
    this.angle = angle;
  
    this.moon_size = 1;
    this.moon_width = 2;
  }
  
  Moon.prototype.create = function() {
  
      var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
      vertexAttribArray.setElements(new Float32Array(
          [ 
          //front side
          0, 0, 0,
          2*this.moon_size, 0, this.moon_size,
          2*this.moon_size, 0, 2*this.moon_size,
          4*this.moon_size, 0.0, 3*this.moon_size,
          3*this.moon_size, 0.0, 4*this.moon_size,
          4*this.moon_size,0,5*this.moon_size,
          2*this.moon_size,0,6*this.moon_size,
          2*this.moon_size,0,7*this.moon_size,
          0,0,8*this.moon_size,
          //backside
          0, this.moon_width, 0,
          2*this.moon_size, this.moon_width, this.moon_size,
          2*this.moon_size, this.moon_width, 2*this.moon_size,
          4*this.moon_size, this.moon_width, 3*this.moon_size,
          3*this.moon_size, this.moon_width, 4*this.moon_size,
          4*this.moon_size,this.moon_width,5*this.moon_size,
          2*this.moon_size,this.moon_width,6*this.moon_size,
          2*this.moon_size,this.moon_width,7*this.moon_size,
          0,this.moon_width,8*this.moon_size
          ]));
  
      var indices = new osg.BufferArray(osg.BufferArray.ELEMENT_ARRAY_BUFFER, null, 1 );
      indices.setElements(new Uint16Array(
          [ 
          // front side
          0, 1, 2,
          2, 1, 3,
          3, 4, 2,
          4, 3, 5,
          4, 5, 6,
          5,7,6,
          6,7,8,
          //backside
          9, 11, 10,
          10, 11, 12,
          13, 12, 11,
          12, 13, 14,
          14, 13, 15,
          16, 14,15,
          16,15,17,
          //external curve
          7,17,8,
          7,16,17,
          5,16,7,
          5,14,16,
          5,12,14,
          3,12,5,
          3,10,12,
          3,9,10,
          3,1,10,
          3,1,9,
          1,0,9,
          //internal curve
          8,17,6,
          6,17,15,
          4,6,15,
          15,13,4,
          4,13,11,
          2,4,13,
          2,13,11,
          2,11,0,
          9,0,11
          ]));
  
      var moon = new osg.Geometry();
      moon.setVertexAttribArray('Vertex', vertexAttribArray);
      moon.getPrimitives().push(new osg.DrawElements(osg.PrimitiveSet.TRIANGLES, indices));
  
      var moonMaterial = new osg.Material();
        moonMaterial.setDiffuse([1, 1, 0.6, 1.0]);
        moon.getOrCreateStateSet().setAttributeAndMode(moonMaterial);
    
        var moonMatrixTranslate1  = new osg.Matrix.create();
        var moonMatrixRotate1  = new osg.Matrix.create();
        moonMatrixTranslate1  = osg.Matrix.makeTranslate( 0 + this.x, 0 + this.y, 0 + this.z, moonMatrixTranslate1 );
        moonMatrixRotate1 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, moonMatrixRotate1);
        var moonMatrix1TranslateTransform = new osg.MatrixTransform();
        moonMatrix1TranslateTransform.setMatrix(moonMatrixTranslate1 );
        var moonMatrix1RotateTransform = new osg.MatrixTransform();
        moonMatrix1RotateTransform.setMatrix(moonMatrixRotate1 );
        this.localTransform.addChild(moonMatrix1RotateTransform);
        moonMatrix1RotateTransform.addChild(moonMatrix1TranslateTransform);
        moonMatrix1TranslateTransform.addChild(moon);
  }