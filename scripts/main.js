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

//add listener for if width is less to 900px to move panes to wrap