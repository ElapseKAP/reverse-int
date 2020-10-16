module.exports = function reverse (n) {
    if (!Number.isInteger(n)) return;
    let str = (n * Math.sign(n)).toString();

    return str.split('').reverse().join('');
}
