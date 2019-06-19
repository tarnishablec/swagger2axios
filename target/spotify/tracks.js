import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getTracks(params,){
 return request({url: `https://api.spotify.com/v1/tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTracksById(id,params,){
 return request({url: `https://api.spotify.com/v1/tracks/${id}`,method:'get',params,}).then(res => {
		return res.data
	})}
