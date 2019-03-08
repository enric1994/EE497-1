
     
function Tree(localTransform, 
  x, y, z,
  rx, ry, rz, angle,
  trunkColorR, trunkColorG, trunkColorB,
  leafColorR, leafColorG, leafColorB) {
  this.localTransform = localTransform;
  this.x = x;
  this.y = y;
  this.z = z;

  this.rx = rx;
  this.ry = ry;
  this.rz = rz;

  this.angle = angle;

  this.trunkColorR= trunkColorR;
  this.trunkColorG= trunkColorG;
  this.trunkColorB= trunkColorB;

  this.leafColorR= leafColorR;
  this.leafColorG= leafColorG;
  this.leafColorB= leafColorB;

  this.trunkSize = 2;
  this.leafSize = 3;
}

Tree.prototype.create = function() {

      // Trunk
      var trunk = osg.createTexturedBox(0, 0, 0, this.trunkSize, this.trunkSize, this.trunkSize);
      var trunkMaterial = new osg.Material();
      trunkMaterial.setDiffuse([this.trunkColorR, this.trunkColorG, this.trunkColorB, 1.0]);
      trunk.getOrCreateStateSet().setAttributeAndMode(trunkMaterial);
  
      var trunkMatrixTranslate1  = new osg.Matrix.create();
      var trunkMatrixRotate1  = new osg.Matrix.create();
      trunkMatrixTranslate1  = osg.Matrix.makeTranslate( 0 + this.x, 0 + this.y, 0 + this.z, trunkMatrixTranslate1 );
      trunkMatrixRotate1 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, trunkMatrixRotate1);
      var trunkMatrix1TranslateTransform = new osg.MatrixTransform();
      trunkMatrix1TranslateTransform.setMatrix(trunkMatrixTranslate1 );
      var trunkMatrix1RotateTransform = new osg.MatrixTransform();
      trunkMatrix1RotateTransform.setMatrix(trunkMatrixRotate1 );
      this.localTransform.addChild(trunkMatrix1RotateTransform);
      trunkMatrix1RotateTransform.addChild(trunkMatrix1TranslateTransform);
      trunkMatrix1TranslateTransform.addChild(trunk);
  
      var trunkMatrixTranslate2  = new osg.Matrix.create();
      var trunkMatrixRotate2  = new osg.Matrix.create();
      trunkMatrixTranslate2  = osg.Matrix.makeTranslate( 0 + this.x, 0 + this.y, this.trunkSize + this.z, trunkMatrixTranslate2 );
      trunkMatrixRotate2 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, trunkMatrixRotate2);
      var trunkMatrix2TranslateTransform = new osg.MatrixTransform();
      trunkMatrix2TranslateTransform.setMatrix(trunkMatrixTranslate2 );
      var trunkMatrix2RotateTransform = new osg.MatrixTransform();
      trunkMatrix2RotateTransform.setMatrix(trunkMatrixRotate2 );
      this.localTransform.addChild(trunkMatrix2RotateTransform);
      trunkMatrix2RotateTransform.addChild(trunkMatrix2TranslateTransform);
      trunkMatrix2TranslateTransform.addChild(trunk);

      var trunkMatrixTranslate3  = new osg.Matrix.create();
      var trunkMatrixRotate3  = new osg.Matrix.create();
      trunkMatrixTranslate3  = osg.Matrix.makeTranslate( 0 + this.x, 0 + this.y, 2*this.trunkSize + this.z, trunkMatrixTranslate3 );
      trunkMatrixRotate3 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, trunkMatrixRotate3);
      var trunkMatrix3TranslateTransform = new osg.MatrixTransform();
      trunkMatrix3TranslateTransform.setMatrix(trunkMatrixTranslate3 );
      var trunkMatrix3RotateTransform = new osg.MatrixTransform();
      trunkMatrix3RotateTransform.setMatrix(trunkMatrixRotate3 );
      this.localTransform.addChild(trunkMatrix3RotateTransform);
      trunkMatrix3RotateTransform.addChild(trunkMatrix3TranslateTransform);
      trunkMatrix3TranslateTransform.addChild(trunk);
  
    //   // Leafs

      var leafSize = 3;
      var leaf = osg.createTexturedBox(0, 0, 0, this.leafSize, this.leafSize, this.leafSize);
      var leafMaterial = new osg.Material();
      leafMaterial.setDiffuse([this.leafColorR, this.leafColorG, this.leafColorB, 1.0]);
      leaf.getOrCreateStateSet().setAttributeAndMode(leafMaterial);
  
      var leafMatrixTranslate1  = new osg.Matrix.create();
      var leafMatrixRotate1  = new osg.Matrix.create();
      leafMatrixTranslate1  = osg.Matrix.makeTranslate( this.leafSize/2 + this.x, 0 + this.y, 3*this.trunkSize + this.z, leafMatrixTranslate1 );
      leafMatrixRotate1 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, leafMatrixRotate1);
      var leafMatrix1TranslateTransform = new osg.MatrixTransform();
      leafMatrix1TranslateTransform.setMatrix(leafMatrixTranslate1 );
      var leafMatrix1RotateTransform = new osg.MatrixTransform();
      leafMatrix1RotateTransform.setMatrix(leafMatrixRotate1 );
      this.localTransform.addChild(leafMatrix1RotateTransform);
      leafMatrix1RotateTransform.addChild(leafMatrix1TranslateTransform);
      leafMatrix1TranslateTransform.addChild(leaf);

      var leafMatrixTranslate2  = new osg.Matrix.create();
      var leafMatrixRotate2  = new osg.Matrix.create();
      leafMatrixTranslate2  = osg.Matrix.makeTranslate( -this.leafSize/2 + this.x, this.leafSize/2 + this.y, 3*this.trunkSize + this.z, leafMatrixTranslate2 );
      leafMatrixRotate2 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, leafMatrixRotate2);
      var leafMatrix2TranslateTransform = new osg.MatrixTransform();
      leafMatrix2TranslateTransform.setMatrix(leafMatrixTranslate2 );
      var leafMatrix2RotateTransform = new osg.MatrixTransform();
      leafMatrix2RotateTransform.setMatrix(leafMatrixRotate2 );
      this.localTransform.addChild(leafMatrix2RotateTransform);
      leafMatrix2RotateTransform.addChild(leafMatrix2TranslateTransform);
      leafMatrix2TranslateTransform.addChild(leaf);

      var leafMatrixTranslate3  = new osg.Matrix.create();
      var leafMatrixRotate3  = new osg.Matrix.create();
      leafMatrixTranslate3  = osg.Matrix.makeTranslate( 0 + this.x, -this.leafSize/2 + this.y, 3*this.trunkSize + this.z, leafMatrixTranslate3 );
      leafMatrixRotate3 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, leafMatrixRotate3);
      var leafMatrix3TranslateTransform = new osg.MatrixTransform();
      leafMatrix3TranslateTransform.setMatrix(leafMatrixTranslate3 );
      var leafMatrix3RotateTransform = new osg.MatrixTransform();
      leafMatrix3RotateTransform.setMatrix(leafMatrixRotate3 );
      this.localTransform.addChild(leafMatrix3RotateTransform);
      leafMatrix3RotateTransform.addChild(leafMatrix3TranslateTransform);
      leafMatrix3TranslateTransform.addChild(leaf);
  
    //   return this.root;
}