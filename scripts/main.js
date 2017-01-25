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
}

window.addEventListener('scroll', topNavScrollFunc);

document.getElementsByClassName('pane1').onclick = function(e) {
  	move('.pane1')
    .set('opacity', 0)
    .end();
};