import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getSearch(limit,offset,q,type,market,){return request({url: 'http://api.spotify.com/v1/search',method:'get',params:{limit,offset,q,type,market,},}).then(res => {
		return res.data
	})}