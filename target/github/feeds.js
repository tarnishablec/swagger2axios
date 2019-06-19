import request from '@/plugins/axios'

//host:api.github.com

export function getFeeds(){
 return request({url: `https://api.github.com/feeds`,method:'get',}).then(res => {
		return res.data
	})}
