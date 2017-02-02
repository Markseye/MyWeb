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

/*var topNavScrollFunc = function () {
    var y = window.scrollY;
    var tnav = document.getElementsByClassName("topNav")
    var p1c = document.getElementsByClassName("pane1Content")
    if (y >= 800) { 
			p1c.parentNode.removeChild(pane1content)
		}
    else {
    	move('.topNav')
    	.set('opacity', 0)
    	.end();
    	move('.pane1Content')
    	.set('opacity', 1)
    	.end();
    }
};*/

window.addEventListener('scroll', topNavScrollFunc);

//add listener for if width is less to 900px to move panes to wrap