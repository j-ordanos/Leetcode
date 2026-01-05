/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const orginalPromise = fn(...args);
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>{
                return reject("Time Limit Exceeded");
            }, t)
        })

        return Promise.race([orginalPromise, timeoutPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */