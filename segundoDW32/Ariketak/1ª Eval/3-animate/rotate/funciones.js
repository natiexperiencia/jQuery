$(document).ready(function() {
	$('div').mouseover(function(event) {
		$('#cubo').animate({ borderSpacing: 900 }, {
    		step: function(now,fx) {
      			$(this).css('-webkit-transform','rotate('+now+'deg)'); 
      			$(this).css('-moz-transform','rotate('+now+'deg)');
      			$(this).css('transform','rotate('+now+'deg)');
      			$(this).css('marginLeft',now+'px');
    		},duration:5000
		},'linear');
	});//moseover
});//ready