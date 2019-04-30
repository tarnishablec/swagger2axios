import * as fs from 'fs'
import axios from 'axios'

interface StringMap {
    [k: string]: Array<any>
}

const apis: Array<any> = [];

// let swaggerData;
let swaggerUrl = 'http://172.16.10.25:8080/alarm/v2/api-docs';

// let file = fs.readFileSync("v1.json", "utf8");
axios.get(swaggerUrl).then(res=>{
    handerSwagger(res.data);
})

function handerSwagger(data) {
    // console.log(data);
    
    let paths = data.paths;

    // console.log(paths)
    for (let key in paths) {
        let u = key.toString().replace(/{/g, '${');
        let m = Object.keys(paths[key])[0]
        let p: any = { url: u, method: m };
        if (paths[key][m].parameters !== undefined) {
            if (paths[key][m].parameters[0].in === 'body') {
                p['data'] = "1"
            } else {
                p['data'] = "0";
            }
        } else {
            p['data'] = "0";
        }
        apis.push(p);
    }
    // console.log(apis)

    const pres: StringMap = {};
    const fileHead = "import request from '@/plugins/axios'\n";


    const re = /^\/([a-z]+)(?:(?:\b|\/)|[A-Z]+)/
    for (let api of apis) {
        // console.log(api.url);

        let fileName = re.exec(api.url)[1];
        // console.log(fileName);

        if (!Object.keys(pres).includes(fileName)) {
            pres[fileName] = [];
        }

        pres[fileName] = pres[fileName].concat(api)
    }

    for (let pre in pres) {
        let content: string = '';

        for (let a of pres[pre]) {
            content = content.concat(buildApi(a))
        }

        fs.writeFileSync('./target/' + pre + '.js', fileHead + '' + content)
    }
}

// console.log(pres)

// const re1 = /\$/
function buildApi(api: any) {
    // console.log(api.url)
    let tempUrl = api.url.replace(/\$/g, 'By');
    tempUrl = tempUrl.replace(/((\/|\{)|\})/g, '');

    let re = /\{([a-zA-Z]+)\}/g;
    let ar: Array<string> = api.url.match(re);
    // console.log(ar)
    let str = `export function ${api.method}${tempUrl}(${!!ar ? array2string(ar) : ''}${(api.data === "1") ? 'data' : ''}){return request({url: ${!!ar ? '\`' : '\''}${api.url} ${!!ar ? '\`' : '\''},method:'${api.method}',${(api.data === "1") ? 'data' : ''}})}`;
    return str;
}

function array2string(ar: Array<String>) {
    let str = '';
    for (let i of ar) {
        str = str.concat(i + ",");
    }
    return str.replace(/(\{|\})/g, '');
}