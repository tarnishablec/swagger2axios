import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getTracks(){return request({url: `http://api.spotify.com/v1/tracks`,method:'get',data,params:{},}).then(res => {
		return res.data
	})}export function getTracksById(id,){return request({url: `http://api.spotify.com/v1/tracks/${id}`,method:'get',data,params:{},}).then(res => {
		return res.data
	})}