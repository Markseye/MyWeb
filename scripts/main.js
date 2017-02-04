var topNavScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 500) { 
			move('.topNav')
    	.set('opacity', 1)
    	.set('display', 'flex')
    	.end();
    	/* for split front page load
    	move('.pane1Content')
    	.set('opacity', 0)
    	.set('display', 'none')
    	.end(); */
    	}
    else {
    	move('.topNav')
    	.set('opacity', 0)
    	.set('display', 'none')
    	.end();
    	/* for split front page load
    	move('.pane1Content')
    	.set('opacity', 1)
    	.set('display', '')
    	.end();  */
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

$('chevron').click(function(){
	console.log(window.self)
	console.log(window.self)
	if(window.top = window.self) {
		$.scrollTo($('#pane2'), 500);
	}	
});

//add listener for if width is less to 900px to move panes to wrap