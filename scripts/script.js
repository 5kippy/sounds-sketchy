
var defaultGrid= 100;

$(document).ready(function(){
	createGrid(defaultGrid);
});


function createGrid( numLength ){
	$grid = $('#grid');


	//node creation
	for (var i = 0; i < (numLength*numLength); i++){
		$grid.append("<div class='node'></div>");
	}

	//dynamic node dimensions 
	var nodeWidth = ($grid.width())/(numLength);
	$('.node').css({"width":nodeWidth, "height":nodeWidth});

}