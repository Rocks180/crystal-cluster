var createScene = function () {
     // Create a scene.
     var scene = new BABYLON.Scene(engine);
 
     BABYLON.SceneLoader.ImportMesh("", "./items/", "crystal cluster.gltf", scene, function (meshes) {          
         scene.createDefaultCameraOrLight(true, true, true);
         scene.createDefaultEnvironment();
 
     });
 
     return scene;
 };