/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    let priority = {
        electronics: 0,
        grocery: 1,
        pharmacy: 2,
        restaurant: 3
    };

    let valid_coupons = [];

    for (let i = 0; i < code.length; i++) {
        const b = businessLine[i];
        const c = code[i];

        if (!isActive[i]) continue;
        if (priority[b] === undefined) continue;
        if (!c || !/^\w+$/.test(c)) continue;

        valid_coupons.push({ b, c });
    }

    valid_coupons.sort((x, y) => {
        if (priority[x.b] !== priority[y.b]) {
            return priority[x.b] - priority[y.b];
        }
        // ASCII-safe comparison
        if (x.c < y.c) return -1;
        if (x.c > y.c) return 1;
        return 0;
    });

    return valid_coupons.map(item => item.c);
};

