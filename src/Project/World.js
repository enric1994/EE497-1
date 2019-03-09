
function World(localTransform, worldSize) {
  this.localTransform = localTransform;
  this.worldSize = worldSize;

}

World.prototype.create = function() {

  var sface = osg.createTexturedBoxGeometry(0, 0, 0, this.worldSize, 0.001, this.worldSize);
  sface.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/summer.jpg"));
              
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,15,0, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate(Math.PI/2 ,1,0,0, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(sface);
///autumn
  var sface = osg.createTexturedBoxGeometry(0, 0, 0, this.worldSize, 0.001, this.worldSize);
  sface.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/autumn.jpg"));
              
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,15,0, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate(Math.PI/2 ,0,0,1, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(sface);

  ////winter

  var sface = osg.createTexturedBoxGeometry(0, 0, 0, this.worldSize, 0.001, this.worldSize);
  sface.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/winter.jpg"));
              
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,15,0, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate(-Math.PI/2 ,1,0,0, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(sface);

  //spring
  var sface = osg.createTexturedBoxGeometry(0, 0, 0, this.worldSize, 0.001, this.worldSize);
  sface.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/spring.jpg"));
              
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,15,0, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate(-Math.PI/2 ,0,0,1, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(sface);
  
  //front face
  var sface = osg.createTexturedBoxGeometry(0, 0, 0, this.worldSize, 0.001, this.worldSize);
  sface.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/front.jpg"));
              
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,15,0, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate(-Math.PI ,1,0,0, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(sface);

  //back face

  var sface = osg.createTexturedBoxGeometry(0, 0, 0, this.worldSize, 0.001, this.worldSize);
  sface.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL("res/textures/front.jpg"));
              
  
  var worldMatrixTranslate  = new osg.Matrix.create();
  worldMatrixTranslate  = osg.Matrix.makeTranslate(0,15,0, worldMatrixTranslate);
  var worldTranslateTransform = new osg.MatrixTransform();
  worldTranslateTransform.setMatrix(worldMatrixTranslate );
  
  var worldMatrixRotate  = new osg.Matrix.create();
  worldMatrixRotate = osg.Matrix.makeRotate(0 ,1,0,0, worldMatrixRotate);
  var worldRotateTransform = new osg.MatrixTransform();
  worldRotateTransform.setMatrix(worldMatrixRotate );
  
  
  this.localTransform.addChild(worldRotateTransform);
  worldRotateTransform.addChild(worldTranslateTransform);
  worldTranslateTransform.addChild(sface);
  }