
var defaultGrid= 50;
var inputGrid = defaultGrid;

$(document).ready(function(){
	//initialize grid
	createGrid(defaultGrid);

	/*--------------------------------Click handlers------------------------------*/
	//reset grid to default
	$('#reset').click(function(){
		$(".node").remove();
		createGrid(defaultGrid);
	});

	//clear grid
	$('#clear').click(function(){
		refreshGrid();
	});

	//hover-pen mode: upon mouse enter, changes the node to black
	$("#simpleDraw").click(function(){
		$('.node').mouseenter(function(){
			$(this).css("background-color", "black");
		});
	});

	//rainbow mode: upon mouse enter, changes node to random color
	$("#rainbow").click(function(){
		$('.node').mouseenter(function(){
			$(this).css("background-color", randomColor()); //function returns with brackets!
		});
	});

	//trail mode: upon mouse enter, briefly illuminates node
	$("#trail").click(function(){
		$(".node").hover(function() {
			$(this).css("opacity", 1);
		}, function () {
			$(this).fadeTo('slow', 0);
		});
	});

	//change dimensions
	$("#dimension").click(function(){
		$(".node").remove();

		inputGrid = parseInt(prompt("Enter grid length(1-80): ",50),10);

		if (inputGrid > 0&& inputGrid <=80){
			createGrid(inputGrid);
		} else{
			alert("invalid input (grid length must be between 1-80)");
		}
	})

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
	return "rgb(" + red + "," + green + "," + blue + ")"; //tricky brackets are tricky!
}

//clears grid
function refreshGrid(){
	$('.node').css({
		"background-color":"white", 
		"opacity":"1"
	});
}