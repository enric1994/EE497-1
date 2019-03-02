function Button(root) {
    this.root = root;

}

Button.prototype.create = function() {

    var button = osg.createTexturedBox(8, -14, 8.5, 1,1,1);

    var clickCallback = new ClickCallback();
    button.addUpdateCallback(clickCallback);


    var buttonMaterial = new osg.Material();
    buttonMaterial.setDiffuse([0.7, 0.7, 0.7, 0.5]);
    button.getOrCreateStateSet().setAttributeAndMode(buttonMaterial);
    this.root.addChild(button);


}