const buttons = document.querySelectorAll( '.btn' );

const operation_screen = document.getElementById( 'operation' );
const result_screen = document.getElementById( 'result' );

function replace_last_symbol( string, new_symbol ) {
    const last_char = string[ string.length - 1 ];

    if ( ( last_char === '+' || last_char === '-' || last_char === 'x' || last_char === '/' ) && ( new_symbol === '+' || new_symbol === '-' || new_symbol === 'x' || new_symbol === '/' ) ) {
        string = string.slice( 0, -1 );
    }

    string += new_symbol;
    return string;
}

function calculate( string ) {
    string = string
        .replaceAll( /(\d)(\()/g, '$1*(' )
        .replaceAll( /(\))(\d)/g, ')*$2' )
        .replaceAll( /(\))(\()/g, ')*(' )
        .replaceAll( 'x', '*' );

    return eval( string );
}

for ( let i = 0; i < buttons.length; i++ ) {
    const button = buttons[ i ];

    button.addEventListener( 'click', () => {
        if ( button.id === 'AC' ) {
            operation_screen.innerHTML = '';
            result_screen.innerHTML = '';
            return;
        }

        if ( button.id === 'DEL' ) {
            operation_screen.innerHTML = operation_screen.innerHTML.slice( 0, -1 );
            result_screen.innerHTML = '';
            return;
        }

        if ( button.id === '=' ) {
            if ( operation_screen.innerHTML !== ''  ) {
                result_screen.innerHTML = calculate( operation_screen.innerHTML );
            }

            return;
        }

        if ( button.id === 'l-bracket' ) {
            operation_screen.innerHTML += '(';
        } else if ( button.id === 'r-bracket' ) {
            operation_screen.innerHTML += ')';
        } else if ( button.id === 'dot' ) {
            operation_screen.innerHTML += '.';
        } else {
            operation_screen.innerHTML = replace_last_symbol( operation_screen.innerHTML, button.id ); 
        }
    } );
}
