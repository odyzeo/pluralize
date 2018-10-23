export default function pluralize(number, first, second, five) {
    if (number === 1) {
        return first;
    } else if (number > 1 && number < 5) {
        return second;
    }
    return five;
};
