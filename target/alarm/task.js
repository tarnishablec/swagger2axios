import request from '@/plugins/axios'
export function getTaskAll(){return request({url: '/api1/task/all ',method:'get',})}