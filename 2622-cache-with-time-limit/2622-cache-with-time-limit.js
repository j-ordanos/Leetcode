class TimeLimitedCache {
    constructor(){
        this.cache = new Map();
    }

    set(key, value, duration){
        const exists = this.cache.has(key);

        // if key exists, clear previous expiration timer
        if(exists){
            clearTimeout(this.cache.get(key).timer)
        }

        // set new timer to delete the key after duration
        const timer = setTimeout(() =>{
            this.cache.delete(key);
        }, duration);

        //store the value
        this.cache.set(key, {value, timer});

        return exists;
    }

    get(key){
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    count(){
        return this.cache.size;
    }

}