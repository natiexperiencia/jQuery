$(document).ready(function() {
	$('#dialog').dialog();

	$( "#dialog-confirm" ).dialog({
      resizable: false,
      height:240,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });

    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
});