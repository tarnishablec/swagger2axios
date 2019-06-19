import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getAlbums(params,){
 return request({url: `https://api.spotify.com/v1/albums`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAlbumsById(id,params,){
 return request({url: `https://api.spotify.com/v1/albums/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTracksFromAlbumsById(id,params,){
 return request({url: `https://api.spotify.com/v1/albums/${id}/tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
