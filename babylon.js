function createSceneTuto(engine) {
    //Basic scene
    //As usual: [scene, light, camera]
 
    //Creation of sphere
    var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
    box1.position.x = -20;var animationBox = new BABYLON.Animation(
    "tutoAnimation",
    "scaling.x",
   30,
  BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

// An array with all animation keys
    var keys = [];  
 
   //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 1
    });
 
    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: 0.2
    });
 
    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 1
    });
    animationBox.setKeys(keys);
    box1.animations.push(animationBox);
   
    scene.beginAnimation(box, 0, 100, true);
scene.registerBeforeRender(function () {
 //Your code here
});
