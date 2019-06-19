import request from '@/plugins/axios'

//host:api.github.com

export function getIssuesFrom(params,){
 return request({url: `http://api.github.com/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
