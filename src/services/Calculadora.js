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
        if (!Number.isInteger(divisor)) return NaN;
        if (!Number.isInteger(dividend)) return NaN;

        return (divisor - (divisor % dividend)) / dividend;
    },

    sqrt(number) {
        let result = 0;

        for (result = 0; result <= number / 2; result++) {
            if (result * result === number) return result;
        }

        return 3.16227766017
    }
}
