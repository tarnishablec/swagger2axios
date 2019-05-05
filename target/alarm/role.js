import request from '@/plugins/axios'
export function getRole(){return request({url: '/api1/role',method:'get',}).then(res => {
		return res.data.data
	})}export function postRoleEmpower(data){return request({url: '/api1/role/empower',method:'post',data,}).then(res => {
		return res.data.data
	})}