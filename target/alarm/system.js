import request from '@/plugins/axios'
export function postSystemRestart(){return request({url: '/api1/system/restart/ ',method:'post',}).then(res => {
		return res.data.data
	})}