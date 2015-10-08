// Jonathan Tsai
// Lab 5 Duck Hunt Code

// Loads the Duck Hunt image onto page
function init(){
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	background = new Image();
	background.src = 'duckhunt-background.gif';

	ctx.drawImage(background,0,0);
}