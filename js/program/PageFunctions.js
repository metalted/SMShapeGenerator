//Program parameters
var p_shapes = [
	{name: "Sphere", parameters : ["Radius", "Inner Radius"]}, 
	{name: "Cone", parameters : ["Radius", "Inner Radius", "Height"]},
	{name: "Cylinder", parameters : ["Radius", "Inner Radius", "Height"]},
	{name: "Torus", parameters : ["Radius", "TorusRadius", "Thickness"]},
	{name: "Perlin2", parameters : ["X", "Y", "Z", "Scale"]},
	{name: "Perlin3", parameters : ["X", "Y", "Z", "Scale"]},
	{name: "File", parameters : []}
];

var marginNames = ["Left", "Right", "Top", "Bottom", "Front", "Back"];

//The contents off the loaded JSON file.
var loadedFileShape;

//Data
var selectedBlock = sm_blocks[0];
var selectedColor = sm_colors[0];
var selectedShape = p_shapes[0];

var blockList;

function Logger(msg)
{
	document.getElementById('logger').innerHTML = msg + "<br>" + document.getElementById('logger').innerHTML;
}

function FillMenu()
{
	var menu = document.getElementById("menu");
	var blocks = document.getElementById("blocks");
	var colors = document.getElementById("colors");
	var shapes = document.getElementById("shapes");
	var margins = document.getElementById("margins");
	var parameters = document.getElementById("parameters");
	var selection = document.getElementById("selection");
	var generation = document.getElementById("generation");
	
	//Fill Block selection
	blocks.innerHTML += "<h3>Blocks</h3>";
	for(var i = 0; i < sm_blocks.length; i++)
	{
		blocks.innerHTML += "<img class='blockImage' onclick='SelectBlock(" + i +  ");'style='width: 96px; height: 96px; background: url(img/IconMapSurvival.png) " + (-sm_blocks[i].imgID * 96) + "px 0;'>";		
	}
	
	//Fill Color selection
	var colorPalette = "";
	for(var i = 0; i < sm_colors.length; i++)
	{	
		if(i%4==0)
		{
			colorPalette += "<div class='colorSection'>";
		}
		
		colorPalette += "<div class='colorButton' onclick='SelectColor(" + i + ");' style='background-color: #" + sm_colors[i].code + "'></div>";
		
		if(i%4==3)
		{
			colorPalette += "</div>";
		}		
	}	
	colors.innerHTML = "<h3>Colors</h3>" + "<div id='colorContainer'>" + colorPalette + "</div>";
	
	//Fill Shape Section
	
	var shapeSelection = "<select onchange='ShapeSelected()' id='shapeSelect'>";
	for(var i = 0; i < p_shapes.length; i++)
	{
		shapeSelection += "<option>" + p_shapes[i].name + "</option>";
	}
	shapeSelection += "</select>";
	shapes.innerHTML = "<h3>Shapes</h3>" + shapeSelection;
	
	//Fill selection
	SetSelection(selectedBlock, selectedColor);
	
	//Fill margins
	
	var marginTemp = "";
	for(var i = 0; i < marginNames.length; i++)
	{
		if(i%2==0){
			marginTemp += "<div>";
		}
	
		marginTemp += "<div class='label'>" + marginNames[i] + "</div>" +
			"<input class='input' id='paramMargin" + marginNames[i] + "' type='number' value='0' min='0'>";
	
		if(i%2 == 1)
		{
			marginTemp += "</div>";
		}
	}
	margins.innerHTML = "<h3>Slice</h3>" + marginTemp;
	
	//Fill parameters
	SetParameters(selectedShape);
}

FillMenu();
SetDownloadAnchor();

function SetDownloadAnchor()
{
	(function(){
		
		function onChange(event) {
			var reader = new FileReader();
			reader.onload = onReaderLoad;
			reader.readAsText(event.target.files[0]);
		}

		function onReaderLoad(event){
			//console.log(event.target.result);
			var obj = JSON.parse(event.target.result);
			//console.log(obj);
			
			var modelData = CreateModelData(Vector3(parseInt(obj.dimension[0].width) + 1, parseInt(obj.dimension[0].height) + 1, parseInt(obj.dimension[0].depth) + 1));
			//console.log(modelData);
			
			for(var i = 0; i < obj.voxels.length; i++)
			{
				//console.log(obj.voxels[i].x, obj.voxels[i].y, obj.voxels[i].z);
				modelData.voxels[parseInt(obj.voxels[i].x)][parseInt(obj.voxels[i].y)][parseInt(obj.voxels[i].z)] = true;
			}
			
			loadedFileShape = modelData;
			console.log(loadedFileShape);
		}	
		 
		document.getElementById('file').addEventListener('change', onChange);
		

		}());
}
//Handlers
function SelectBlock(blockID)
{
	var block = sm_blocks[blockID];
	selectedBlock = block;
	Logger("Selected block: " + block.title);
	
	SetSelection(selectedBlock, selectedColor);	
}

