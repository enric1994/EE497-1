
function Tree(root, x, y, z) {
    this.root = root;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  
  Tree.prototype.create = function() {
        // Trunk
        var trunkSize = 5;
        var trunk = osg.createTexturedBox(0, 0, 0, trunkSize, trunkSize, trunkSize);
        var trunkMaterial = new osg.Material();
        trunkMaterial.setDiffuse([0.5, 0.3, 0.0, 1.0]);
        trunk.getOrCreateStateSet().setAttributeAndMode(trunkMaterial);
    
        var trunkMatrix1  = new osg.Matrix.create();
        trunkMatrix1  = osg.Matrix.makeTranslate(this.x + 0,this.y + 0,this.z + 0, trunkMatrix1 );
        var trunkMatrix1Transform = new osg.MatrixTransform();
        trunkMatrix1Transform.setMatrix(trunkMatrix1 );
        this.root.addChild(trunkMatrix1Transform);
        trunkMatrix1Transform.addChild(trunk);
    
        var trunkMatrix2 = new osg.Matrix.create();
        trunkMatrix2 = osg.Matrix.makeTranslate(this.x + 0,this.y + 0,this.z + 5, trunkMatrix2);
        var trunkMatrix1Transform = new osg.MatrixTransform();
        trunkMatrix1Transform.setMatrix(trunkMatrix2);
        this.root.addChild(trunkMatrix1Transform);
        trunkMatrix1Transform.addChild(trunk);
    
        var trunkMatrix3 = new osg.Matrix.create();
        trunkMatrix3 = osg.Matrix.makeTranslate(this.x + 0,this.y + 0,this.z + 10, trunkMatrix3);
        var trunkMatrix1Transform = new osg.MatrixTransform();
        trunkMatrix1Transform.setMatrix(trunkMatrix3);
        this.root.addChild(trunkMatrix1Transform);
        trunkMatrix1Transform.addChild(trunk);
    
    
        // Leafs
        var leafSize = 8;
        var leaf = osg.createTexturedBox(0, 0, 0, leafSize, leafSize, leafSize);
        var leafMaterial = new osg.Material();
        leafMaterial.setDiffuse([0.0, 0.6, 0.2, 1.0]);
        leaf.getOrCreateStateSet().setAttributeAndMode(leafMaterial);
    
        var leafMatrix1  = new osg.Matrix.create();
        leafMatrix1  = osg.Matrix.makeTranslate(this.x + 0,this.y + 3,this.z + 16, leafMatrix1 );
        var leafMatrix1Transform = new osg.MatrixTransform();
        leafMatrix1Transform.setMatrix(leafMatrix1 );
        this.root.addChild(leafMatrix1Transform);
        leafMatrix1Transform.addChild(leaf);
    
        var leafMatrix2 = new osg.Matrix.create();
        leafMatrix2 = osg.Matrix.makeTranslate(this.x + 3,this.y + -3,this.z + 16, leafMatrix2);
        var leafMatrix1Transform = new osg.MatrixTransform();
        leafMatrix1Transform.setMatrix(leafMatrix2);
        this.root.addChild(leafMatrix1Transform);
        leafMatrix1Transform.addChild(leaf);
    
        var leafMatrix3 = new osg.Matrix.create();
        leafMatrix3 = osg.Matrix.makeTranslate(this.x + -4,this.y + 1,this.z + 16, leafMatrix3);
        var leafMatrix1Transform = new osg.MatrixTransform();
        leafMatrix1Transform.setMatrix(leafMatrix3);
        this.root.addChild(leafMatrix1Transform);
        leafMatrix1Transform.addChild(leaf);

        return this.root;
  }
  
  function createScene() {

    var root = new osg.Node();
    trees_count = 5;
    tree = new Tree(root, 0, 0, 0);
            root = tree.create();
    return root;
  }