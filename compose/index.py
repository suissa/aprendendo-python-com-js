compose = lambda f1, f2: lambda value: f1( f2( value ) )

add7 = lambda x: x + 7
times10 = lambda x: x * 10

runCompose = lambda x: compose( add7, times10 )( x )

print( runCompose( 5 ) ) # 57 = 5 * 10 = 50 + 7

