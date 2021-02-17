import {Vector as vec} from "../src"
import c from "./common"

//tests
describe( `.copy()`, () => {

    describe( `.copy()`, () => {
        c.itShouldExistAsStaticMethod( 'obj' )
        it( `should return a copy of the vector`, () => {
            const v = new vec( 1, 1, 1 )
            const a = vec.copy( v )
            expect( a ).toEqual( v )
            expect( a ).not.toBe( v )
        } )
    } )


} )

