pipe = ( f1, f2 ) => value => f2( f1( value ) )

add7 = ( x ) => x + 7
times10 = ( x ) => x * 10

runPipe = ( x ) => pipe( add7, times10 )( x )
console.log( runPipe( 5 ) ) // 120 = 5 + 7 = 12 * 10 = 120
