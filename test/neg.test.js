import {Vector as vec} from "../src"
import c from "./common"

//tests
describe( `.neg()`, () => {

    describe( `.neg()`, () => {
        c.itShouldExist( 'neg' )
        it.each( [
            [c.zero, { x: -0, y: -0, z: -0 }],
            [c.i3, new vec( -1, -1, -1 )],
            [c.i2, { x: -1, y: -1, z: -0 }],
            [new vec( 2, 3, 5 ), new vec( -2, -3, -5 )]
        ] )( `with %p it should the opposite vector %p`, ( v, e ) => {
            const a = vec.neg( v )
            expect( a ).toEqual( e )
        } )
    } )

    describe( `.negn()`, () => {
        c.itShouldExist( 'negn' )
        it( `will negate and flatten a list of complex list of vectors`, () => {
            const arr = [[c.i2, c.i3], c.zero, new vec( 2, 3, 5 )]
            const a = vec.negn( arr )
            expect( a ).toEqual( [
                { x: -1, y: -1, z: -0 },
                new vec( -1, -1, -1 ),
                { x: -0, y: -0, z: -0 },
                new vec( -2, -3, -5 ),
            ] )
        } )
    } )

} )
