//Scrap Mechanic Data
var sm_colors = [
		{"title" : "Very Light Gray", "code" : "EEEEEE" },
		{"title" : "Light Gray", "code" : "7F7F7F"},
		{"title" : "Dark Gray", "code" : "4A4A4A"},
		{"title" : "Very Dark Gray", "code" : "222222" },		
		{"title" : "Very Light Yellow", "code" : "F5F071" },
		{"title" : "Light Yellow", "code" : "E2DB13" },
		{"title" : "Dark Yellow", "code" : "817C00"},
		{"title" : "Very Dark Yellow", "code" : "323000"},		
		{"title" : "Very Light Lime Green", "code" : "CBF66F"},
		{"title" : "Light Lime Green", "code" : "A0EA00"},
		{"title" : "Dark Lime Green", "code" : "577D07"},
		{"title" : "Very Dark Lime Green", "code" : "375000"},	
		{"title" : "Very Light Green", "code" : "68FF88"},
		{"title" : "Light Green", "code" : "19E753"},
		{"title" : "Dark Green", "code" : "0E8031"},
		{"title" : "Very Dark Green", "code" : "064023"},
		{"title" : "Very Light Cyan", "code" : "7EEDED"},
		{"title" : "Light Cyan", "code" : "2CE6E6"},
		{"title" : "Dark Cyan", "code" : "118787"},
		{"title" : "Very Dark Cyan", "code" : "0A4444"},
		{"title" : "Very Light Blue", "code" : "4C6FE3"},
		{"title" : "Light Blue", "code" : "0A3EE2"},
		{"title" : "Dark Blue", "code" : "0F2E91"},
		{"title" : "Very Dark Blue", "code" : "0A1D5A"},
		{"title" : "Very Light Violet", "code" : "AE79F0"},
		{"title" : "Light Violet", "code" : "7514ED"},
		{"title" : "Dark Violet", "code" : "500AA6"},
		{"title" : "Very Dark Violet", "code" : "35086C"},
		{"title" : "Very Light Magenta", "code" : "EE7BF0"},
		{"title" : "Light Magenta", "code" : "CF11D2"},
		{"title" : "Dark Magenta", "code" : "720A74"},
		{"title" : "Very Dark Magenta", "code" : "520653"},
		{"title" : "Very Light Red", "code" : "F06767"},
		{"title" : "Light Red", "code" : "D02525"},
		{"title" : "Dark Red", "code" : "7C0000"},
		{"title" : "Very Dark Red", "code" : "560202"},
		{"title" : "Very Light Orange", "code" : "EEAF5C"},
		{"title" : "Light Orange", "code" : "DF7F00"},
		{"title" : "Dark Orange", "code" : "673B00"},
		{"title" : "Very Dark Orange", "code" : "472800"}
	];
				
