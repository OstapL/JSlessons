function selec( ) {
	var sel = document.getElementById('mySelect').selectedIndex;
	var options = document.getElementById('mySelect').options;
	alert('выбрана опция ' +options[sel].text);
};

function range() {
	var rng = document.getElementById('r1');
	var i1 = document.getElementById('i1');
	i1.value = rng.value;

};

function wid() {
	var rng = document.getElementById('r1');
	var div = document.getElementById('test');
	div.style.width = (rng.value * 10) + 'px';

}