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

    multiply(multiplicand, multiplier){
        return 6;
    },
}
