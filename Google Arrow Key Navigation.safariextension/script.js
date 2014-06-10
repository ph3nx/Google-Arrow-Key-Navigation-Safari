document.getElementById('gsr').onkeydown = function(e) {
	key = window.event? event.keyCode: e.keyCode;
	if (key) {
		e.preventDefault();
		if (key == 39) {
			document.getElementById('pnnext').click();
		} else if (key == 37) {
			document.getElementById('pnprev').click();
		}
	} 
}