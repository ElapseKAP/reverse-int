module.exports = function reverse (n) {
    if (!Number.isInteger(n)) return;

    let str = n.toString();
    if (str.length < 2) return n;

    let reverse = Array.from(str).reverse().join('');
    if (reverse.includes('-')) return reverse.slice(0, -1);

    return reverse;
}
