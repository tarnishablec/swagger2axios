"use strict";
exports.__esModule = true;
var fs = require("fs");
var axios_1 = require("axios");
var apis = [];
// let swaggerData;
// let swaggerUrl = 'http://172.16.10.25:8080/alarm/v2/api-docs';
var swaggerApis = [
    { name: 'texture', url: 'http://172.16.10.104:8008/v2/api-docs', prepend: '/api1' },
    { name: 'api2', url: '', prepend: '/api2' },
    { name: 'api3', url: '', prepend: '/api3' },
];
// let file = fs.readFileSync("v1.json", "utf8");
run();
function run() {
    var _loop_1 = function (swaggerApi) {
        if (!!!swaggerApi.url) {
            return "break";
        }
        var dir = "./target/" + swaggerApi.name;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        axios_1["default"].get(swaggerApi.url).then(function (res) {
            handerSwagger(res.data, dir, swaggerApi.prepend);
        });
    };
    for (var _i = 0, swaggerApis_1 = swaggerApis; _i < swaggerApis_1.length; _i++) {
        var swaggerApi = swaggerApis_1[_i];
        var state_1 = _loop_1(swaggerApi);
        if (state_1 === "break")
            break;
    }
}
function handerSwagger(data, dir, prepend) {
    // console.log(data);
    var paths = data.paths;
    // console.log(paths)
    for (var key in paths) {
        var u = key.toString().replace(/{/g, '${');
        var ms = Object.keys(paths[key]);
        for (var _i = 0, ms_1 = ms; _i < ms_1.length; _i++) {
            var m = ms_1[_i];
            var a = { url: u, method: m };
            if (paths[key][m].parameters !== undefined) {
                a.params = new Array();
                for (var _a = 0, _b = paths[key][m].parameters; _a < _b.length; _a++) {
                    var param = _b[_a];
                    console.log(param['in']);
                    if (param['in'] === 'body') {
                        a.data = '1';
                    }
                    if (param['in'] === 'query') {
                        // console.log(param.name);
                        a.params.push(param['name']);
                    }
                }
            }
            apis.push(a);
        }
    }
    console.log(apis);
    var pres = {};
    var fileHead = "import request from '@/plugins/axios'\n";
    var re = /^\/([a-z]+)(?:(?:\b|\/)|[A-Z]+)/;
    for (var _c = 0, apis_1 = apis; _c < apis_1.length; _c++) {
        var api = apis_1[_c];
        // console.log(api.url);
        console.log(re.exec(api.url));
        var fileName = re.exec(api.url)[1];
        // console.log(fileName);
        if (!Object.keys(pres).includes(fileName)) {
            pres[fileName] = [];
        }
        pres[fileName] = pres[fileName].concat(api);
    }
    for (var pre in pres) {
        var content = '';
        for (var _d = 0, _e = pres[pre]; _d < _e.length; _d++) {
            var a = _e[_d];
            content = content.concat(buildApi(a, prepend));
        }
        fs.writeFileSync(dir + '/' + pre + '.js', fileHead + '' + content);
    }
}
// console.log(pres)
// const re1 = /\$/
function buildApi(api, prepend) {
    // console.log(api.url)
    var tempUrl = api.url.replace(/\$/g, 'By');
    // let reg = /\/(\w)/;
    // tempUrl= tempUrl.replace(reg, ($1:string) => {
    //     return $1.toUpperCase();
    // });
    tempUrl = paramUppercase(slash2Camel(tempUrl)).replace(/((\/|\{)|\})/g, '');
    var re = /\{([a-zA-Z]+)\}/g;
    var ar = api.url.match(re);
    // console.log(ar)
    var paramStr = api.params ? "params:{" + array2String(api.params) + "}," : '';
    var str = "export function " + api.method + tempUrl + "(" + ((!!api.params) ? array2String(api.params) : '') + (!!ar ? array2String(ar) : '') + ((!!api.data) ? 'data' : '') + "){return request({url: " + (!!ar ? '\`' : '\'') + prepend + api.url + (!!ar ? '\`' : '\'') + ",method:'" + api.method + "'," + ((!!api.data) ? 'data,' : '') + paramStr + "}).then(res => {\n\t\treturn res.data.data\n\t})}";
    return str;
}
function array2String(ar) {
    var str = '';
    for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
        var i = ar_1[_i];
        str = str.concat(i + ",");
    }
    return str.replace(/(\{|\})/g, '');
}
function slash2Camel(str) {
    var arr = str.split('/');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join('');
    return str;
}
function paramUppercase(str) {
    var arr = str.split('{');
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join('');
    return str;
}
