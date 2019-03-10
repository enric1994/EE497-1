function Button(root,
    x, y, z,
    rx, ry, rz, angle
    ) {
    this.root = root;
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.rz = rz;
    this.angle = angle;

    this.radius = 1;
    this.faces = 6;
    this.height = 3;

}

Button.prototype.create = function() {

    var clickCallback = new ClickCallback();

    //Cylinder
    var cylMatrixTranslate1  = new osg.Matrix.create();
    var cylMatrixRotate1  = new osg.Matrix.create();
    cylMatrixTranslate1  = osg.Matrix.makeTranslate( 0 + this.x , 0 + this.y, 0 + this.z, cylMatrixTranslate1 );
    cylMatrixRotate1 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, cylMatrixRotate1);
    var cylMatrix1TranslateTransform = new osg.MatrixTransform();
    cylMatrix1TranslateTransform.setMatrix(cylMatrixTranslate1 );
    var cylMatrix1RotateTransform = new osg.MatrixTransform();
    cylMatrix1RotateTransform.setMatrix(cylMatrixRotate1 );
    this.root.addChild(cylMatrix1RotateTransform);
    cylMatrix1RotateTransform.addChild(cylMatrix1TranslateTransform);
    cylMatrix1TranslateTransform.addUpdateCallback(clickCallback);

    cylMatrix1TranslateTransform.addChild(createCylinderTop(this.radius, 2 * this.height, this.faces));
    cylMatrix1TranslateTransform.addChild(createCylinderBody(this.radius, 2 * this.height, this.faces));
    cylMatrix1TranslateTransform.addChild(createCylinderBase(this.radius, 2 * this.height, this.faces));

    //arrow

    this.radius = this.radius*3;
    this.height = this.height/3;
    for(var i=0; i<8; i++) {

        var cylMatrixTranslate1  = new osg.Matrix.create();
        var cylMatrixRotate1  = new osg.Matrix.create();
        cylMatrixTranslate1  = osg.Matrix.makeTranslate( 0 + this.x , 0 + this.y, 0 + this.z + i*this.height, cylMatrixTranslate1 );
        cylMatrixRotate1 = osg.Matrix.makeRotate( 0 + this.angle,  0 + this.rx, 0 + this.ry, 0 + this.rz, cylMatrixRotate1);
        var cylMatrix1TranslateTransform = new osg.MatrixTransform();
        cylMatrix1TranslateTransform.setMatrix(cylMatrixTranslate1 );
        var cylMatrix1RotateTransform = new osg.MatrixTransform();
        cylMatrix1RotateTransform.setMatrix(cylMatrixRotate1 );
        this.root.addChild(cylMatrix1RotateTransform);
        cylMatrix1RotateTransform.addChild(cylMatrix1TranslateTransform);
        


        this.radius = this.radius - 3/Math.exp(this.radius);
        this.height = this.height-this.height/20;

      cylMatrix1TranslateTransform.addChild(createCylinderTop(this.radius, this.height, this.faces));
      cylMatrix1TranslateTransform.addChild(createCylinderBody(this.radius, this.height, this.faces));
      cylMatrix1TranslateTransform.addChild(createCylinderBase(this.radius, this.height, this.faces));
    }

}

// Cylinder

function createCylinderTop (radius, height, faces) {

    var angle = 0.0;
    var angleIncrement = (2*Math.PI)/faces;
    var coordinates = new Array(faces*3*3);


    for(var f=0; f<faces; f++) {
        // Generate the four coordinates required for each face
        var x1 = radius * Math.cos(angle);
        var y1 = radius * Math.sin(angle);
        angle += angleIncrement;
        var x2 = radius * Math.cos(angle);
        var y2 = radius * Math.sin(angle);

        coordinates[f*3*3] = 0;
        coordinates[f*3*3+1] = 0;
        coordinates[f*3*3+2] = height/2.0;

        coordinates[f*3*3+3] = x1;
        coordinates[f*3*3+4] = y1;
        coordinates[f*3*3+5] = height/2.0;

        coordinates[f*3*3+6] = x2;
        coordinates[f*3*3+7] = y2;
        coordinates[f*3*3+8] = height/2.0;
    }

    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(coordinates));

    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 3*faces));
    
    var cylMaterial = new osg.Material();
    cylMaterial.setDiffuse([0.6, 0.6, 0.6, 0.8]);
    geometry.getOrCreateStateSet().setAttributeAndMode(cylMaterial);

    return geometry;
}

function createCylinderBase(radius, height, faces) {
    var angle = 0.0;
    var angleIncrement = (2*Math.PI)/faces;

    var coordinates = new Array(faces*3*3);

    for(var f=0; f<faces; f++) {
        // Generate the four coordinates required for each face
        var x1 = radius * Math.cos(angle);
        var y1 = radius * Math.sin(angle);
        angle += angleIncrement;
        var x2 = radius * Math.cos(angle);
        var y2 = radius * Math.sin(angle);

        coordinates[f*3*3] = 0;
        coordinates[f*3*3+1] = 0;
        coordinates[f*3*3+2] = -height/2.0;

        coordinates[f*3*3+3] = x2;
        coordinates[f*3*3+4] = y2;
        coordinates[f*3*3+5] = -height/2.0;

        coordinates[f*3*3+6] = x1;
        coordinates[f*3*3+7] = y1;
        coordinates[f*3*3+8] = -height/2.0;
    }

    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(coordinates));

    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 3*faces));

    var cylMaterial = new osg.Material();
    cylMaterial.setDiffuse([0.6, 0.6, 0.6, 0.8]);
    geometry.getOrCreateStateSet().setAttributeAndMode(cylMaterial);

    return geometry;
}

function createCylinderBody(radius, height, faces) {

    var angle = 0;
    var angleIncrement = (2*Math.PI)/faces;
    var coordinates = new Array(faces*2*3*3);

    for(var f=0; f<faces; f++)
    {
        // Generate the four coordinates required for each face
        var x1 = radius*Math.cos(angle);
        var y1 = radius*Math.sin(angle);
        angle += angleIncrement;
        var x2 = radius*Math.cos(angle);
        var y2 = radius*Math.sin(angle);

        // Populate the coordinates array
        coordinates[f*2*3*3] = x1;
        coordinates[f*2*3*3+1] = y1;
        coordinates[f*2*3*3+2] = -height/2.0;

        coordinates[f*2*3*3+3] = x2;
        coordinates[f*2*3*3+4] = y2;
        coordinates[f*2*3*3+5] = height/2.0;

        coordinates[f*2*3*3+6] = x1;
        coordinates[f*2*3*3+7] = y1;
        coordinates[f*2*3*3+8] = height/2.0;

        coordinates[f*2*3*3+9] = x1;
        coordinates[f*2*3*3+10] = y1;
        coordinates[f*2*3*3+11] = -height/2.0;

        coordinates[f*2*3*3+12] = x2;
        coordinates[f*2*3*3+13] = y2;
        coordinates[f*2*3*3+14] = -height/2.0;

        coordinates[f*2*3*3+15] = x2;
        coordinates[f*2*3*3+16] = y2;
        coordinates[f*2*3*3+17] = height/2.0;
    }

    var vertexCoordAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexCoordAttribArray.setElements(new Float32Array(coordinates));

    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexCoordAttribArray);
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 6*faces));

    var cylMaterial = new osg.Material();
    cylMaterial.setDiffuse([0.6, 0.6, 0.6, 0.8]);
    geometry.getOrCreateStateSet().setAttributeAndMode(cylMaterial);

    return geometry;
}