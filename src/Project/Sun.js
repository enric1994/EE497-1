function Sun (localTransform,
  x, y, z, size) {
  this.localTransform = localTransform
  this.x = x
  this.y = y
  this.z = z
  this.size = size
}

Sun.prototype.create = function () {
  var sun = osg.createTexturedSphere(this.size)
  var sunMaterial = new osg.Material()
  sunMaterial.setDiffuse([1, 0.8, 0.3, 0.7])
  sun.getOrCreateStateSet().setAttributeAndMode(sunMaterial)

  var sunMatrixTranslate1 = new osg.Matrix.create()
  var sunMatrixRotate1 = new osg.Matrix.create()
  sunMatrixTranslate1 = osg.Matrix.makeTranslate(0 + this.x, 0 + this.y, 0 + this.z, sunMatrixTranslate1)
  sunMatrixRotate1 = osg.Matrix.makeRotate(0, 0, 0, 0, sunMatrixRotate1)
  var sunMatrix1TranslateTransform = new osg.MatrixTransform()
  sunMatrix1TranslateTransform.setMatrix(sunMatrixTranslate1)
  var sunMatrix1RotateTransform = new osg.MatrixTransform()
  sunMatrix1RotateTransform.setMatrix(sunMatrixRotate1)
  this.localTransform.addChild(sunMatrix1RotateTransform)
  sunMatrix1RotateTransform.addChild(sunMatrix1TranslateTransform)
  sunMatrix1TranslateTransform.addChild(sun)
}
