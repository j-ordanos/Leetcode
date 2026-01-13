/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {

    // Compute area difference at height target
    function diff(target) {
        let above = 0;
        let below = 0;

        for (const [x, y, size] of squares) {
            const bottom = y;
            const top = y + size;
            const area = size * size;

            if (target <= bottom) above += area;  // Entire square is above the line
            else if (target >= top) below += area;  // Entire square is below the line
            else {
                // Line cuts the square
                above += (top - target) * size;
                below += (target - bottom) * size;
            }
        }

        return above - below;
    }

    // Find binary search bounds
    let low = Infinity;
    let high = -Infinity;

    for (const [x, y, size] of squares) {
        low = Math.min(low, y);
        high = Math.max(high, y + size);
    }

    // Binary search
    while (high - low > 1e-5) {
        const mid = low + (high - low) / 2;

        if (diff(mid) > 0) {
            low = mid;
        } else {
            high = mid;
        }
    }

    return high;
};
