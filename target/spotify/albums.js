import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getAlbumsFrom(params,){
 return request({url: `http://api.spotify.com/v1/albums`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getAlbumsByIdFrom(id,params,){
 return request({url: `http://api.spotify.com/v1/albums/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTracksFromAlbumsById(id,params,){
 return request({url: `http://api.spotify.com/v1/albums/${id}/tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
