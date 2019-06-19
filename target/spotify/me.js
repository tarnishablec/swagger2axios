import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getMe(){
 return request({url: `https://api.spotify.com/v1/me`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteFollowingFromMe(params,){
 return request({url: `https://api.spotify.com/v1/me/following`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getFollowingFromMe(params,){
 return request({url: `https://api.spotify.com/v1/me/following`,method:'get',params,}).then(res => {
		return res.data
	})}
export function putFollowingFromMe(params,){
 return request({url: `https://api.spotify.com/v1/me/following`,method:'put',params,}).then(res => {
		return res.data
	})}
export function getContainsFromMeFollowing(params,){
 return request({url: `https://api.spotify.com/v1/me/following/contains`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteTracksFromMe(params,){
 return request({url: `https://api.spotify.com/v1/me/tracks`,method:'delete',params,}).then(res => {
		return res.data
	})}
export function getTracksFromMe(params,){
 return request({url: `https://api.spotify.com/v1/me/tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function putTracksFromMe(params,){
 return request({url: `https://api.spotify.com/v1/me/tracks`,method:'put',params,}).then(res => {
		return res.data
	})}
export function getContainsFromMeTracks(params,){
 return request({url: `https://api.spotify.com/v1/me/tracks/contains`,method:'get',params,}).then(res => {
		return res.data
	})}
