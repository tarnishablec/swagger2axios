import request from '@/plugins/axios'

//host:api.github.com

export function getIssues(params,){
 return request({url: `https://api.github.com/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
