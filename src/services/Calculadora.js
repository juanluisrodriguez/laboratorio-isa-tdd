export default {
    add(first, second){
        if (!Number.isInteger(first)) return NaN;
        if (second=='a') return NaN;

        return first + second;
    }
}
