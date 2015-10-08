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

	// Draws birds into background
	birds = new Image();
	birds.src = 'duckhunt_various_sheet.png';
	
	// 1st Bird has top left corner at (40, 120)
	// and bottom right corner at (75, 145)
	// Width = 35, Height = 25
	// Should be drawn into background at (85, 85)
	ctx.drawImage(birds, 40, 120, 35, 25,
		85, 85, 35, 25);

}