export default {
    add(first, second){
        if (!Number.isInteger(first)) return NaN;

        return first + second;
    }
}
