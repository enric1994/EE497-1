function createScene() {

    var vertexAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null , 3);
    vertexAttribArray.setElements(new Float32Array(
        [  -1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            0.0, 0.0, 1.0  ]));

    var normalAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 3);
    normalAttribArray.setElements(new Float32Array(
        [0 ,-1, 0,
            0, -1, 0,
            0, -1, 0 ]
    ));

    var textureAttribArray = new osg.BufferArray(osg.BufferArray.ARRAY_BUFFER, null, 2);
    textureAttribArray.setElements(new Float32Array(
        [    0.0, 0.0,
            1.0, 0.0,
            0.5, 1.0   ]));

    var geometry = new osg.Geometry();
    geometry.setVertexAttribArray('Vertex', vertexAttribArray);
    geometry.setVertexAttribArray('Normal', normalAttribArray);
    geometry.setVertexAttribArray('TexCoord0', textureAttribArray);
    geometry.getOrCreateStateSet().setTextureAttributeAndModes(0, osg.Texture.createFromURL( 'res/textures/brick_texture.jpg' ) );
    geometry.getPrimitives().push(new osg.DrawArrays(osg.PrimitiveSet.TRIANGLES, 0, 3));

    var material = new osg.Material();
    material.setDiffuse([0.8, 0.8, 0.8, 1.0]);
    geometry.getOrCreateStateSet().setAttributeAndMode(material);

    var root = new osg.Node();
    root.addChild(geometry);
    return root;
}
