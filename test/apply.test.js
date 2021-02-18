import { Vector as vec } from "../src"
import c from "./common"

//tests
describe( `.apply`, () => {

    describe( `.apply()`, () => {

        c.itShouldExistAsStaticMethod( 'apply' )

        it( `should return a unique vector`, () => {
            const a = c.i3
            const b = c.i3
            const v = vec.apply( a, b )
            expect( a ).not.toBe( v )
            expect( b ).not.toBe( v )
        } )

        it( `returns the same vector if no components of the function vector are functions`, () => {
            const a = c.i3
            const b = c.i3
            const v = vec.apply( a, b )
            expect( a ).toEqual( c.i3 )
        } )

        it( `should apply each function from a vector of functions to another vector`, () => {
            const fv = vec.create( x => x * 4, y => y * 3, z => z / 4 )
            const target = c.i3
            const act = vec.apply( fv )( target )
            expect( act ).toEqual( 4, 3, 0.25 )
        } )

        it( `should apply each function from a vector of functions to another vector onlyif the function vector component is a function`, () => {
            const fv = vec.create( 2, y => y * 3, 5 )
            const target = c.i3
            const act = vec.apply( fv )( target )
            expect( act ).toEqual( 2, 3, 5 )
        } )

    } )

    describe( `.prototype.apply()`, () => {

        c.itShouldExistAsPrototypeMethod( 'apply' )

        it( `should return a unique vector`, () => {
            const a = c.i3
            const b = a.apply( x => x * 3 )
            expect( a ).not.toBe( b )
        } )

        it( `apply the fn to each element of vector when a single argument is supplied`, () => {
            const a = c.i3.apply( x => x * 3 )
            expect( a ).toEqual( new vec( 3, 3, 3 ) )
        } )

        it( `should apply a separate function to x, y if first two arguments are supplied`, () => {
            const a = c.i3.apply( x => x * 3, y => y * 7 )
            expect( a ).toEqual( new vec( 3, 7, 1 ) )
        } )

        it( `should apply a separate function to x, y, z if three arguments are supplied`, () => {
            const a = c.i3.apply( x => x * 3, y => y * 7 )
            expect( a ).toEqual( new vec( 3, 7, 1 ) )

        } )
    } )

} )

