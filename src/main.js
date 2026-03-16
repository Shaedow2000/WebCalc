if ( localStorage.mode === undefined ) {
    localStorage.setItem( 'mode', 'light' );
}

const buttons = document.querySelectorAll( '.btn' );

const operation_screen = document.getElementById( 'operation' );
const result_screen = document.getElementById( 'result' );

function scroll_to_last_char() {
    operation_screen.scrollLeft = operation_screen.scrollWidth;
}

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
        result_screen.innerHTML = '';

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
                try {
                    result_screen.innerHTML = calculate( operation_screen.innerHTML );
                } catch ( err ) {
                    result_screen.innerHTML = err.name; 
                }
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

        scroll_to_last_char();
    } );
}

const mode_btn = document.getElementById( 'mode-btn' );

const sun_icon = document.getElementById( 'sun' );
const moon_icon = document.getElementById( 'moon' );

function switch_modes() {
    if ( localStorage.mode === 'light' ) {
        localStorage.mode = 'dark';
        document.documentElement.classList.add( 'dark' );
    } else {
        localStorage.mode = 'light';
        document.documentElement.classList.remove( 'dark' );
    }
}

function switch_icons() {
    sun_icon.classList.toggle( 'hide' );
    moon_icon.classList.toggle( 'hide' );
}

function set_mode_from_localStorage() {
    if ( localStorage.mode === 'light' ) {
        sun_icon.classList.add( 'hide' );
        moon_icon.classList.remove( 'hide' );

        document.documentElement.classList.remove( 'dark' );
    } else {
        sun_icon.classList.remove( 'hide' );
        moon_icon.classList.add( 'hide' );

        document.documentElement.classList.add( 'dark' );
    }
}

mode_btn.addEventListener( 'click', () => {
    switch_icons();
    switch_modes();
} );

set_mode_from_localStorage();
