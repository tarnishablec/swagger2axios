import request from '@/plugins/axios'

//host:api.github.com

export function getFeedsFrom(){
 return request({url: `http://api.github.com/feeds`,method:'get',}).then(res => {
		return res.data
	})}
