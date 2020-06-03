/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let totalCost = costs.reduce((sum, a) => sum + a[0], 0);
    let costDiffer = costs.map(a => a[1] - a[0]);
    costDiffer.sort((a, b) => a - b);
    let refundedCost = costDiffer.slice(0, costs.length/2).reduce((sum, a) => sum + a, 0);
    return totalCost + refundedCost;
};
