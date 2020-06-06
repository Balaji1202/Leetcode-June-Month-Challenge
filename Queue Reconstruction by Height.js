/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if(b[0] !== a[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
        
    });
    let arrangedPeople = [];
    for(let person of people) {
        arrangedPeople.splice(person[1], 0, person);
    }
    return arrangedPeople;
};
