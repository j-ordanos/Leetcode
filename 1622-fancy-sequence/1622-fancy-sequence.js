class Fancy {
    constructor() {
        this.seq = [];
        this.add = 0n;
        this.mul = 1n;
        this.MOD = 1000000007n;
    }

    /** 
     * @param {number} val
     * @return {void}
     */
    append(val) {
        let invMul = this.power(this.mul, this.MOD - 2n);
        let transformed = ((BigInt(val) - this.add + this.MOD) * invMul) % this.MOD;
        this.seq.push(transformed);
    }

    /** 
     * @param {number} inc
     * @return {void}
     */
    addAll(inc) {
        this.add = (this.add + BigInt(inc)) % this.MOD;
    }

    /** 
     * @param {number} m
     * @return {void}
     */
    multAll(m) {
        this.add = (this.add * BigInt(m)) % this.MOD;
        this.mul = (this.mul * BigInt(m)) % this.MOD;
    }

    /** 
     * @param {number} idx
     * @return {number}
     */
    getIndex(idx) {
        if (idx >= this.seq.length) return -1;
        return Number((this.seq[idx] * this.mul + this.add) % this.MOD);
    }

    power(a, b) {
        let res = 1n;
        a %= this.MOD;
        while (b > 0n) {
            if (b % 2n === 1n) res = (res * a) % this.MOD;
            a = (a * a) % this.MOD;
            b /= 2n;
        }
        return res;
    }
}
/** 
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */