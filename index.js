"use strict";
exports.__esModule = true;
var fs = require("fs");
var apis = [];
var file = fs.readFileSync("api-docs.json", "utf8");
var paths = JSON.parse(file).paths;
// console.log(paths)
for (var key in paths) {
    var u = key.toString().replace(/{/g, '${');
    var m = Object.keys(paths[key])[0];
    var p = { url: u, method: m };
    if (paths[key][m].parameters !== undefined) {
        if (paths[key][m].parameters[0]["in"] === 'body') {
            p['data'] = "1";
        }
        else {
            p['data'] = "0";
        }
    }
    else {
        p['data'] = "0";
    }
    apis.push(p);
}
// console.log(apis)
var pres = {};
var fileHead = "import request from '@/plugins/axios'\n";
var re = /^\/([a-z]+)(?:(?:\b|\/)|[A-Z]+)/;
for (var _i = 0, apis_1 = apis; _i < apis_1.length; _i++) {
    var api = apis_1[_i];
    // console.log(api.url);
    var fileName = re.exec(api.url)[1];
    // console.log(fileName);
    if (!Object.keys(pres).includes(fileName)) {
        pres[fileName] = [];
    }
    pres[fileName] = pres[fileName].concat(api);
}
// console.log(pres)
// const re1 = /\$/
function buildApi(api) {
    // console.log(api.url)
    var tempUrl = api.url.replace(/\$/g, 'By');
    tempUrl = tempUrl.replace(/((\/|\{)|\})/g, '');
    var re = /\{([a-zA-Z]+)\}/g;
    var ar = api.url.match(re);
    // console.log(ar)
    var str = "export function " + api.method + tempUrl + "(" + (!!ar ? array2string(ar) : '') + ((api.data === "1") ? 'data' : '') + "){return request({url: " + (!!ar ? '\`' : '\'') + api.url + " " + (!!ar ? '\`' : '\'') + ",method:'" + api.method + "'," + ((api.data === "1") ? 'data' : '') + "})}";
    return str;
}
function array2string(ar) {
    var str = '';
    for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
        var i = ar_1[_i];
        str = str.concat(i + ",");
    }
    return str.replace(/(\{|\})/g, '');
}
for (var pre in pres) {
    var content = '';
    for (var _a = 0, _b = pres[pre]; _a < _b.length; _a++) {
        var a = _b[_a];
        content = content.concat(buildApi(a));
    }
    fs.writeFileSync('./target/' + pre + '.js', fileHead + '' + content);
}
