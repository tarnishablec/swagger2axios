import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getUsersByUseridFrom(user_id,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}`,method:'get',}).then(res => {
		return res.data
	})}
export function getPlaylistsFromUsersByUserid(user_id,params,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postPlaylistsFromUsersByUserid(user_id,data,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getPlaylistsByPlaylistidFromUsersByUserid(user_id,playlist_id,params,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function putPlaylistsByPlaylistidFromUsersByUserid(user_id,playlist_id,data,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`,method:'put',data,}).then(res => {
		return res.data
	})}
export function deleteFollowersFromUsersByUseridPlaylistsByPlaylistid(user_id,playlist_id,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers`,method:'delete',}).then(res => {
		return res.data
	})}
export function putFollowersFromUsersByUseridPlaylistsByPlaylistid(user_id,playlist_id,data,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers`,method:'put',data,}).then(res => {
		return res.data
	})}
export function getContainsFromUsersByUseridPlaylistsByPlaylistidFollowers(user_id,playlist_id,params,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers/contains`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteTracksFromUsersByUseridPlaylistsByPlaylistid(user_id,playlist_id,data,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'delete',data,}).then(res => {
		return res.data
	})}
export function getTracksFromUsersByUseridPlaylistsByPlaylistid(user_id,playlist_id,params,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postTracksFromUsersByUseridPlaylistsByPlaylistid(user_id,playlist_id,params,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'post',params,}).then(res => {
		return res.data
	})}
export function putTracksFromUsersByUseridPlaylistsByPlaylistid(user_id,playlist_id,data,){
 return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'put',data,}).then(res => {
		return res.data
	})}
