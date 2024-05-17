compose = ( f1, f2 ) => value => f1( f2( value ) )

add7 = ( x ) => x + 7
times10 = ( x ) => x * 10

runCompose = ( x ) => compose( add7, times10 )( x )

console.log( runCompose( 5 ) ) // 57 = 5 * 10 = 50 + 7

