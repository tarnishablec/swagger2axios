import * as fs from 'fs'
import axios from 'axios'

interface StringMap {
	[k: string]: Array<any>
}

const apis: Array<any> = [];

// let swaggerData;
// let swaggerUrl = 'http://172.16.10.25:8080/alarm/v2/api-docs';

const swaggerApis = [
	{name: 'test', url: 'http://localhost:10010/a',},
	{name: 'api2', url: '',},
	{name: 'api3', url: '',},
];

// let file = fs.readFileSync("v1.json", "utf8");
run();

function run() {
	for (let swaggerApi of swaggerApis) {

		if (!!!swaggerApi.url) {
			break;
		}

		let dir = "./target/" + swaggerApi.name;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		axios.get(swaggerApi.url).then(res => {
			handleSwagger(res.data, dir,);
		})
	}
}


function handleSwagger(data, dir) {
	// console.log(data);
	let host = data.host + data.basePath;
	let paths = data.paths;

	// console.log(paths)
	for (let key in paths) {
		let u = key.toString().replace(/{/g, '${');
		let ms = Object.keys(paths[key]);
		for (let m of ms) {
			let a: any = {url: u, method: m, host: host};
			if (paths[key][m].parameters !== undefined) {
				a.params = new Array<String>();
				for (let param of paths[key][m].parameters) {
					console.log(param['in']);
					if (param['in'] === 'body') {
						a.data = '1'
					}
					if (param['in'] === 'query') {
						// console.log(param.name);
						a.params.push(param['name'])
					}
				}
			}
			apis.push(a);
		}
	}
	console.log(apis);

	const pres: StringMap = {};
	const fileHead = "import request from '@/plugins/axios'\n";


	const re = /^\/([a-z]+)(?:(?:\b|\/)|[A-Z]+)/;
	for (let api of apis) {
		// console.log(api.url);
		console.log(re.exec(api.url));

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

		fs.writeFileSync(dir + '/' + pre + '.js', fileHead + '' + content)
	}
}

// console.log(pres)

// const re1 = /\$/
function buildApi(api: any) {
	// console.log(api.url)
	let tempUrl = api.url.replace(/\$/g, 'By');
	// let reg = /\/(\w)/;
	// tempUrl= tempUrl.replace(reg, ($1:string) => {
	//     return $1.toUpperCase();
	// });
	tempUrl = paramUppercase(slash2Camel(tempUrl)).replace(/(([\/{])|})/g, '');

	let re = /{([a-zA-Z]+)}/g;
	let ar: Array<string> = api.url.match(re);
	// console.log(ar)
	let paramStr = api.params ? `params:{${array2String(api.params)}},` : '';
	return `export function ${api.method}${tempUrl}(${(!!api.params) ? array2String(api.params) : ''}${!!ar ? array2String(ar) : ''}${(!!api.data) ? 'data' : ''}){return request({url: ${!!ar ? '\`' : '\''}http://${api.host}${api.url}${!!ar ? '\`' : '\''},method:'${api.method}',${(!!api.data) ? 'data,' : ''}${paramStr}}).then(res => {
		return res.data
	})}`;
}

function array2String(ar: Array<String>) {
	let str = '';
	for (let i of ar) {
		str = str.concat(i + ",");
	}
	return str.replace(/([{}])/g, '');
}

function slash2Camel(str: string) {
	const arr = str.split('/');
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	str = arr.join('');
	return str;
}

function paramUppercase(str: string) {
	let arr = str.split('{');
	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	str = arr.join('');
	return str;
}
