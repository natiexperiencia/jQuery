$(document).ready(function() {
	/*
	*
	*	jQuery rotate
	*	http://jqueryrotate.com/
	*/
	var angle = 0;
  	setInterval(function(){
    	angle+=3;
  		$("#cuadrado").rotate(angle);
  	},50);

  	$("#cuadrado2").rotate({bind:{
  		click: function(){
    		$(this).rotate({
	      		angle: 0,
	      		animateTo:-180,
	      		easing: $.easing.easeInOutElastic
      		})
    	}
  	}
	});
});