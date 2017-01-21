
var tmpl = document.querySelector('#tmpl');
console.log(tmpl);
tmpl.heading = 'Hello HomeOfRecords visitors!';
tmpl.page = 'hondo';

document.addEventListener('WebComponentsReady', function() {
	var navicon = document.getElementById('navicon');
	var drawerpanel = document.getElementById('drawerpanel');
	navicon.addEventListener('click', function() {
		console.log('yeah');
		drawerpanel.togglePanel();
	});
});
