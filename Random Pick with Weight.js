/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sum = 0;
    let map = new Map();
    for(let i = 0; i < w.length; i++) {
        this.sum+=w[i];
        map.set(this.sum, i);
    }
    this.proportionArea = [...map.keys()];
    this.proportionArea.sort((a, b) => a - b);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let random = Number.parseInt(Math.random() * this.sum);
    let left = 0, right = this.proportionArea.length, mid;
    while(left < right) {
        mid = Number.parseInt(left + ((right-left)/2));
        if(random < this.proportionArea[mid]) {
           right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
