import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getSearch(params,){
 return request({url: `http://api.spotify.com/v1/search`,method:'get',params,}).then(res => {
		return res.data
	})}