var sm_blocks = [
		{"imgID" : 37, "id" : "a6c6ce30-dd47-4587-b475-085d55c6a3b4", "title":"Concrete Block 1" },
		{"imgID" : 38, "id" : "df953d9c-234f-4ac2-af5e-f0490b223e71", "title":"Wood 1" },
		{"imgID" : 39, "id" : "8aedf6c2-94e1-4506-89d4-a0227c552f1e", "title":"Metal 1" },
		{"imgID" : 40, "id" : "09ca2713-28ee-4119-9622-e85490034758", "title":"Caution" },
		{"imgID" : 41, "id" : "8ca49bff-eeef-4b43-abd0-b527a567f1b7", "title":"Tile" },
		{"imgID" : 42, "id" : "0603b36e-0bdb-4828-b90c-ff19abcdfe34", "title":"Brick" },
		{"imgID" : 43, "id" : "5f41af56-df4c-4837-9b3c-10781335757f", "title":"Glass" },
		{"imgID" : 44, "id" : "749f69e0-56c9-488c-adf6-66c58531818f", "title":"Glass Tile" },
		{"imgID" : 45, "id" : "073f92af-f37e-4aff-96b3-d66284d5081c", "title":"Path Light" },
		{"imgID" : 46, "id" : "027bd4ec-b16d-47d2-8756-e18dc2af3eb6", "title":"Spaceship" },
		{"imgID" : 47, "id" : "f0cba95b-2dc4-4492-8fd9-36546a4cb5aa", "title":"Cardboard" },		
		{"imgID" : 0, "id" : "1fc74a28-addb-451a-878d-c3c605d63811", "title":"Scrap Wood" },
		{"imgID" : 1, "id" : "1897ee42-0291-43e4-9645-8c5a5d310398", "title":"Wood 2" },
		{"imgID" : 2, "id" : "061b5d4b-0a6a-4212-b0ae-9e9681f1cbfb", "title":"Wood 3" },
		{"imgID" : 3, "id" : "1f7ac0bb-ad45-4246-9817-59bdf7f7ab39", "title":"Scrap Metal" },
		{"imgID" : 4, "id" : "1016cafc-9f6b-40c9-8713-9019d399783f", "title":"Metal 2" },
		{"imgID" : 5, "id" : "c0dfdea5-a39d-433a-b94a-299345a5df46", "title":"Metal 3" },
		{"imgID" : 6, "id" : "30a2288b-e88e-4a92-a916-1edbfc2b2dac", "title":"Scrap Stone" },
		{"imgID" : 7, "id" : "ff234e42-5da4-43cc-8893-940547c97882", "title":"Concrete 2" },
		{"imgID" : 8, "id" : "e281599c-2343-4c86-886e-b2c1444e8810", "title":"Concrete 3" },
		{"imgID" : 9, "id" : "f5ceb7e3-5576-41d2-82d2-29860cf6e20e", "title":"Cracked Concrete"},
		{"imgID" : 10, "id" : "cd0eff89-b693-40ee-bd4c-3500b23df44e", "title":"Concrete Slab" },
		{"imgID" : 11, "id" : "220b201e-aa40-4995-96c8-e6007af160de", "title":"Rusted Metal" },
		{"imgID" : 12, "id" : "25a5ffe7-11b1-4d3e-8d7a-48129cbaf05e", "title":"Extruded Metal" },
		{"imgID" : 13, "id" : "f406bf6e-9fd5-4aa0-97c1-0b3c2118198e", "title":"Bubble Plastic" },
		{"imgID" : 14, "id" : "628b2d61-5ceb-43e9-8334-a4135566df7a", "title":"Plastic" },
		{"imgID" : 15, "id" : "9be6047c-3d44-44db-b4b9-9bcf8a9aab20", "title":"Insulation" },
		{"imgID" : 16, "id" : "b145d9ae-4966-4af6-9497-8fca33f9aee3", "title":"Plaster" },
		{"imgID" : 17, "id" : "febce8a6-6c05-4e5d-803b-dfa930286944", "title":"Carpet" },
		{"imgID" : 18, "id" : "e981c337-1c8a-449c-8602-1dd990cbba3a", "title":"Painted Wall" },
		{"imgID" : 19, "id" : "4aa2a6f0-65a4-42e3-bf96-7dec62570e0b", "title":"Net" },
		{"imgID" : 20, "id" : "3d0b7a6e-5b40-474c-bbaf-efaa54890e6a", "title":"Solid Net" },
		{"imgID" : 21, "id" : "ea6864db-bb4f-4a89-b9ec-977849b6713a", "title":"Punched Steel" },
		{"imgID" : 22, "id" : "a479066d-4b03-46b5-8437-e99fec3f43ee", "title":"Striped Net" },
		{"imgID" : 23, "id" : "b4fa180c-2111-4339-b6fd-aed900b57093", "title":"Square Mesh" },
		{"imgID" : 24, "id" : "920b40c8-6dfc-42e7-84e1-d7e7e73128f6", "title":"Restroom" },
		{"imgID" : 25, "id" : "f7d4bfed-1093-49b9-be32-394c872a1ef4", "title":"Diamond Plate" },
		{"imgID" : 26, "id" : "3e3242e4-1791-4f70-8d1d-0ae9ba3ee94c", "title":"Aluminum" },
		{"imgID" : 27, "id" : "d740a27d-cc0f-4866-9e07-6a5c516ad719", "title":"Worn Metal" },
		{"imgID" : 28, "id" : "4ad97d49-c8a5-47f3-ace3-d56ba3affe50", "title":"Spaceship Floor" },
		{"imgID" : 29, "id" : "c56700d9-bbe5-4b17-95ed-cef05bd8be1b", "title":"Sand" },
		{"imgID" : 30, "id" : "b5ee5539-75a2-4fef-873b-ef7c9398b3f5", "title":"Armored Glass" }
		/*
		{"imgID" : 31, "id" : "", "title":"x" },
		{"imgID" : 32, "id" : "", "title":"a" },
		{"imgID" : 33, "id" : "", "title":"b" },
		{"imgID" : 34, "id" : "", "title":"c" },
		{"imgID" : 35, "id" : "", "title":"d" }	*/
	];

		
