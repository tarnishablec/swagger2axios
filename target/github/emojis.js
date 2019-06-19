import request from '@/plugins/axios'

//host:api.github.com

export function getEmojis(){
 return request({url: `https://api.github.com/emojis`,method:'get',}).then(res => {
		return res.data
	})}