function SelectColor(colorID)
{
	var color = sm_colors[colorID];
	selectedColor = color;
	Logger("Selected color: " + color.title + "[#" + color.code + "]"); 
	
	SetSelectedColor(colorID, color);
}

function SetSelectedColor(id, color)
{
	document.getElementById('selectedColor').style.backgroundColor = "#" + color.code;
}

function SetSelection(block, color)
{
	var selection = document.getElementById("selection");
	selection.innerHTML = 
		"<h3>Selection</h3>" +
		"<img id='selectedBlock' style='float: left; width: 96px; height: 96px; background: url(img/IconMapSurvival.png) " + (-block.imgID * 96) + "px 0;'>"+
		"<div id='selectedColor' style='float: left; width: 96px; height: 96px; background-color: #" + color.code + ";'></div>";

}

function SetParameters(shape)
{
	var tempParams = "";
	
	for(var i = 0; i < shape.parameters.length; i++)
	{
		if(i % 2 == 0 && i != 0)
			{
				tempParams += "<br>";
			}
			
		tempParams += "<div class='label'>" + shape.parameters[i] + "</div>" +
			"<input class='input' id='paramShape" + shape.parameters[i] + "' type='number' value='0' min='0'>";
			
			
	}
	
	parameters.innerHTML = "<h3>Parameters</h3>" + tempParams;	
}

function ShapeSelected()
{
	var s = document.getElementById('shapeSelect').value;
	
	for(var i = 0; i < p_shapes.length; i++)
	{
		if(p_shapes[i].name == s)
		{
			selectedShape = p_shapes[i];
			break;
		}
	}
	Logger("Selected shape: " + selectedShape.name);
	SetParameters(selectedShape);
}

function Generate()
{
	Logger("<br>");
	Logger("Getting parameters...");
	Logger("Getting margins...");
	
	var params = GetParameters();
	var margins = GetMargins();
	var model;
	
	Logger("Creating model...");
	
	switch(selectedShape.name)
	{
		case "Sphere":
			model = CreateSphere(params);
			break;
		case "Torus":
			model = CreateTorus(params);
			break;
		case "Cylinder":
			model = CreateCylinder(params);
			break;
		case "Cone":
			model = CreateCone(params);
			break;
		case "Perlin2":
			model = CreatePerlin2(params);
			break;
		case "Perlin3":
			model = CreatePerlin3(params);
			break;
		case "File":
			console.log(loadedFileShape);
			model = loadedFileShape;
			break;
	}
	
	Logger("Slicing model...");	
	model = CutModel(model, margins);
	
	Logger("Creating blocklist...");
	setTimeout(
    function() {
		blockList = ConvertModelDataToBlockList(model);
		Logger("Blocklist complete. Rendering model...");
		RenderVoxelModel(blockList);	
    }, 100);
			
}

function CreateBlueprint()
{
	var blueprintData = GenerateBlueprint(blockList);
	CreateJSONFile(blueprintData);
	
}

function GetParameters()
{
	var p = {};
	
	for(var i = 0; i < selectedShape.parameters.length; i++)
	{
		p[selectedShape.parameters[i]] = parseInt(document.getElementById("paramShape" + selectedShape.parameters[i]).value);
	}
	
	return p;
}

function GetMargins()
{
	var m = {};
	for(var i = 0; i < marginNames.length; i++)
	{
		m[marginNames[i]] = parseInt(document.getElementById("paramMargin" + marginNames[i]).value);
	}
	return m;
}

function CreateJSONFile(jsonData)
{
	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonData));
	var dlAnchorElem = document.getElementById('downloadAnchorElem');
	dlAnchorElem.setAttribute("href",     dataStr     );
	dlAnchorElem.setAttribute("download", "blueprint.json");
	dlAnchorElem.click();
}