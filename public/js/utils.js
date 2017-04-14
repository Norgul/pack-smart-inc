$( ".uk-overlay-hover" ).hover(
  function() {
    $( this ).children("p").fadeOut( 150 );
    $( this ).children("a").css({"background-color": "#d31f26", "color": "#fff"});
  },
	function() {
    $( this ).children("p").fadeIn( 150 );
    $( this ).children("a").css({"background-color": "transparent", "color": "#d31f26"});
  }
);

$( ".scroll" ).click(function() {
  UIkit.Utils.scrollToElement(UIkit.$('.tab-content'));
});

function technologiesTabHandler(selectedTab){
  window.location.href = selectedTab.value;
}