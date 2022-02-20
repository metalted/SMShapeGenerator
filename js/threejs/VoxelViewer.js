var useControls = true;
var scene = new THREE.Scene();
var screenWidth = 1200;
var screenHeight = 1200;
var aspectRatio = screenWidth / screenHeight;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(screenWidth, screenHeight);
document.body.appendChild(renderer.domElement);
var camera = new THREE.OrthographicCamera(-100 * aspectRatio, 100 * aspectRatio, 100, -100, 1, 1000);
renderer.render( scene, camera );
var controls = new THREE.OrbitControls( camera, renderer.domElement );

//Reference
var objectList = [];
	
camera.position.set(200,200,200);
camera.lookAt(scene.position);

function RenderVoxelModel(modelData)
{	
	for(var i = 0; i < objectList.length; i++)
	{
		scene.remove(objectList[i]);
		objectList[i].geometry.dispose();
		objectList[i].material.dispose();
		objectList[i] = undefined;
	}
	
	objectList = [];

	var cameraDistance = Math.max(modelData.size.x, modelData.size.y, modelData.size.z) * 0.55;			

	for(var i = 0; i < modelData.blocks.length; i++)
	{	
		var material = new THREE.MeshMatcapMaterial(
		{
			color : parseInt(selectedColor.code, 16)
		});
	
		var block = modelData.blocks[i];
		var geometry = new THREE.BoxGeometry(block.bounds.x, block.bounds.y, block.bounds.z);
		
		var cube = new THREE.Mesh (geometry, material);
		objectList.push(cube);
		cube.position.set (
			block.pos.x + 0.5 - (modelData.size.x / 2) + ((block.bounds.x - 1) / 2), 
			block.pos.y + 0.5 - (modelData.size.y / 2) + ((block.bounds.y - 1) / 2), 
			block.pos.z + 0.5 - (modelData.size.z / 2) + ((block.bounds.z - 1) / 2)
		);
		scene.add (cube);
	}	
	
	if(useControls)
	{
		animate();
	}
	else
	{
		renderer.render( scene, camera );
	}
	
	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}
}