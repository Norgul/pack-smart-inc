$( ".uk-overlay-hover" ).hover(
  function() {
    $( this ).children("p").fadeOut( 150 );
  },
	function() {
    $( this ).children("p").fadeIn( 150 );
  }
);
