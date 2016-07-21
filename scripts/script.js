
var defaultGrid= 4;
var inputGrid = defaultGrid;

$(document).ready(function(){
	//initialize grid
	createGrid(defaultGrid);

	/*--------------------------------Click handlers------------------------------*/
	//clear grid
	$('#clear').click(function(){
		refreshGrid();
	});

	//hover-pen mode
	$("#simpleDraw").click(function(){
		$('.node').mouseenter(function(){
			$(this).css("background-color", "black");
		});
	});


});

/*--------------------------------functions------------------------------*/
//creates grid: number of nodes/squares is "numLength"^2
function createGrid( numLength ){
	$grid = $('#grid');

	//node creation: creates "numLength"^2 nodes
	for (var i = 0; i < (numLength*numLength); i++){
		$grid.append("<div class='node'></div>");
	}

	//dynamic node dimensions: sets dimensions of node according to the grid-wrapper width 
	var nodeWidth = ($grid.width())/(numLength);
	$('.node').css({"width":nodeWidth, "height":nodeWidth});

}

//returns a color in rgb that has randomly generated red, green and blue values
function randomColor() {
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";

}

//clears grid
function refreshGrid(){
	$('.node').css({
		"background-color":"white", 
		"opacity":"1"
	});
}