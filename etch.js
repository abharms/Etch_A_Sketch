//Insert a 16x16 grid of divs
var $container = $("<div class='container'></div>");
$("body").prepend($container);

for(var i = 0; i < 16; i++){
	for(var j = 0; j < 16; j++){
		var $div = $("<div class='square'></div>");
		$div.appendTo(".container");
	}
};

//change colors on hover
function hoverColor() {
	$(".square").hover(function(){
	$(this).addClass("hoverColor");
  })
};
//invoke hover function
hoverColor();



//on reset
	function resetGrid() {
		//prompt user for new grid size
		var newSquares = prompt("How many squares per side would you like?");
		//remove white hover color
		$(".square").removeClass("newColor");
		//remove all squares from container
		$("div").removeClass("square");

		//create new squares based on user input
		for(var i = 0; i < newSquares; i++){
 			for(var j = 0; j < newSquares; j++){
			var $newDiv = $("<div class='square'></div>");
			$newDiv.appendTo(".container");
 	}
 		//change container dimensions based on amount of new squares user chose
 		var containerHeightWidth = (newSquares * 20) + (newSquares * 2);
 		$(".container").width(containerHeightWidth).height(containerHeightWidth);
 		//invoke hover function
 		hoverColor();
 };

}


