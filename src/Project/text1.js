function text1(localTransform, x, y, z, rx, ry, rz, angle) {
    osgDB.readNodeURL('../models/em3dresume.osgjs').then(function(text1){
    
    //Assign texture

  var text1MatrixTranslate1  = new osg.Matrix.create();
  var text1MatrixRotate1  = new osg.Matrix.create();
  text1MatrixTranslate1  = osg.Matrix.makeTranslate( x, y, z, text1MatrixTranslate1 );
  text1MatrixRotate1 = osg.Matrix.makeRotate( angle,  rx, ry, rz, text1MatrixRotate1);
  
  var text1Matrix1TranslateTransform = new osg.MatrixTransform();
  text1Matrix1TranslateTransform.setMatrix(text1MatrixTranslate1 );
  var text1Matrix1RotateTransform = new osg.MatrixTransform();
  text1Matrix1RotateTransform.setMatrix(text1MatrixRotate1 );

  localTransform.addChild(text1Matrix1RotateTransform);
  text1Matrix1RotateTransform.addChild(text1Matrix1TranslateTransform);
  text1Matrix1TranslateTransform.addChild(text1);

    });
}