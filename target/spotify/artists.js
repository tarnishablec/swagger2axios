import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getArtists(){return request({url: `http://api.spotify.com/v1/artists`,method:'get',data,}).then(res => {
		return res.data
	})}export function getArtistsById(){return request({url: `http://api.spotify.com/v1/artists/${id}`,method:'get',data,}).then(res => {
		return res.data
	})}export function getAlbumsFromArtistsById(){return request({url: `http://api.spotify.com/v1/artists/${id}/albums`,method:'get',data,}).then(res => {
		return res.data
	})}export function getArtistsFromArtistsByIdRelated(){return request({url: `http://api.spotify.com/v1/artists/${id}/related-artists`,method:'get',data,}).then(res => {
		return res.data
	})}export function getTracksFromArtistsByIdTop(){return request({url: `http://api.spotify.com/v1/artists/${id}/top-tracks`,method:'get',data,}).then(res => {
		return res.data
	})}