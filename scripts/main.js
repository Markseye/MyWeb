var topNavScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) { 
			move('.topNav')
    	.set('opacity', 1)
    	.end();
    	move('.pane1Content')
    	.set('opacity', 0)
    	.end(); }
    else {
    	move('.topNav')
    	.set('opacity', 0)
    	.end();
    	move('.pane1Content')
    	.set('opacity', 1)
    	.end();
    }
};

window.addEventListener('scroll', topNavScrollFunc);

var responsivePanes = function () {
		var x = window.innerWidth;
		if (x < 800) {
			move('#container')
			.set('flex-direction', 'column')
			.end();
			move('.pane2')
			.set('flex-direction', 'row')
			.set('margin', 0)
			.set('justify-content', 'center')
			.set('width', 'inherit')
			.end();
			move('.pane1')
			.set('position', 'initial')
			.set('width', '100%')
			.set('height', '100vh')
			.end();
			move('.setext')
			.set('padding-top', '10%')
			.end();
		}
};

window.onload = responsivePanes;

document.getElementsByClassName('pane1').onclick = function(e) {
  	move('.pane1')
    .set('opacity', 0)
    .end();
};


//add listener for if width is less to 900px to move panes to wrap