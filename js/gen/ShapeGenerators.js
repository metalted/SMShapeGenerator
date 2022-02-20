//Vector3 constructor.
function Vector3(x,y,z){
	return {"x":x, "y":y, "z": z};
}

function pythagoras(x, y) {
	return Math.sqrt(x * x + y * y);
}

function Distance(pointA, pointB)
{
	var dx = pointB.x - pointA.x;
	var dy = pointB.y - pointA.y;
	var dz = pointB.z - pointA.z;
	
	var dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2));
	
	return dist;
}

//Creates the empty voxel grid the model will be generated in.
function CreateModelData(size)
{
	var d = {
		"voxels" : [],
		"size" : size
	};
	
	for(var x = 0; x < size.x; x++)
	{
		d.voxels[x] = [];
		for(var y = 0; y < size.y; y++)
		{
			d.voxels[x][y] = [];
			for(var z = 0; z < size.z; z++)
			{
				d.voxels[x][y][z] = false;
			}
		}
	}
	
	return d;			
}

function CutModel(modelData, margins)
{
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				if(modelData.voxels[x][y][z])
				{
					if(x < margins.Left || x > modelData.size.x - margins.Right || y < margins.Bottom || y > modelData.size.y - margins.Top || z < margins.Back || z > modelData.size.z - margins.Front)
					{
						modelData.voxels[x][y][z] = false;
					}
				}
			}
		}
	}
	return modelData;
}

function CreateSphere(params)
{
	var diameter = (params.Radius * 2) - 1;
	var center = params.Radius - 1;
	
	var modelData = CreateModelData(Vector3(diameter, diameter, diameter));	
	
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				var d = Distance({"x" : center, "y" : center, "z" : center}, {"x" : x, "y" : y, "z" : z})
				modelData.voxels[x][y][z] = d < params.Radius && d > params["Inner Radius"];
			}
		}
	}
	
	return modelData;
}

function CreatePerlin2(params)
{
	var pn = new Perlin('random seed');
		
	var modelData = CreateModelData(Vector3(params["X"], params["Y"], params["Z"]));	
	
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				var p = pn.noise(x * 1.737 / params["Scale"],0,z * 1.737 / params["Scale"]);
				if(y < p * params["Y"]){
					modelData.voxels[x][y][z] = true;
				}
				
			}
		}
	}
	
	return modelData;
}

function CreatePerlin3(params)
{
	var pn = new Perlin('random seed');
		
	var modelData = CreateModelData(Vector3(params["X"], params["Y"], params["Z"]));	
	
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				var p = pn.noise(x,y,z);
				modelData.voxels[x][y][z] = pn.noise(x * 1.737 / params["Scale"],y * 1.737 / params["Scale"],z * 1.737 / params["Scale"]) > 0.5;
			}
		}
	}
	
	return modelData;
}

function CreateTorus(params)
{
	var diameter = (params.Radius * 2 - 1) + (2 * params.TorusRadius);
	var height = params.TorusRadius * 2;
	var center = params.Radius - 1 + params.TorusRadius;
	
	var modelData = CreateModelData(Vector3(diameter, height, diameter));	
	
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				var relX = x - center;
				var relZ = z - center;
				
				//Get the hypotenuse length.
				var hypo = pythagoras(relX, relZ);

				//Ratio between current line and core line.
				var ratio = params.Radius / hypo;
				
				//Scale
				var scaleX = Math.round(relX * ratio);
				var scaleZ = Math.round(relZ * ratio);
	
				var ringX = center + scaleX;
				var ringZ = center + scaleZ;
				
				var d = Distance({"x" : scaleX + center, "y" : height/2, "z" : scaleZ + center}, {"x" : x, "y" : y, "z" : z})
				modelData.voxels[x][y][z] = d > params.Thickness && d < params.TorusRadius;
			}
		}
	}
	
	return modelData;
}


	
function CreateCylinder(params)
{
	var diameter = (params.Radius * 2) - 1;
	var center = params.Radius - 1;
	
	var modelData = CreateModelData(Vector3(diameter, params.Height, diameter));	
	
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				var d = Distance({"x" : center, "y" : y, "z" : center}, {"x" : x, "y" : y, "z" : z})
				modelData.voxels[x][y][z] = d < params.Radius && d > params["Inner Radius"];
			}
		}
	}
	
	return modelData;
}

function CreateCone(params)
{
	var diameter = (params.Radius * 2) - 1;
	var center = params.Radius - 1;
	
	var modelData = CreateModelData(Vector3(diameter, params.Height, diameter));	
	
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{
				var d = Distance({"x" : center, "y" : y, "z" : center}, {"x" : x, "y" : y, "z" : z})
				modelData.voxels[x][y][z] = (d < params.Radius * (1 - (y / params.Height))) && (d > params.Radius * (1 - (((y + (params.Radius - params["Inner Radius"])) / params.Height))));
			}
		}
	}
	
	return modelData;
}