// Rotates the element 90 degrees
var WorldRotateCallback = function () {}
WorldRotateCallback.prototype = {
  angle: 0,
  update: function (node) {
    var matrix = node.getMatrix()
    osg.Matrix.makeRotate(this.angle, 0.0, 1.0, 0.0, matrix)

    if (this.angle <= state * Math.PI / 2) {
      this.angle += 0.03
    }
  }
}

// Detect click
var ClickCallback = function () {}
ClickCallback.prototype = {
  update: function (node) {
    node.onpick = function () {
      state += 1
    }
  }
}

// Sun callback
var SunCallback = function () {}
SunCallback.prototype = {
  update: function (node, nodeVisitor) {
    var currentTime = nodeVisitor.getFrameStamp().getSimulationTime()

    var matrix = node.getMatrix()
    osg.Matrix.makeTranslate(35 * Math.sin(currentTime / 4), 20, 35 * Math.cos(currentTime / 4), matrix)
  }
}

// Moon callback
var MoonCallback = function () {}
MoonCallback.prototype = {
  update: function (node, nodeVisitor) {
    var currentTime = nodeVisitor.getFrameStamp().getSimulationTime()

    var matrix = node.getMatrix()
    osg.Matrix.makeTranslate(35 * Math.sin(currentTime / 4 + Math.PI), 20, 35 * Math.cos(currentTime / 4 + Math.PI), matrix)
  }
}
