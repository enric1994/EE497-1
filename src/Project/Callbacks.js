//Rotates the element 90 degrees
var WorldRotateCallback = function() {};
WorldRotateCallback.prototype = {
    angle: 0,
    update: function(node) {

        var matrix = node.getMatrix();
        osg.Matrix.makeRotate(this.angle, 0.0, 1.0, 0.0, matrix);

        if (this.angle < (state)*Math.PI/2){
            this.angle += 0.02;
        }
    }
};


// Detect click
var ClickCallback = function() {};
ClickCallback.prototype = {
    update: function(node) {
        node.onpick = function(){
            state += 1;
            // if (state==2){
            //     enableDefaultLight();
            // }
        }
    }
};