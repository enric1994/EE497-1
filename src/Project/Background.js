    
function Background(localTransform, 
    x, y, z,
    rx, ry, rz, angle) {
    this.localTransform = localTransform;
    this.x = x;
    this.y = y;
    this.z = z;
  
    this.rx = rx;
    this.ry = ry;
    this.rz = rz;
  
    this.angle = angle;
    
    this.leafSize = 500;
  }
  
  Background.prototype.create = function() {
    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [  -this.leafSize, 0.0, 0.0,
            this.leafSize, 0.0, 0.0,
            0.0, 0.0, this.leafSize  ]));

    var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
    textureAttribArray.setElements(new Float32Array(
        [   0.0, 0.0,
            1.0, 0.0,
            0.5, 1.0   ]));
    
    var leaf = new osg.Geometry();
    leaf.setVertexAttribArray('Vertex', vertexAttribArray);
    leaf.setVertexAttribArray('TexCoord0', textureAttribArray);
    leaf.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/sky.jpg"));
    leaf.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 3));

    
        var leafMatrixTranslate1  = new osg.Matrix.create();
        var leafMatrixRotate1  = new osg.Matrix.create();
        leafMatrixTranslate1  = osg.Matrix.makeTranslate( 0 + this.x, 0 + this.y, 0 + this.z, leafMatrixTranslate1 );
        leafMatrixRotate1 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, leafMatrixRotate1);
        var leafMatrix1TranslateTransform = new osg.MatrixTransform();
        leafMatrix1TranslateTransform.setMatrix(leafMatrixTranslate1 );
        var leafMatrix1RotateTransform = new osg.MatrixTransform();
        leafMatrix1RotateTransform.setMatrix(leafMatrixRotate1 );
        this.localTransform.addChild(leafMatrix1RotateTransform);
        leafMatrix1RotateTransform.addChild(leafMatrix1TranslateTransform);
        leafMatrix1TranslateTransform.addChild(leaf);
        }
// var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
// vertexAttribArray.setElements(new Float32Array(
//     [  -bsize/2, bsize, -bsize,
//         bsize, bsize, 0.0,
//         bsize/2,bsize,bsize,
//         ]));

// var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
// textureAttribArray.setElements(new Float32Array(
//     [   0.0, 0.0,
//         1.0, 0.0,
//         1, 0.5  ]));

// var geometry = new osg.Geometry();
// geometry.setVertexAttribArray('Vertex', vertexAttribArray);
// geometry.setVertexAttribArray('TexCoord0', textureAttribArray);
// geometry.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/leafs.jpg"));
// geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 3));

// // var root = new osg.Node();
// root.addChild(geometry);
