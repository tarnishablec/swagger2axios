import request from '@/plugins/axios'
export function postsystemrestart(){return request({url: '/system/restart/ ',method:'post',})}