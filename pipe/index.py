pipe = lambda f1, f2: lambda value: f2( f1( value ) )

add7 = lambda x: x + 7
times10 = lambda x: x * 10

runPipe = lambda x: pipe( add7, times10 )( x )
print( runPipe( 5 ) ) # 120 = 5 + 7 = 12 * 10 = 120
