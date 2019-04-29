import request from '@/plugins/axios'
export function gettaskall(){return request({url: '/task/all ',method:'get',})}