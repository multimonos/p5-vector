import {Vector as vec} from "../src"
import c from "./common"

describe( `convenience`, () => {

    describe( `.zero()`, () => {
        c.itShouldExist( 'zero' )
        c.itShouldReturnByDefault( 'zero' )( c.zero )
        c.itShouldCreateUniqueVectors( 'zero' )
    } )

    describe( `.null()`, () => {
        c.itShouldExist( 'null' )
        c.itShouldReturnByDefault( 'null' )( c.zero )
        c.itShouldCreateUniqueVectors( 'null' )
    } )

    describe( `.i2()`, () => {
        c.itShouldExist( 'i2' )
        c.itShouldReturnByDefault( 'i2' )( c.i2 )
        c.itShouldCreateUniqueVectors( 'i2' )
    } )

    describe( `.i3()`, () => {
        c.itShouldExist( 'i3' )
        c.itShouldReturnByDefault( 'i3' )( c.i3 )
        c.itShouldCreateUniqueVectors( 'i3' )
    } )

    describe( `.array()`, () => {
        c.itShouldExist( 'array' )
        c.itShouldReturnByDefault( 'array' )( { x: [], y: [], z: [] } )
        c.itShouldCreateUniqueVectors( 'array' )
    } )

    describe( `.obj()`, () => {
        c.itShouldExist( 'obj' )
        c.itShouldReturnByDefault( 'obj' )( { x: {}, y: {}, z: {} } )
        c.itShouldCreateUniqueVectors( 'obj' )
    } )
} )
