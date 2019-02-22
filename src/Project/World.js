// Rotating world
function init() {
    enablePicking();
}

var SimpleUpdateCallback = function() {};

SimpleUpdateCallback.prototype = {
    // rotation angle
    angle: 0,
    state: 0,

    update: function(node, nodeVisitor) {
        // var currentTime = nodeVisitor.getFrameStamp().getSimulationTime();
        // var dt = currentTime - node._lastUpdate;
        // if (dt < 0) {
        //     return true;
        // }
        
        // node._lastUpdate = currentTime;

        // rotation
        var matrix = node.getMatrix();
        osg.Matrix.makeRotate(this.angle, 0.0, 1.0, 0.0, matrix);

        //osg.Matrix.setTrans(matrix, 0, 0, 0);

        if (this.angle < (1 +this.state)*Math.PI/2){
            this.angle += 0.01;
        }
        
        node.onpick = function(){
            this.state += 1;
            alert('spin!');
        }

        // return true;
    }
};

function createScene() {
    var root = new osg.Node();

    var matrixTransform = new osg.MatrixTransform();

    var size = 7;
    var cube = osg.createTexturedBoxGeometry(0,0,0, size,size,size);
    matrixTransform.addChild(cube);


    // Add material
    var material = new osg.Material();
    material.setDiffuse([1.0, 1.0, 0.2, 1.0]);
    cube.getOrCreateStateSet().setAttributeAndModes(material);

    var updateCallback = new SimpleUpdateCallback();
    matrixTransform.addUpdateCallback(updateCallback);

    root.addChild(matrixTransform);

    return root;
}
