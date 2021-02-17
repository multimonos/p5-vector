import { Vector as vec } from "../src"
import c from "./common"

//tests
describe( `.add()`, () => {

    describe( `static methods`, () => {

        describe( `.add()`, () => {

            c.itShouldExist( 'add' )

            it.each( [
                [c.zero, c.zero, c.zero],
                [c.i3, c.i3, new vec( 2, 2, 2 )],
                [c.i2, c.i2, new vec( 2, 2, 0 )],
                [new vec( 2, 3, 5 ), new vec( -2, -3, -5 ), c.zero]
            ] )( `add(%j, %j) should return vector %j`, ( a, b, e ) => {
                const act = vec.add( a, b )
                expect( act ).toEqual( e )
            } )
        } )

        describe( `.addn()`, () => {

            c.itShouldExist( 'addn' )

            it( `should add multiple args`, () => {
                const act = vec.addn( c.i3, c.i2, c.zero, new vec( 2, 3, 5 ) )
                const exp = new vec( 4, 5, 6 )
                expect( act ).toEqual( exp )
            } )

            it.each( [
                [[c.zero, c.zero], c.zero],
                [[c.i2, c.i2], new vec( 2, 2, 0 )],
                [[c.i3, new vec( -1, -1, -1 )], c.zero],
                [[[c.i2, c.i3], c.zero, new vec( 2, 3, 5 )], new vec( 4, 5, 6 )]
            ] )( `it should flatten a list of args and sum the individual vectors such that sum of %j should be %j`, ( vecs, e ) => {
                const a = vec.addn( vecs )
                expect( a ).toEqual( e )
            } )

        } )

    } )

    describe( `prototype methods`, () => {

        describe( `.addn()`, () => {

            c.itShouldExistOnPrototype( 'addn' )

            it( `should add multiple args`, () => {
                const v = c.i3
                const act = v.addn( c.i2, c.zero, new vec( 2, 3, 5 ) )
                const exp = new vec( 4, 5, 6 )
                expect( act ).toEqual( exp )
            } )

            it.each( [
                [c.zero, [c.zero], c.zero],
                [c.i2, [c.i2], new vec( 2, 2, 0 )],
                [c.i3, [new vec( -1, -1, -1 )], c.zero],
                [c.i2, [[c.i3], c.zero, new vec( 2, 3, 5 )], new vec( 4, 5, 6 )]
            ] )( `given %j it should flatten a list of args and sum the individual vectors such that sum of %j should be %j`, ( v, vecs, e ) => {
                const a = v.addn( vecs )
                expect( a ).toEqual( e )
            } )

        } )

    } )

} )
