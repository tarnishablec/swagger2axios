import request from '@/plugins/axios'

//host:api.github.com

export function getRepositories(params,){
 return request({url: `http://api.github.com/repositories`,method:'get',params,}).then(res => {
		return res.data
	})}
