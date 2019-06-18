import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getMe(){return request({url: `http://api.spotify.com/v1/me`,method:'get',data,}).then(res => {
		return res.data
	})}export function deleteMeFollowing(){return request({url: `http://api.spotify.com/v1/me/following`,method:'delete',data,params:{},}).then(res => {
		return res.data
	})}export function getMeFollowing(){return request({url: `http://api.spotify.com/v1/me/following`,method:'get',data,params:{},}).then(res => {
		return res.data
	})}export function putMeFollowing(){return request({url: `http://api.spotify.com/v1/me/following`,method:'put',data,params:{},}).then(res => {
		return res.data
	})}export function getMeFollowingContains(){return request({url: `http://api.spotify.com/v1/me/following/contains`,method:'get',data,params:{},}).then(res => {
		return res.data
	})}export function deleteMeTracks(){return request({url: `http://api.spotify.com/v1/me/tracks`,method:'delete',data,params:{},}).then(res => {
		return res.data
	})}export function getMeTracks(){return request({url: `http://api.spotify.com/v1/me/tracks`,method:'get',data,params:{},}).then(res => {
		return res.data
	})}export function putMeTracks(){return request({url: `http://api.spotify.com/v1/me/tracks`,method:'put',data,params:{},}).then(res => {
		return res.data
	})}export function getMeTracksContains(){return request({url: `http://api.spotify.com/v1/me/tracks/contains`,method:'get',data,params:{},}).then(res => {
		return res.data
	})}