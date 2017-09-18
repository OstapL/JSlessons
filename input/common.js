function funcheck() {
	var chbox;
	chbox=document.getElementById('one');
	if (chbox.checked) {
		alert('check');
	}
	else {
		alert('no check');
}
}

function radio() {
	var radi=document.getElementsByName('r1')
	for (var i = 0; i < radi.length; i++) {
		if (radi[i].checked) {
			alert('выбран' +i+ 'элемент')
		}
	}
}