//Will create a scrap mechanic "child" body.		
function CreateBlock(x, y, z, color, width, height, depth)
{
	var block = {};
	block["bounds"] = {"x" : width, "y" : height, "z" : depth};
	block["color"] = selectedColor.code;
	block["pos"] = {"x" : x, "y" : y, "z" : z};
	block["shapeId"] = selectedBlock.id
	block["xaxis"] = 1;
	block["zaxis"] = 3;
	return block;
}

//Accepts a boolean 3D grid and turns it into an array of blocks.
function ConvertModelDataToBlockList(modelData)
{
	Logger("Locating IDs...");
	var idData = GenerateIdData(modelData);
	Logger("Merging children...");
	var mergedIdData = MergeIdData(idData);
	Logger("Creating block list...");
	var blockList = CreateBlockList(mergedIdData);
	
	Logger("Final child count: <span class='red'>" + blockList.blocks.length + "</span>");
	Logger("Child reduction:  <span class='red'>" + Math.round(blockCounter / blockList.blocks.length) + "</span>x");
	
	return blockList;
}

var blockCounter = 0;
function GenerateIdData(modelData)
{
	//Is incremented to give each "block" its own ID.
	var idCounter = 0;
	blockCounter = 0;
	var activeID = false;
	
	//The program stores data about each 1x1x1 block's ID here. -1 = Available.
	var idData = {"voxels" : [], "size" : modelData.size };
	
	//Initialize the idData.
	for(var x = 0; x < idData.size.x; x++)
	{
		idData.voxels[x] = [];
		for(var y = 0; y < idData.size.y; y++)
		{
			idData.voxels[x][y] = [];
			for(var z = 0; z < idData.size.z; z++)
			{
				idData.voxels[x][y][z] = -1;
			}
		}
	}		
	
	//Loop over the 3 dimensions of the model data.
	for(var x = 0; x < modelData.size.x; x++)
	{
		for(var y = 0; y < modelData.size.y; y++)
		{
			for(var z = 0; z < modelData.size.z; z++)
			{								
				//If this cell in the model data is true (has a block in it...)
				if(modelData.voxels[x][y][z])
				{		
					blockCounter++;
					//Is this cell registered to an id?
					if(idData.voxels[x][y][z] != -1)
					{
						//The cell already has an ID assigned, so skip it.
						continue;
					}
					
					//The cell is still unregistered.
					//If not running on a block
					if(!activeID)
					{					
						//Start running.
						activeID = true;
						//Set the first blocks ID.
						idData.voxels[x][y][z] = idCounter;							
					}
					else
					{
						//Already running
						//The cell must equal -1 and is true
						//Set the cell to the current id
						idData.voxels[x][y][z] = idCounter;
					}
				}
				else
				{
					//The current cell is false.
					//If running on a block:
					if(activeID)
					{
						//Stop running
						activeID = false;
						//Increment the ID counter
						idCounter++;
					}
				}					
			}
			
			//z has ended. If we are still running, stop running and increment the counter
			if(activeID){
				activeID = false;
				idCounter++;
			}
		}		
	}	
	
	Logger("Block count: <span class='red'>" + blockCounter + "</span>");
	Logger("Combined row block count:" + idCounter);
	return idData;	
}

