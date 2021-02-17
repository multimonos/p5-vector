import { Vector as vec } from "../src"
import c from "./common"

describe( `convenience`, () => {

    describe( `.zero()`, () => {
        c.itShouldExistAsStaticMethod( 'zero' )
        c.itShouldReturnByDefault( 'zero' )( c.zero )
        c.itShouldCreateUniqueVectors( 'zero' )
    } )

    describe( `.null()`, () => {
        c.itShouldExistAsStaticMethod( 'null' )
        c.itShouldReturnByDefault( 'null' )( c.zero )
        c.itShouldCreateUniqueVectors( 'null' )
    } )

    describe( `.i2()`, () => {
        c.itShouldExistAsStaticMethod( 'i2' )
        c.itShouldReturnByDefault( 'i2' )( c.i2 )
        c.itShouldCreateUniqueVectors( 'i2' )
    } )

    describe( `.i3()`, () => {
        c.itShouldExistAsStaticMethod( 'i3' )
        c.itShouldReturnByDefault( 'i3' )( c.i3 )
        c.itShouldCreateUniqueVectors( 'i3' )
    } )

    describe( `.ix()`, () => {
        c.itShouldExistAsStaticMethod( 'ix' )
        c.itShouldReturnByDefault( 'ix' )( new vec( 1, 0, 0 ) )
        c.itShouldCreateUniqueVectors( 'ix' )
    } )

    describe( `.iy()`, () => {
        c.itShouldExistAsStaticMethod( 'iy' )
        c.itShouldReturnByDefault( 'iy' )( new vec( 0, 1, 0 ) )
        c.itShouldCreateUniqueVectors( 'iy' )
    } )

    describe( `.iz()`, () => {
        c.itShouldExistAsStaticMethod( 'iz' )
        c.itShouldReturnByDefault( 'iz' )( new vec( 0, 0, 1 ) )
        c.itShouldCreateUniqueVectors( 'iz' )
    } )

    describe( `.array()`, () => {
        c.itShouldExistAsStaticMethod( 'array' )
        c.itShouldReturnByDefault( 'array' )( { x: [], y: [], z: [] } )
        c.itShouldCreateUniqueVectors( 'array' )
    } )

    describe( `.obj()`, () => {
        c.itShouldExistAsStaticMethod( 'obj' )
        c.itShouldReturnByDefault( 'obj' )( { x: {}, y: {}, z: {} } )
        c.itShouldCreateUniqueVectors( 'obj' )
    } )


} )
