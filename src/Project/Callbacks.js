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

// Sun callback
var SunCallback = function() {};
SunCallback.prototype = {
    update: function(node,nodeVisitor) {
        lastLight = createDirectionalLight(45*Math.sin(currentTime), 45*Math.sin(currentTime), 45*Math.cos(currentTime), 1,1,1)
        var currentTime = nodeVisitor.getFrameStamp().getSimulationTime();

        var matrix = node.getMatrix();
        osg.Matrix.makeTranslate(45*Math.sin(currentTime), 45*Math.sin(currentTime), 45*Math.cos(currentTime), matrix);
        
            // if (currentTime%2 < 0.02){
            //     console.log('light updated')
            //     dlight = createDirectionalLight(45*Math.sin(currentTime), 45*Math.sin(currentTime), 45*Math.cos(currentTime), 1,1,1)
                
            //     node.removeChild(lastLight);
            //     node.addChild(dlight);
            //     lastLight = dlight;
            // }
            

            
            // console.log('light updated!')
        
    }
};

// Moon callback
var MoonCallback = function() {};
MoonCallback.prototype = {
    update: function(node,nodeVisitor) {
        var currentTime = nodeVisitor.getFrameStamp().getSimulationTime();

        var matrix = node.getMatrix();
        osg.Matrix.makeTranslate(45*Math.sin(currentTime+Math.PI), 45*Math.sin(currentTime+Math.PI), 45*Math.cos(currentTime+Math.PI), matrix);

    }
};