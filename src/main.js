const buttons = document.querySelectorAll( '.btn' );

for ( let i = 0; i < buttons.length; i++ ) {
    const button = buttons[ i ];

    button.addEventListener( 'click', () => {
        if ( button.id === 'l-bracket' ) {
            console.log( '(' );
        } else if ( button.id === 'r-bracket' ) {
            console.log( ')' );
        } else if ( button.id === 'dot' ) {
            console.log( '.' );
        } else {
            console.log( button.id );
        }
    } );
}
