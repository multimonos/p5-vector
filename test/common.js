//c tests
import vec from "../src/Vector";

export default {
    i3: new vec( 1, 1, 1 ),
    i2: new vec( 1, 1, 0 ),
    zero: new vec( 0, 0, 0 ),

    itShouldCreateUniqueVectors: func => it( `should create unique vectors`, () => {
        expect( vec[func]() ).not.toBe( vec[func]() )
    } ),

    itShouldExist: func => it( `should exist`, () => {
        expect( vec ).toHaveProperty( func )
        expect( typeof vec[func] ).toEqual( 'function' )
    } ),

    itShouldReturnByDefault: func => exp => it( `should return ${exp}`, () => {
        expect( vec[func]() ).toEqual( exp )
    } ),
}
