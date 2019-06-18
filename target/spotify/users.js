import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getUsersByUserid() {
	return request({url: `http://api.spotify.com/v1/users/${user_id}`, method: 'get', data, params: {},}).then(res => {
		return res.data
	})
}

export function getPlaylistsFromUsersByUserid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists`,
		method: 'get',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function postPlaylistsFromUsersByUserid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists`,
		method: 'post',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function getPlaylistsByPlaylistidFromUsersByUserid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`,
		method: 'get',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function putPlaylistsByPlaylistidFromUsersByUserid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}`,
		method: 'put',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function deleteFollowersFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers`,
		method: 'delete',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function putFollowersFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers`,
		method: 'put',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function getFollowersContainsFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/followers/contains`,
		method: 'get',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function deleteTracksFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
		method: 'delete',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function getTracksFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
		method: 'get',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function postTracksFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
		method: 'post',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}

export function putTracksFromUsersByUseridPlaylistsByPlaylistid() {
	return request({
		url: `http://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
		method: 'put',
		data,
		params: {},
	}).then(res => {
		return res.data
	})
}
