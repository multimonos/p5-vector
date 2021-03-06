import p5 from 'p5'
import {
    curry,
    concat,
    flatten,
    head,
    map,
    merge,
    pipe,
    reduce,
    tail,
    tap,
    toString,
    lensProp,
} from "ramda";

const v = p5.Vector

// helper methods
const trace = pipe( toString, concat( 'trace: ' ), tap( console.log ) )
const first = pipe( flatten, head )
const other = pipe( flatten, tail ) // everthing except the first
const xLens = lensProp( 'x' )
const yLens = lensProp( 'y' )
const zLens = lensProp( 'z' )

// constructors
v.create = ( ...args ) => new v( ...args )
v.of = k => v.create( k, k, k )
v.of2 = k => v.create( k, k )
v.ofx = k => v.create( k )
v.ofy = k => v.create( 0, k )
v.ofz = k => v.create( 0, 0, k )

// convenience
v.zero = () => v.of( 0 )
v.null = () => v.of( null )
v.i2 = () => v.of2( 1 )
v.i3 = () => v.of( 1 )
v.ix = () => new v( 1, 0, 0 )
v.iy = () => new v( 0, 1, 0 )
v.iz = () => new v( 0, 0, 1 )
v.array = () => v.of( [] )
v.obj = () => v.of( {} )

//convenience prototype methods
v.prototype.half = function() { return v.mult( this, 0.5 ) }
v.prototype.double = function() { return v.mult( this, 2 ) }


//apply
v.apply = curry( ( fnv, v ) => pipe( v.copy, trace ) ) //@todo

//copy
v.copy = a => new v( a.x, a.y, a.z )

//neg*
v.neg = v => v.copy().mult( -1 )
v.negn = ( ...args ) => pipe( flatten, map( v.neg ) )( args )
v.prototype.neg = function() {
    return v.neg( this.copy() )
}

//add*
v.addn = ( ...args ) => pipe( flatten, reduce( v.add, v.zero() ) )( args )
v.prototype.addn = function( ...args ) {
    return pipe( flatten, reduce( v.add, this.copy() ) )( args )
}

//sub*
v.subn = ( ...args ) => reduce( v.sub, first( args ), other( args ) )
v.prototype.subn = function( ...args ) {
    return reduce( v.sub, this.copy(), flatten( args ) )
}

//scale*
v.scale = curry( ( a, b ) => { // scale b with a
    const copy = b.copy()
    copy.x *= a.x
    copy.y *= a.y
    copy.z *= a.z
    return copy
} )
v.scalen = ( ...args ) => reduce( v.scale, first( args ), other( args ) )
v.prototype.scale = function( ...args ) {
    return reduce( v.scale, this.copy(), flatten( args ) )
}
v.prototype.scalen = v.prototype.scale


// new methods
v.subdivide = pointCount => a => b => { // a, b : p5.vec
    // add "pointCount" more points, "pointCount + 1" line segments
    const dx = 1 / (pointCount + 1)
    const pnts = []
    for (let i = 1; i <= pointCount; i++) {
        pnts.push( p5.Vector.lerp( a, b, i * dx ) )
    }
    return pnts
}


// console.log( v.null() )
// console.log( v )


export { v as default }