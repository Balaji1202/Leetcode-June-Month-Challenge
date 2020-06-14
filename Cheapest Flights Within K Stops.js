/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let flightList = new Array(n + 1).fill(0).map(() => Infinity);
    flightList[src] = 0;
    for(let i = 0; i < K + 1; i++) {
        var eachFlightList = new Array().concat(flightList);
        for(const [source, dest, cost] of flights) {
            eachFlightList[dest] = Math.min(eachFlightList[dest], flightList[source] + cost);
        }
        flightList = new Array().concat(eachFlightList);
    }
    return flightList[dst] != Infinity ? flightList[dst] : -1;
};
