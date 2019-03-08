function trees(objectsRotation){
//Create trees (summer)
    stree1 = new Tree(objectsRotation,
    3,8,15,
    0, 0, 1, 0.3,
    0.6,0.3,0.1,
    0,0.4,0);
    stree2 = new Tree(objectsRotation,
    -5,-8,15,
    0,0, 1, -0.6,
    0.6,0.3,0,
    0,0.4,0);
    stree3 = new Tree(objectsRotation,
    12,3,15,
    0,0, 1, 2,
    0.6,0.3,0,
    0,0.4,0);
    stree4 = new Tree(objectsRotation,
    -13,7,15,
    0,0, 1, 3,
    0.6,0.3,0,
    0,0.4,0);
    stree5 = new Tree(objectsRotation,
    -8,2,15,
    0,0, 2, 3.2,
    0.6,0.3,0,
    0,0.4,0);
    stree6 = new Tree(objectsRotation,
    -13,4,15,
    0,0, 1, 1,
    0.6,0.3,0,
    0,0.4,0);
    stree7 = new Tree(objectsRotation,
    -3,7,15,
    0,0, 1, 3.3 ,
    0.6,0.3,0,
    0,0.4,0);

    stree1.create();
    stree2.create();
    stree3.create();
    stree4.create();
    stree5.create();
    stree6.create();
    stree7.create();

    //Create trees (autumn)
    atree1 = new Tree(objectsRotation,
    3,0,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.8,0.5,0.1);
    atree2 = new Tree(objectsRotation,
    -8,7,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.8,0.5,0.1);
    atree3 = new Tree(objectsRotation,
    7,9,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.8,0.5,0.1);
    atree4 = new Tree(objectsRotation,
    -12,-12,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.8,0.5,0.1);
    atree5 = new Tree(objectsRotation,
    12,-10,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.9,0.8,0.1);
    atree6 = new Tree(objectsRotation,
    -10,0,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.9,0.8,0.1);
    atree7 = new Tree(objectsRotation,
    0,-5,15,
    0, -1, 0, Math.PI/2,
    0.6,0.3,0.2,
    0.9,0.8,0.1);

    atree1.create();
    atree2.create();
    atree3.create();
    atree4.create();
    atree5.create();
    atree6.create();
    atree7.create();

    //Create trees (winter)
    wtree1 = new Tree(objectsRotation,
    3,0,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);
    wtree2 = new Tree(objectsRotation,
    13,8,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);
    wtree3 = new Tree(objectsRotation,
    -10,0,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);
    wtree4 = new Tree(objectsRotation,
    -13,-12,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);
    wtree5 = new Tree(objectsRotation,
    0,10,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);
    wtree6 = new Tree(objectsRotation,
    -6,-3,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);
    wtree7 = new Tree(objectsRotation,
    10,-9,15,
    0, -1, 0, Math.PI,
    0.7,0.6,0.5,
    0.9,0.9,0.9);

    wtree1.create();
    wtree2.create();
    wtree3.create();
    wtree4.create();
    wtree5.create();
    wtree6.create();
    wtree7.create();

    //Create trees (spring)
    stree1 = new Tree(objectsRotation,
    3,0,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.9,0,0.6);
    stree2 = new Tree(objectsRotation,
    -12,12,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.9,0,0.6);
    stree3 = new Tree(objectsRotation,
    12,12,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.8,0.4,0.9);
    stree4 = new Tree(objectsRotation,
    -4,-5,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.8,0.4,0.9);
    stree5 = new Tree(objectsRotation,
    12,-12,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.8,0.4,0.9);
    stree6 = new Tree(objectsRotation,
    -10,-10,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.9,0,0.6);
    stree7 = new Tree(objectsRotation,
    6,-10,15,
    0, -1, 0, -Math.PI/2,
    0.8,0.4,0.4,
    0.8,0.4,0.9);

    stree1.create();
    stree2.create();
    stree3.create();
    stree4.create();
    stree5.create();
    stree6.create();
    stree7.create();

    
    }