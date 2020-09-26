$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "white" );
      $( "h1" ).removeClass( "dark-h1" );
      $( ".inner-switch" ).removeClass( "inner-dark-switch" );
      localStorage.setItem( 'color', 0);
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "dark" );
      $( "h1" ).addClass( "dark-h1" );
      $( ".inner-switch" ).addClass( "inner-dark-switch" );
      localStorage.setItem( 'color', 1);
    }
});