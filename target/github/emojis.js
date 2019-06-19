import request from '@/plugins/axios'

//host:api.github.com

export function getEmojisFrom(){
 return request({url: `http://api.github.com/emojis`,method:'get',}).then(res => {
		return res.data
	})}
