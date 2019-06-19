import * as fs from 'fs'
import axios from 'axios'
import * as YAML from 'yaml'

const swaggerApis = YAML.parse(fs.readFileSync('./bootstrap.yml', 'utf8')).apis;

run();

function run() {
	for (let swaggerApi of swaggerApis) {
		if (!swaggerApi.url) {
			break;
		}
		let dir = "./target/" + swaggerApi.name;
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
		axios.get(swaggerApi.url).then(res => {
			handleSwagger(res.data, dir, swaggerApi.name, swaggerApi.prepend);
		}).catch()
	}
}

function handleSwagger(data, dir, name, prepend) {
	let host = data.host + ((data.basePath === '/') ? '' : data.basePath);
	let paths = data.paths;
	let publicParams = data.parameter;
	let scheme = data.schemes ? data.schemes[0] : 'http';
	let apis = [];

	for (let key in paths) {
		let u = key.toString().replace(/{/g, '${');
		u = u.replace(/\${(\w*)-(\w*)}?/g, '${$1_$2}');
		let pathps = paths[key].parameters;
		let ms = Object.keys(paths[key]);
		ms = ms.filter(el => {
			return el !== 'parameters';
		});
		for (let m of ms) {
			let a = {
				url: u,
				method: m,
				host: host,
				prepend: prepend,
				needs: {},
				query: [],
				path: [],
				body: [],
				scheme: scheme
			};
			let parameters = paths[key][m].parameters;
			if (parameters) {
				for (let p of parameters) {
					if (p['$ref']) {
						p = publicParams[getLastWord(p.$ref)];
					}
					if (p.name !== 'Accept') {
						if (p.in === 'path') {
							p.name = p.name.replace('-', '_');
						}
						a.needs[p.name] = p.in;
					}
				}
			}
			if (pathps) {
				for (let pathp of pathps) {
					a.needs[pathp.name] = pathp.in;
				}
			}
			for (let need in a.needs) {
				a[a.needs[need]].push(need);
			}
			// console.log(a);
			apis.push(a);
		}
	}

	const fileHead = `import request from '@/plugins/axios'\n\n//host:${host}\n\n`;
	let pres = new Map<string, Array<any>>();

	for (let api of apis) {
		// console.log(api);
		let fileName = api.url.split(/\b/)[1];

		if (!pres.has(fileName)) {
			pres.set(fileName, []);
		}

		let val = pres.get(fileName);
		pres.set(fileName, val.concat(api));
	}


	pres.forEach((pre, key) => {
		let content: string = '';
		for (let a of pre) {
			content = content.concat(buildApi(a))
		}
		fs.writeFileSync(dir + '/' + key + '.js', fileHead + '' + content)
	});

}

function buildApi(api) {
	let tempUrl = api.url.replace(/\$/g, 'By');

	tempUrl = array2String(url2Array(tempUrl)).replace(/[^A-Za-z]/g, '');
	let hasQuery = api.query.length > 0;
	let hasBody = api.body.length > 0;
	return `export function ${api.method}${tempUrl}(${array2String(api.path)}${hasQuery ? 'params,' : ''}${hasBody ? 'data,' : ''}){\n return request({url: \`${api.prepend ? api.prepend : api.scheme + '://' + api.host}${api.url}\`,method:'${api.method}',${hasQuery ? 'params,' : ''}${hasBody ? 'data,' : ''}}).then(res => {
		return res.data
	})}\n`;
}

function array2String(ar: Array<String>) {
	let str = '';
	if (!ar || ar.length === 0) {
		return '';
	}
	for (let i of ar) {
		str = str.concat(i + ",");
	}
	return str.replace(/([{}])/g, '');
}

function url2Array(str: string) {
	// console.log(str);
	let arr: Array<string> = str.split(/\//);
	arr = arr
		.filter(res => res !== '')
		.map(a => {
			return a.replace(/By{([a-z]?)/, (word, res1: string) => {
				return 'By{' + res1.toUpperCase();
			}).replace(/\.json/, '')
				.replace(/\./g, '')
				.replace(/\b([a-z]?)/g, (word, res: string) => {
					return res.toUpperCase();
				})
		});
	// console.log(arr);
	let arr2 = [...arr].reverse();
	let n = checkVars(arr2);
	let arrr = [];
	for (let i = 0; i < n; i++) {
		arrr.push(arr.pop());
	}
	arr.splice(0, 0, 'From');
	arr.splice(0, 0, ...arrr.reverse());
	// console.log(arr);
	if (arr[arr.length - 1] === 'From') {
		arr.pop();
	}
	return arr;
}

function checkVars(arr: Array<string>) {
	for (let i = 0; i < arr.length; i++) {
		if (!arr[i].match(/^By{/)) {
			return i + 1;
		}
	}
}

function getLastWord(str: string) {
	if (str.match(/^#\//)) {
		return str.split('/').pop();
	}
}


