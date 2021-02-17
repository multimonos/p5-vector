//c tests
import vec from "../src/Vector";

export default {
    i3: new vec( 1, 1, 1 ),
    i2: new vec( 1, 1, 0 ),
    zero: new vec( 0, 0, 0 ),

    itShouldCreateUniqueVectors: func => it( `should create unique vectors`, () => {
        expect( vec[func]() ).not.toBe( vec[func]() )
    } ),

    itShouldExistAsStaticMethod: func => it( `should exist as a static method`, () => {
        expect( vec ).toHaveProperty( func )
        expect( typeof vec[func] ).toEqual( 'function' )
    } ),

    itShouldExistAsPrototypeMethod: func => it( `should exist as a prototype method`, () => {
        expect( vec.prototype ).toHaveProperty( func )
        expect( typeof vec.prototype[func] ).toEqual( 'function' )
    } ),

    itShouldReturnByDefault: func => exp => it( `should return ${exp}`, () => {
        expect( vec[func]() ).toEqual( exp )
    } ),
}
