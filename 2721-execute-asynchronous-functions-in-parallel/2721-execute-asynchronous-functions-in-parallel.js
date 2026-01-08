/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    let len = functions.length;
    return new Promise((resolve, reject) => {
        let results = new Array(len);
        let count = 0;

        functions.forEach((fn,i) => {
            fn().then(val => {
                results[i] = val;
                count++;
                if(count === len) resolve(results);
            }).catch(reject);
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */