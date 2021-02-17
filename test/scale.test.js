import { Vector as vec } from "../src"
import c from "./common"

//tests

describe( `.scale`, () => {

    describe( `.scale()`, () => {

        c.itShouldExistAsStaticMethod( 'scale' )

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

    describe( `.prototype.scale()`, () => {

        c.itShouldExistAsPrototypeMethod( 'scale' )

        it.each( [
            [c.zero, c.zero, c.zero],
            [c.i3, c.zero, c.zero],
            [c.i3, c.i3, c.i3],
            [new vec( 2, 3, 5 ), c.i3, new vec( 2, 3, 5 )],
            [new vec( 2, 3, 5 ), new vec( 7, 11, 13 ), new vec( 14, 33, 65 )]
        ] )( `should multiply the components of each vector independently - given %j as a scale vector applied to %j it should produce %j`, ( scalevec, v, e ) => {
            const a = vec.scale( scalevec )( v )
            expect( a ).toEqual( e )
            expect( c.i3 ).toEqual( new vec( 1, 1, 1 ) )
        } )

    } )

    describe( `.scalen()`, () => {

        it( `can accept any number of arguments`, () => {
            const v = c.i2
            const a = v.scalen( c.i3, new vec( 2, 3, 5 ) )
            const e = new vec( 2, 3, 0 )
            expect( a ).toEqual( e )
        } )
    })

    describe( `.prototype.scalen()`, () => {

        it( `can accept any number of arguments`, () => {
            const a = vec.scalen( c.i2, c.i3, new vec( 2, 3, 5 ) )
            const e = new vec( 2, 3, 0 )
            expect( a ).toEqual( e )
        } )


    } )

} )


