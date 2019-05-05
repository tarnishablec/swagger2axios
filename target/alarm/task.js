import request from 'src/plugins/axios'
export function getTaskAll(){return request({url: '/api1/task/all ',method:'get',})}