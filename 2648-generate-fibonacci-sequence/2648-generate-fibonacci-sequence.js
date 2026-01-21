/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev = 0;
    let beforePrev = 1;

    while(true){
        yield prev;

        [beforePrev, prev] = [prev, prev+beforePrev];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */