import p5 from 'p5'
import { flatten, merge, curry, pipe, map } from "ramda";

const trace = x => {
    console.log( 'trace:', x );
    return x;
}

const v = p5.Vector

// constructors
v.of = k => new v( k, k, k )
v.of2 = k => new v( k, k, 0 )
v.ofx = k => new v( k, 0, 0 )
v.ofy = k => new v( 0, k, 0 )
v.ofz = k => new v( 0, 0, k )

v.create = ( ...args ) => new v( ...args )

// convenience
v.zero = () => v.of( 0 )
v.null = () => v.of( null )
v.i2 = () => v.of2( 1 )
v.i3 = () => v.of( 1 )
v.array = () => v.of( [] )
v.obj = () => v.of( {} )


//static methods
v.copy = a => new v( a.x, a.y, a.z )
v.neg = v => v.copy().mult( -1 )
v.negn = (...args) => pipe(flatten, trace, map(v.neg))(args)

v.scale = curry( ( scaleVector, b ) => {
    const copy = b.copy()
    copy.x *= scaleVector.x
    copy.y *= scaleVector.y
    copy.z *= scaleVector.z
    return copy
} )

//prototype methods
v.prototype.half = function() {
    return this.mult( 0.5 )
}

v.prototype.double = function() {
    return this.mult( 2 )
}

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