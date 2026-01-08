/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
     let len = functions.length;

    return new Promise((resolve, reject) => {
        if(len === 0){
            resolve([]);
            return;
        }

        const resolvedArr = new Array(len);
        let resolvedCount = 0;

        functions.forEach(async (fn, i) =>{
            try{
                const val = await fn();
                resolvedArr[i] = val;
                resolvedCount++;

                if(resolvedCount === len){
                    resolve(resolvedArr)
                }
            }catch(err){
                reject(err);
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */