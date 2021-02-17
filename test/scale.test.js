import {Vector as vec} from "../src"
import c from "./common"

//tests

describe( `scale`, () => {
    c.itShouldExist( 'scale' )
    it.each( [
        [c.zero, c.zero, c.zero],
        [c.i3, c.zero, c.zero],
        [c.i3, c.i3, c.i3],
        [new vec( 2, 3, 5 ), c.i3, new vec( 2, 3, 5 )],
        [new vec( 2, 3, 5 ), new vec( 7, 11, 13 ), new vec( 14, 33, 65 )]
    ] )( `should multiply the components of each vector independently`, ( scalevec, v, e ) => {
        const a = vec.scale( scalevec )( v )
        expect( a ).toEqual( e )
        expect( c.i3 ).toEqual( new vec( 1, 1, 1 ) )
    } )
} )



