import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getMe(){return request({url: 'http://api.spotify.com/v1/me',method:'get',}).then(res => {
		return res.data
	})}export function deleteMeFollowing(type,ids,){return request({url: 'http://api.spotify.com/v1/me/following',method:'delete',params:{type,ids,},}).then(res => {
		return res.data
	})}export function getMeFollowing(type,limit,after,){return request({url: 'http://api.spotify.com/v1/me/following',method:'get',params:{type,limit,after,},}).then(res => {
		return res.data
	})}export function putMeFollowing(type,ids,){return request({url: 'http://api.spotify.com/v1/me/following',method:'put',params:{type,ids,},}).then(res => {
		return res.data
	})}export function getMeFollowingContains(type,ids,){return request({url: 'http://api.spotify.com/v1/me/following/contains',method:'get',params:{type,ids,},}).then(res => {
		return res.data
	})}export function deleteMeTracks(ids,){return request({url: 'http://api.spotify.com/v1/me/tracks',method:'delete',params:{ids,},}).then(res => {
		return res.data
	})}export function getMeTracks(limit,offset,market,){return request({url: 'http://api.spotify.com/v1/me/tracks',method:'get',params:{limit,offset,market,},}).then(res => {
		return res.data
	})}export function putMeTracks(ids,){return request({url: 'http://api.spotify.com/v1/me/tracks',method:'put',params:{ids,},}).then(res => {
		return res.data
	})}export function getMeTracksContains(ids,){return request({url: 'http://api.spotify.com/v1/me/tracks/contains',method:'get',params:{ids,},}).then(res => {
		return res.data
	})}