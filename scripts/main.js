var topNavScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 0) { 
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

window.addEventListener('scroll', topNavScrollFunc);

/*check for mobile view */

window.onload = function() {
if ((navigator.userAgent.match(/Android/i) != null && navigator.userAgent.match(/Android/i).length > 0) || (navigator.userAgent.match(/BlackBerry/i) != null && navigator.userAgent.match(/BlackBerry/i).length > 0) || (navigator.userAgent.match(/iPhone|iPad|iPod/i) != null && navigator.userAgent.match(/iPhone|iPad|iPod/i).length > 0) || (navigator.userAgent.match(/Opera Mini/i) != null && navigator.userAgent.match(/Opera Mini/i).length > 0) || (navigator.userAgent.match(/IEMobile/i) != null && navigator.userAgent.match(/IEMobile/i).length > 0)) {
			move('.pane2Content')
    	.set('font-size', '6vh')
    	.end();
    	move('.dataPaneContent')
    	.set('font-size', '6vh')
    	.end();
    	move('.meetingPaneContent')
    	.set('font-size', '6vh')
    	.end();
}};

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

/*$('.chevron').click(function(){
	if(window.top = window.self) {
		$.scrollTo($('#pane2'), 500);
	}	
});

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});*/

//add listener for if width is less to 900px to move panes to wrap