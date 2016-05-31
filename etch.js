//Insert a 16x16 grid of divs
var $container = $("<div class='container'></div>");

$("body").prepend($container);

for(var i = 0; i < 16; i++){
	for(var j = 0; j < 16; j++){
		var $div = $("<div class='div1'></div>");
		$div.appendTo(".container");
	}
};

//change colors on hover
$(".div1").hover(function(){
	$(this).addClass("newColor");
})


//on reset
	//prompt user for new grid size
	function resetGrid() {
		
		var newSquares = prompt("How many squares per side would you like?");
		$(".div1").removeClass("newColor");
		

		for(var i = 0; i < newSquares; i++){
 			for(var j = 0; j < newSquares; j++){
			var $newDiv = $("<div class='div2'></div>");
			$("div").removeClass("div1");
			$newDiv.appendTo(".container");
 	}
 };

}


