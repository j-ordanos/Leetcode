/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    for(let a=1, b=0; true; [a,b] = [b, a+b]) yield b;
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */