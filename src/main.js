const buttons = document.querySelectorAll( '.btn' );

for ( let i = 0; i < buttons.length; i++ ) {
    const button = buttons[ i ];

    button.addEventListener( 'click', () => {
        console.log( button.id );
    } );
}
