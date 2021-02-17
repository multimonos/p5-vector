import c from "./common";
import { Vector as vec } from "../src";

describe( `multipliers`, () => {

    describe( `prototype.half()`, () => {

        c.itShouldExistAsPrototypeMethod( 'half' )
        c.itShouldNotExistAsStaticMethod( 'half' )

        it( `should return a unique vector`, () => {
            const a = c.i2
            const b = a.half()
            expect( a ).not.toBe( b )
        } )

        it.each( [
            [c.i2, { x: 0.5, y: 0.5, z: 0 }],
            [c.i3, new vec( 0.5, 0.5, 0.5 )],
            [c.zero, c.zero],
        ] )( `given %j it should return a vector multiplied by 0.5 %j`, ( v, e ) => {
            const a = v.half()
            expect( a ).toEqual( e )
        } )
    } )

    describe( `prototype.double()`, () => {

        c.itShouldExistAsPrototypeMethod( 'double' )
        c.itShouldNotExistAsStaticMethod( 'double' )

        it( `should return a unique vector`, () => {
            const a = c.i2
            const b = a.double()
            expect( a ).not.toBe( b )
        } )

        it.each( [
            [c.i2, { x: 2, y: 2, z: 0 }],
            [c.i3, new vec( 2, 2, 2 )],
            [c.zero, c.zero],
        ] )( `given %j it should return a vector multiplied by 2 %j`, ( v, e ) => {
            const a = v.double()
            expect( a ).toEqual( e )
        } )
    } )

} )
