import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getArtists(params,){
 return request({url: `http://api.spotify.com/v1/artists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getArtistsById(id,){
 return request({url: `http://api.spotify.com/v1/artists/${id}`,method:'get',}).then(res => {
		return res.data
	})}
export function getAlbumsFromArtistsById(id,params,){
 return request({url: `http://api.spotify.com/v1/artists/${id}/albums`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getRelatedArtistsFromArtistsById(id,){
 return request({url: `http://api.spotify.com/v1/artists/${id}/related-artists`,method:'get',}).then(res => {
		return res.data
	})}
export function getTopTracksFromArtistsById(id,params,){
 return request({url: `http://api.spotify.com/v1/artists/${id}/top-tracks`,method:'get',params,}).then(res => {
		return res.data
	})}
