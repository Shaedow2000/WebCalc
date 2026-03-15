const buttons = document.querySelectorAll( '.btn' );

const operation_screen = document.getElementById( 'operation' );
const result_screen = document.getElementById( 'result' );

for ( let i = 0; i < buttons.length; i++ ) {
    const button = buttons[ i ];

    button.addEventListener( 'click', () => {
        if ( button.id === 'AC' ) {
            operation_screen.innerHTML = '';
            return;
        }

        if ( button.id === 'DEL' ) {
            operation_screen.innerHTML = operation_screen.innerHTML.slice( 0, -1 );
            return;
        }

        if ( button.id === 'l-bracket' ) {
            operation_screen.innerHTML += '(';
        } else if ( button.id === 'r-bracket' ) {
            operation_screen.innerHTML += ')';
        } else if ( button.id === 'dot' ) {
            operation_screen.innerHTML += '.';
        } else {
            operation_screen.innerHTML += button.id; 
        }
    } );
}
