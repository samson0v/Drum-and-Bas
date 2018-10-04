document.onkeydown = function checkKeycode(event){

	keycode = event.keyCode;

	switch(keycode){

		case 68:
			aap(document.getElementById('D'), document.getElementById('kick'));
			break;
		case 70:
			aap(document.getElementById('F'), document.getElementById('boom'));
			break;
		case 71:
			aap(document.getElementById('G'), document.getElementById('clap'));
			break;
		case 72:
			aap(document.getElementById('H'), document.getElementById('ride'));
			break;
		case 74:
			aap(document.getElementById('J'), document.getElementById('tom'));
			break;
		case 75:
			aap(document.getElementById('K'), document.getElementById('snare'));
			break;

	}

}

function aap(e, s){

	s.play();

	e.style.height = "110px";

	setTimeout(function(){
		e.style.height = "100px";
	}, 50)

}