switch('color') {
    case '0':
        $( "body" ).removeClass( "dark" );
        $( ".inner-switch" ).text( "white" );
        $( "h1" ).removeClass( "dark-h1" );
        $( ".inner-switch" ).removeClass( "inner-dark-switch" );
        break;
    case '1':
        $( "body" ).addClass( "dark" );
        $( ".inner-switch" ).text( "dark" );
        $( "h1" ).addClass( "dark-h1" );
        $( ".inner-switch" ).addClass( "inner-dark-switch" );
        break;
    default:
        break;
}