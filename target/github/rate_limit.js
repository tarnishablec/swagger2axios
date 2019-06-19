import request from '@/plugins/axios'

//host:api.github.com

export function getRatelimit(){
 return request({url: `https://api.github.com/rate_limit`,method:'get',}).then(res => {
		return res.data
	})}
