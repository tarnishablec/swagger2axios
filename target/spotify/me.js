import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getMe(){
 return request({url: `http://api.spotify.com/v1/me`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteMeFollowing(params,){
 return request({url: `http://api.spotify.com/v1/me/following`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getMeFollowing(params,){
 return request({url: `http://api.spotify.com/v1/me/following`,method:'get',params,}).then(res => {
		return res.data
	})}
export function putMeFollowing(params,){
 return request({url: `http://api.spotify.com/v1/me/following`,method:'put',params,}).then(res => {
		return res.data
	})}
export function getMeFollowingContains(params,){
 return request({url: `http://api.spotify.com/v1/me/following/contains`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteMeTracks(params,){
 return request({url: `http://api.spotify.com/v1/me/tracks`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getMeTracks(params,){
 return request({url: `http://api.spotify.com/v1/me/tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function putMeTracks(params,){
 return request({url: `http://api.spotify.com/v1/me/tracks`,method:'put',params,}).then(res => {
		return res.data
	})}
export function getMeTracksContains(params,){
 return request({url: `http://api.spotify.com/v1/me/tracks/contains`,method:'get',params,}).then(res => {
		return res.data
	})}
