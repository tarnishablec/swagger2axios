import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getAlbums(){return request({url: `http://api.spotify.com/v1/albums`,method:'get',data,}).then(res => {
		return res.data
	})}export function getAlbumsById(){return request({url: `http://api.spotify.com/v1/albums/${id}`,method:'get',data,}).then(res => {
		return res.data
	})}export function getTracksFromAlbumsById(){return request({url: `http://api.spotify.com/v1/albums/${id}/tracks`,method:'get',data,}).then(res => {
		return res.data
	})}