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
            for (var need in a.needs) {
                a[a.needs[need]].push(need);
            }
            console.log(a);
            apis.push(a);
        }
    }
    var fileHead = "import request from '@/plugins/axios'\n\n//host:" + host + "\n\n";
    var pres = new Map();
    for (var _b = 0, apis_1 = apis; _b < apis_1.length; _b++) {
        var api = apis_1[_b];
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
    tempUrl = cleanString(tempUrl).replace(/(([\/{])|})/g, '');
    var re = /{([a-zA-Z]+)}/g;
    // console.log(ar)
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
function cleanString(str) {
    var arr = str.split(/\W/);
    var arr2 = str.split(/\//).reverse();
    var prep = [];
    var num = checkVars(arr2);
    var count = 3;
    if (num > 0) {
        count = num;
    }
    arr = arr.filter(function (res) { return res !== ''; });
    for (var i = 0; i < count; i++) {
        prep.push(arr.pop());
    }
    prep.reverse();
    prep = prep.concat('From');
    arr.splice.apply(arr, [0, 0].concat(prep));
    // if (arr[arr.length - 1] === 'By') {
    // 	arr.pop();
    // }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i])
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).replace(/_/, '');
    }
    return arr.join('').replace(/From$/, '');
}
function checkVars(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].match(/{/)) {
            return i;
        }
    }
}
function getLastWord(str) {
    if (str.match(/^#\//)) {
        return str.split('/').pop();
    }
}
