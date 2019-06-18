import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getUsersByUserid(){return request({url: `http://api.spotify.com/v1/users/${user_id}`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function getPlaylistsFromUsersByUserid(limit,offset,){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists`,method:'get',params:{limit,offset,},}).then(res => {
		return res.data
	})}export function postPlaylistsFromUsersByUserid(data){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists`,method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getPlaylistsByPlaylistidFromUsersByUserid(fields,market,){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`,method:'get',params:{fields,market,},}).then(res => {
		return res.data
	})}export function putPlaylistsByPlaylistidFromUsersByUserid(data){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`,method:'put',data,params:{},}).then(res => {
		return res.data
	})}export function deleteFollowersFromUsersByUseridPlaylistsByPlaylistid(){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers`,method:'delete',params:{},}).then(res => {
		return res.data
	})}export function putFollowersFromUsersByUseridPlaylistsByPlaylistid(data){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers`,method:'put',data,params:{},}).then(res => {
		return res.data
	})}export function getFollowersContainsFromUsersByUseridPlaylistsByPlaylistid(ids,){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers/contains`,method:'get',params:{ids,},}).then(res => {
		return res.data
	})}export function deleteTracksFromUsersByUseridPlaylistsByPlaylistid(data){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'delete',data,params:{},}).then(res => {
		return res.data
	})}export function getTracksFromUsersByUseridPlaylistsByPlaylistid(limit,offset,fields,market,){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'get',params:{limit,offset,fields,market,},}).then(res => {
		return res.data
	})}export function postTracksFromUsersByUseridPlaylistsByPlaylistid(position,uris,){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'post',params:{position,uris,},}).then(res => {
		return res.data
	})}export function putTracksFromUsersByUseridPlaylistsByPlaylistid(data){return request({url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,method:'put',data,params:{},}).then(res => {
		return res.data
	})}