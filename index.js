"use strict";
exports.__esModule = true;
var fs = require("fs");
var axios_1 = require("axios");
var YAML = require("yaml");
var swaggerApis = YAML.parse(fs.readFileSync('./bootstrap.yml', 'utf8')).apis;
run();
function run() {
    var _loop_1 = function (swaggerApi) {
        if (!swaggerApi.url) {
            return "break";
        }
        var dir = "./target/" + swaggerApi.name;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        axios_1["default"].get(swaggerApi.url).then(function (res) {
            handleSwagger(res.data, dir, swaggerApi.name, swaggerApi.prepend);
        })["catch"]();
    };
    for (var _i = 0, swaggerApis_1 = swaggerApis; _i < swaggerApis_1.length; _i++) {
        var swaggerApi = swaggerApis_1[_i];
        var state_1 = _loop_1(swaggerApi);
        if (state_1 === "break")
            break;
    }
}
function handleSwagger(data, dir, name, prepend) {
    var host = data.host + ((data.basePath === '/') ? '' : data.basePath);
    var paths = data.paths;
    var publicParams = data.parameter;
    var apis = [];
    for (var key in paths) {
        var u = key.toString().replace(/{/g, '${');
        u = u.replace(/\${(\w*)-(\w*)}?/g, '${$1_$2}');
        var pathps = paths[key].parameters;
        var ms = Object.keys(paths[key]);
        ms = ms.filter(function (el) {
            return el !== 'parameters';
        });
        for (var _i = 0, ms_1 = ms; _i < ms_1.length; _i++) {
            var m = ms_1[_i];
            var a = { url: u, method: m, host: host, prepend: prepend, needs: {}, query: [], path: [], body: [] };
            var parameters = paths[key][m].parameters;
            if (parameters) {
                for (var _a = 0, parameters_1 = parameters; _a < parameters_1.length; _a++) {
                    var p = parameters_1[_a];
                    if (p['$ref']) {
                        p = publicParams[getLastWord(p.$ref)];
                    }
                    if (p.name !== 'Accept') {
                        if (p["in"] === 'path') {
                            p.name = p.name.replace('-', '_');
                        }
                        a.needs[p.name] = p["in"];
                    }
                }
            }
            if (pathps) {
                for (var _b = 0, pathps_1 = pathps; _b < pathps_1.length; _b++) {
                    var pathp = pathps_1[_b];
                    a.needs[pathp.name] = pathp["in"];
                }
            }
            for (var need in a.needs) {
                a[a.needs[need]].push(need);
            }
            // console.log(a);
            apis.push(a);
        }
    }
    var fileHead = "import request from '@/plugins/axios'\n\n//host:" + host + "\n\n";
    var pres = new Map();
    for (var _c = 0, apis_1 = apis; _c < apis_1.length; _c++) {
        var api = apis_1[_c];
        // console.log(api);
        var fileName = api.url.split(/\b/)[1];
        if (!pres.has(fileName)) {
            pres.set(fileName, []);
        }
        var val = pres.get(fileName);
        pres.set(fileName, val.concat(api));
    }
    pres.forEach(function (pre, key) {
        var content = '';
        for (var _i = 0, pre_1 = pre; _i < pre_1.length; _i++) {
            var a = pre_1[_i];
            content = content.concat(buildApi(a));
        }
        fs.writeFileSync(dir + '/' + key + '.js', fileHead + '' + content);
    });
}
function buildApi(api) {
    var tempUrl = api.url.replace(/\$/g, 'By');
    tempUrl = array2String(url2Array(tempUrl)).replace(/[^A-Za-z]/g, '');
    var hasQuery = api.query.length > 0;
    var hasBody = api.body.length > 0;
    return "export function " + api.method + tempUrl + "(" + array2String(api.path) + (hasQuery ? 'params,' : '') + (hasBody ? 'data,' : '') + "){\n return request({url: `http://" + (api.prepend ? api.prepend : api.host) + api.url + "`,method:'" + api.method + "'," + (hasQuery ? 'params,' : '') + (hasBody ? 'data,' : '') + "}).then(res => {\n\t\treturn res.data\n\t})}\n";
}
function array2String(ar) {
    var str = '';
    if (!ar || ar.length === 0) {
        return '';
    }
    for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
        var i = ar_1[_i];
        str = str.concat(i + ",");
    }
    return str.replace(/([{}])/g, '');
}
function url2Array(str) {
    // console.log(str);
    var arr = str.split(/\//);
    arr = arr
        .filter(function (res) { return res !== ''; })
        .map(function (a) {
        return a.replace(/By{([a-z]?)/, function (word, res1) {
            return 'By{' + res1.toUpperCase();
        }).replace(/\.json/, '')
            .replace(/\./g, '')
            .replace(/\b([a-z]?)/g, function (word, res) {
            return res.toUpperCase();
        });
    });
    // console.log(arr);
    var arr2 = arr.slice().reverse();
    var n = checkVars(arr2);
    var arrr = [];
    for (var i = 0; i < n; i++) {
        arrr.push(arr.pop());
    }
    arr.splice(0, 0, 'From');
    arr.splice.apply(arr, [0, 0].concat(arrr.reverse()));
    console.log(arr);
    return arr;
}
function checkVars(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i].match(/^By{/)) {
            return i + 1;
        }
    }
}
function getLastWord(str) {
    if (str.match(/^#\//)) {
        return str.split('/').pop();
    }
}
