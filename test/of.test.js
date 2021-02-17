import {Vector as vec} from "../src"
import c from './common'


describe( `.of()`, () => {

    describe( `.of()`, () => {
        c.itShouldExistAsStaticMethod( 'of' )
        c.itShouldCreateUniqueVectors( 'of' )
        c.itShouldReturnByDefault( 'of' )( c.zero )
        it.each( [
            [1, c.i3],
            [0, c.zero],
            [-1, new vec( -1, -1, -1 )],
            [null, c.zero],
            ['a', new vec( 'a', 'a', 'a' )],

        ] )( "with argument %p it should create a vector %p", ( arg, exp ) => {
            expect( vec.of( arg ) ).toEqual( exp )
        } )
    } )

    describe( `.ofx()`, () => {
        c.itShouldExistAsStaticMethod( 'ofx' )
        c.itShouldCreateUniqueVectors( 'ofx' )
        c.itShouldReturnByDefault( 'of' )( c.zero )
        it( `should only set the "x" component`, () => {
            expect( vec.ofx( 1 ) ).toEqual( new vec( 1, 0, 0 ) )
        } )
    } )

    describe( `.ofy()`, () => {
        c.itShouldExistAsStaticMethod( 'ofy' )
        c.itShouldCreateUniqueVectors( 'ofy' )
        c.itShouldReturnByDefault( 'of' )( c.zero )
        it( `should only set the "x" component`, () => {
            expect( vec.ofy( 1 ) ).toEqual( new vec( 0, 1, 0 ) )
        } )
    } )

    describe( `.ofz()`, () => {
        c.itShouldExistAsStaticMethod( 'ofz' )
        c.itShouldCreateUniqueVectors( 'ofz' )
        c.itShouldReturnByDefault( 'of' )( c.zero )
        it( `should only set the "z" component`, () => {
            expect( vec.ofz( 1 ) ).toEqual( new vec( 0, 0, 1 ) )
        } )
    } )

} )
