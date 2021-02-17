import { Vector as vec } from "../src"
import c from "./common"

//tests
describe( `.sub()`, () => {

    describe( `.sub()`, () => {
        c.itShouldExist( 'sub' )
        it.each( [
            [c.zero, c.zero, c.zero],
            [c.i3, c.i3, c.zero],
            [c.i2, c.i2, c.zero],
            [new vec( 2, -3, 5 ), new vec( -7, -11, 13 ), new vec( 9, 8, -8 )]
        ] )( `sub(%j, %j) should return vector %j`, ( a, b, e ) => {
            const act = vec.sub( a, b )
            expect( act ).toEqual( e )
        } )

    } )

    describe( `.subn()`, () => {
        c.itShouldExist( 'subn' )
        it.each( [
            [[c.zero, c.zero], c.zero],
            [[c.i2, c.i2], c.zero],
            [[c.i3, new vec( -1, -1, -1 )], new vec( 2, 2, 2 )],
            [[[c.i2, c.i3], c.zero, new vec( 2, 3, 5 )], new vec( -2, -3, -6 )]
        ] )( `subtracting all of %j should return a single vector %j`, ( vecs, e ) => {
            const a = vec.subn( vecs )
            expect( a ).toEqual( e )
        } )
    } )

} )

