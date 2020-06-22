/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
    
    let n = dungeon.length;
    let m = dungeon[0].length;
    
    let dungeonMemo = new Array(n);
    for(let i = 0; i < n; i++) dungeonMemo[i] = new Array(m).fill(undefined)
    
    return dp(0,0) 
    function dp(mDungeon, nDungeon){
        if(mDungeon == n - 1 && nDungeon == m - 1){
            return (dungeon[mDungeon][nDungeon] > 0 ? 1 : 1 - dungeon[mDungeon][nDungeon])
        }
        if(mDungeon >= n || nDungeon >= m) return Infinity;
        
        if(dungeonMemo[mDungeon][nDungeon] != undefined) return dungeonMemo[mDungeon][nDungeon]
        
        let dungeonRow = Math.min(
            dp(mDungeon + 1, nDungeon),
            dp(mDungeon, nDungeon + 1))
        
        return dungeonMemo[mDungeon][nDungeon] = ((dungeon[mDungeon][nDungeon] - dungeonRow >= 0 ) ? 1 : -(dungeon[mDungeon][nDungeon] - dungeonRow))
    }
};
