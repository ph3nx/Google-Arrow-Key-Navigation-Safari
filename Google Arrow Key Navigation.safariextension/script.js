document.getElementById('gsr').onkeydown = function(e) {
	key = window.event? event.keyCode: e.keyCode;
	if (key) {
		if (key == 39) {
			document.getElementById('pnnext').click();
			e.preventDefault();
		} else if (key == 37) {
			document.getElementById('pnprev').click();
			e.preventDefault();
		}
	} 
}
