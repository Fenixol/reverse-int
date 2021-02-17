module.exports = function reverse (n) {
    let n_str = String(n).replace('-','');
    return Number(n_str.split('').reverse().join(''))
}
