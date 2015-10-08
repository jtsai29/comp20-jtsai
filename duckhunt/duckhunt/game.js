// Jonathan Tsai
// Lab 5 Duck Hunt Code

// Loads the Duck Hunt image onto page
function init(){
	// Sets up the canvas for display
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	// Creates and draws background
	background = new Image();
	background.src = 'duckhunt-background.gif';
	ctx.drawImage(background,0,0);

	// Draw birds into background
	ducks = new Image();
	ducks.src = 'duckhunt_various_sheet.png';
	
	// 1st duck has top left corner at (40, 120)
	// and bottom right corner at (75, 145)
	// Should be drawn into background at (75, 70)
	width1 = 35;
	height1 = 25;
	ctx.drawImage(ducks, 40, 120, width1, 
		height1, 75, 70, width1, height1);

	// 2nd duck has top left corner at (127, 117)
	// and bottom right corner at (165, 146)
	// Should be drawn into background at (135, 40)
	width2 = 38;
	height2 = 29;
	ctx.drawImage(ducks, 127, 117, width2,
		height2, 135, 40, width2, height2);
}