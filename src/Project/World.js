
function World(localTransform, worldSize) {
    this.localTransform = localTransform;
    this.worldSize = worldSize;
    this.offset = 0;
  
  }
  
  World.prototype.create = function() {
  
  var world = osg.createTexturedBox(0, 0, 0, this.worldSize, this.worldSize, this.worldSize);
  var worldMaterial = new osg.Material();
  worldMaterial.setDiffuse([0.2, 0.2, 0.2, 1.0]);
  world.getOrCreateStateSet().setAttributeAndMode(worldMaterial);
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,0,this.offset, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate( 0,0,0,0, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(world);
  
  
  }