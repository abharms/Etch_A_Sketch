(function init() {
	insertGrid();
	hoverColor();
})();


//Insert a 16x16 grid of divs
function insertGrid() {
	var $container = $("<div class='container'></div>");
	$("body").prepend($container);
	createDefaultSquares();	
}

function createDefaultSquares() {
	for(var i = 0; i < 16; i++){
	  for(var j = 0; j < 16; j++){
		var $div = $("<div class='square'></div>");
		$div.appendTo(".container");
	}
  };
}


//functions to run when buttons are clicked
function resetToRandomColors() {
	removeWhiteHoverColor()
	randomColorSquares();
}

function resetToDefault() {
	removeContent();
	createDefaultSquares();
	hoverColor();
	
	var containerHeightWidth = 352;
 		$(".container").width(containerHeightWidth).height(containerHeightWidth);
}

function chooseGridSize() {
	//prompt user for new grid size
		var newSquares = prompt("How many squares per side would you like?");
		//remove all squares from container
		removeContent();
		//create new squares based on user input
		for(var i = 0; i < newSquares; i++){
 			for(var j = 0; j < newSquares; j++){
			var $newDiv = $("<div class='square'></div>");
			$newDiv.appendTo(".container");
 	}
 		//change container dimensions based on amount of new squares user chose
 		var containerHeightWidth = (newSquares * 20) + (newSquares * 2);
 		$(".container").width(containerHeightWidth).height(containerHeightWidth);
 		hoverColor();
 };
}

//change squares to white on hover
function hoverColor() {
	$(".square").hover(function(){
	$(this).addClass("hoverColor");
  })
};

//change squares to random color on hover
function randomColorSquares() {
	$(".square").hover(function(){
	$(this).css('background', getRandomColor);
  })
}

//remove white hover color
function removeWhiteHoverColor() {
	$(".square").removeClass("hoverColor");
}

//removes content from container div
function removeContent() {
	$(".container").empty();
}

//generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


