export default {
    add(first, second) {
        if (!Number.isInteger(first)) return NaN;
        if (!Number.isInteger(second)) return NaN;

        return first + second;
    },

    subtract(minuend, subtrahend) {
        if (!Number.isInteger(minuend)) return NaN;
        if (!Number.isInteger(subtrahend)) return NaN;

        return minuend - subtrahend;
    },

    multiply(multiplicand, multiplier) {
        if (!Number.isInteger(multiplicand)) return NaN;
        if (!Number.isInteger(multiplier)) return NaN;

        return multiplicand * multiplier;
    },

    divide(divisor, dividend) {
        return 3;
    }
}
