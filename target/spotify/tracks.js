import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getTracks(ids,market,){return request({url: 'http://api.spotify.com/v1/tracks',method:'get',params:{ids,market,},}).then(res => {
		return res.data
	})}export function getTracksById(market,id,){return request({url: `http://api.spotify.com/v1/tracks/${id}`,method:'get',params:{market,},}).then(res => {
		return res.data
	})}