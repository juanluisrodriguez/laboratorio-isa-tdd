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
        if (!Number.isInteger(number)) return NaN;

        if (number === 0) return 0;

        let result = 1;

        for (result; result <= number / 2; result++) {
            if (result * result === number) return result;
            if (result * result > number) break;
        }

        for (let i = 0; i < number; i++) {
            result = 0.5 * (result + number / result);
        }

        return result;
    }
}
