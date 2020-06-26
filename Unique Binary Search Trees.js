/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return factorial( 2 * n ) / ( factorial( n + 1 ) * factorial( n ) );
};

function factorial( num ){
    if( num <= 0 )
        return 1;
    else
        return num * factorial( num - 1 );
}
