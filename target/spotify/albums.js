import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getAlbums(ids,market,){return request({url: `http://api.spotify.com/v1/albums`,method:'get',params:{ids,market,},}).then(res => {
		return res.data
	})}export function getAlbumsById(market,id,){return request({url: `http://api.spotify.com/v1/albums/${id}`,method:'get',params:{market,},}).then(res => {
		return res.data
	})}export function getTracksFromAlbumsById(limit,offset,market,id,){return request({url: `http://api.spotify.com/v1/albums/${id}/tracks`,method:'get',params:{limit,offset,market,},}).then(res => {
		return res.data
	})}