function MergeIdData(idData)
{	
	for(var x = 0; x < idData.size.x; x++)
	{
		for(var y = 0; y < idData.size.y; y++)
		{
			if(y == idData.size.y - 1)
			{
				//last row.
				break;
			}
			
			var trackingID = -1;
			var tracking = false;
			var trackedPositions = [];
			for(var z = 0; z < idData.size.z; z++)
			{
				//Are we currently tracking a bar?
				if(tracking)
				{
					var barEnded = idData.voxels[x][y][z] == -1;
					var trackedBarEnded = idData.voxels[x][y+1][z] == -1;
					
					//Check the bars
					if(barEnded || trackedBarEnded)
					{
						if(barEnded && trackedBarEnded)
						{
							//The bars ended at the same time.
							//Set all the tracked positions to the current ID.
							for(var i = 0; i < trackedPositions.length; i++)
							{
								idData.voxels[trackedPositions[i].x][trackedPositions[i].y][trackedPositions[i].z] = trackingID;
							}
							
							trackingID = -1;
							trackedPositions = [];
							tracking = false;
							
						}
						else
						{
							//One of the bars ended.
							trackingID = -1;
							trackedPositions = [];
							tracking = false;
						}
							
					}
					//Both are still going
					{
						trackedPositions.push(Vector3(x,y+1,z));
					}
				}
				//Not tracking
				else{
					
					//The cell is not used.
					if(idData.voxels[x][y][z] == -1)
					{
						continue;
					}
					else
					{
						//The cell is used.
						//The previous cell has to be undefined or -1
						if(z == 0)
						{
							if(idData.voxels[x][y + 1][z] != -1)
							{
								//The cell started in the same spot.
								trackingID = idData.voxels[x][y][z];
								tracking = true;
								trackedPositions.push(Vector3(x,y+1,z));
							}
							
						}
						else if(idData.voxels[x][y][z - 1] != -1)
						{
							//This is not the start of this block.
							continue;
						}
						else
						{
							//this is not the first cell.
							//check if the bar below us (y+) is assigned on the same point.
							//Is the cell used?
							if(idData.voxels[x][y + 1][z] != -1)
							{
								//Did the cell start there?
								if(idData.voxels[x][y + 1][z - 1] == -1)
								{
									//The cell started in the same spot.
									trackingID = idData.voxels[x][y][z];
									tracking = true;
									trackedPositions.push(Vector3(x,y+1,z));
								}
							}
						}					
					}
				}
			}
		}
	}
	
	//console.log(idData);
	return idData;
}

function CreateBlockList(idData)
{
	var blockList = [];
	var usedIDs = [];
	
	for(var x = 0; x < idData.size.x; x++)
	{
		for(var y = 0; y < idData.size.y; y++)
		{
			for(var z = 0; z < idData.size.z; z++)
			{
				//If this cell is used
				if(idData.voxels[x][y][z] != -1)
				{
					if(usedIDs.includes(idData.voxels[x][y][z]))
					{
						//The ID is already used.
						continue;
					}
					
					var sizeY = 0;
					var sizeZ = 0;
					
					//Get the size of the field.
					for(var ySearch = y; ySearch < idData.size.y; ySearch++)
					{
						if(idData.voxels[x][ySearch][z] == idData.voxels[x][y][z])
						{
							//The next row is the same ID.
							sizeY++;
						}
						else
						{
							//The IDs dont match.
							break;
							
						}
					}
					
					for(var zSearch = z; zSearch < idData.size.z; zSearch++)
					{
						if(idData.voxels[x][y][zSearch] == idData.voxels[x][y][z])
						{
							//The next cell is the same ID.
							sizeZ++;
						}
						else
						{
							//The IDs dont match.
							break;
							
						}
					}
					
					var block = CreateBlock(x,y,z, "d02525", 1, sizeY, sizeZ);
					usedIDs.push(idData.voxels[x][y][z]);
					blockList.push(block);
				}				
			}
		}
	}
	
	idData.blocks = blockList;
	
	return idData;
}


function GenerateBlueprint(modelData)
{
	var data = {	
		"bodies": [{
			"childs" : []
		}],
		"version": 1
	}
	
	for(var i = 0; i < modelData.blocks.length; i++)
	{
		data["bodies"][0]["childs"].push(modelData.blocks[i]);
	}
	
	return data;
}
