//Rotates the element 90 degrees
var WorldRotateCallback = function() {};
WorldRotateCallback.prototype = {
    angle: 0,
    update: function(node) {

        var matrix = node.getMatrix();
        osg.Matrix.makeRotate(this.angle, 0.0, 1.0, 0.0, matrix);

        if (this.angle <= state*Math.PI/2){
            this.angle += 0.03;
        }
    }
};


// Detect click
var ClickCallback = function() {};
ClickCallback.prototype = {
    update: function(node) {
        node.onpick = function(){
            state += 1;
            spin_dir =1;
        }
    }
};


// Light Callback
var LightCallback = function() {};
LightCallback.prototype = {
    update: function(node) {
        //Summer
        if (state%4==0 && light != 's'){
            summerLight = createAmbientLight(0,0,1);
            node.addChild(summerLight);
            node.removeChild(lastLight);
            lastLight = summerLight;
            light = 's';
        
        }

        //Autumn
        if (state%4==1 && light != 'a'){
            autumnLight = createAmbientLight(0,1,0);
            node.addChild(autumnLight);
            node.removeChild(lastLight);
            lastLight = autumnLight;
            light = 'a';
        
        }
        //Winter
        if (state%4==2 && light != 'w'){
            winterLight = createAmbientLight(0,0,0);
            node.addChild(winterLight);
            node.removeChild(lastLight);
            lastLight = winterLight;
            light = 'w';
        
        }
        //Spring
        if (state%4==3 && light != 'sp'){
            springLight = createAmbientLight(0,1,1);
            node.addChild(springLight);
            node.removeChild(lastLight);
            lastLight = springLight;
            light = 'sp';
        
        }
    }
};


// Sun callback (error)
var SunCallback = function() {};
SunCallback.prototype = {
    update: function(node,nodeVisitor) {
        var currentTime = nodeVisitor.getFrameStamp().getSimulationTime();

        var matrix = node.getMatrix();
        osg.Matrix.makeTranslate(45*Math.sin(currentTime/4), 45*Math.sin(currentTime/2), 45*Math.cos(currentTime/4), matrix);
        
}
};

// Moon callback
var MoonCallback = function() {};
MoonCallback.prototype = {
    update: function(node,nodeVisitor) {
        var currentTime = nodeVisitor.getFrameStamp().getSimulationTime();

        var matrix = node.getMatrix();
        osg.Matrix.makeTranslate(45*Math.sin(currentTime/4+Math.PI), 45*Math.sin(currentTime/2+Math.PI), 45*Math.cos(currentTime/4+Math.PI), matrix);

    }
};