/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    let ipv4Re = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    let ipv6Re = /^([\da-f]{1,4}:){8}$/i;
    return ipv4Re.test(IP + '.') ? "IPv4" : (ipv6Re.test(IP + ':') ? "IPv6": "Neither");
};
