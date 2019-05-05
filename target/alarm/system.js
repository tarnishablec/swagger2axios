import request from 'src/plugins/axios'
export function postSystemRestart(){return request({url: '/api1/system/restart/ ',method:'post',})}