/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let minFinishTime = tasks[0][0] + tasks[0][1];
    
    for (let i = 1; i < tasks.length; i++) {
        const finishTime = tasks[i][0] + tasks[i][1];
        if (finishTime < minFinishTime) {
            minFinishTime = finishTime;
        }
    }
    
    return minFinishTime;
};