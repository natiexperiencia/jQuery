$(function() {
	/*
	*metodo 1
	*/
        /*$('#m1').click(function() {
                $(this).children('li').slideDown('slow');
                $('#m2').children('li').slideUp('slow');
        });
        
        $('#m2').click(function() {
                $(this).children('li').slideDown('slow');
                $('#m1').children('li').slideUp('slow');
        });*/

	/*
	*metodo 2
	*/
    	/*for(i in $('#m1')){
            $('#m1').eq( i ).click(function(){
            	$(this).children('li').toggle('slow');
            });
        };
        for(i in $('#m2')){
            $('#m2').eq( i ).click(function(){
            	$(this).children('li').toggle('slow');
            });
        };*/

    /*
    *metodo 3
    */
    	$('#m1').click(function(){
                $(this).children('li').slideUp('slow');
                $('#m2').children('li').slideDown('slow');
        });
        $('#m2').click(function(){
                $(this).children('li').slideUp('slow');
                $('#m1').children('li').slideDown('slow');
        });

});
