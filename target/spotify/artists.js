import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getArtists(ids,){return request({url: `http://api.spotify.com/v1/artists`,method:'get',params:{ids,},}).then(res => {
		return res.data
	})}export function getArtistsById(id,){return request({url: `http://api.spotify.com/v1/artists/${id}`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function getAlbumsFromArtistsById(limit,offset,album_type,market,id,){return request({url: `http://api.spotify.com/v1/artists/${id}/albums`,method:'get',params:{limit,offset,album_type,market,},}).then(res => {
		return res.data
	})}export function getArtistsFromArtistsByIdRelated(id,){return request({url: `http://api.spotify.com/v1/artists/${id}/related-artists`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function getTracksFromArtistsByIdTop(country,id,){return request({url: `http://api.spotify.com/v1/artists/${id}/top-tracks`,method:'get',params:{country,},}).then(res => {
		return res.data
	})}