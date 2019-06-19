import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getBrowseCategories(params,){
 return request({url: `http://api.spotify.com/v1/browse/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCategoriesByCategoryidFromBrowse(category_id,params,){
 return request({url: `http://api.spotify.com/v1/browse/categories/${category_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPlaylistsFromBrowseCategoriesByCategoryid(category_id,params,){
 return request({url: `http://api.spotify.com/v1/browse/categories/${category_id}/playlists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getBrowseFeaturedPlaylists(params,){
 return request({url: `http://api.spotify.com/v1/browse/featured-playlists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getBrowseNewReleases(params,){
 return request({url: `http://api.spotify.com/v1/browse/new-releases`,method:'get',params,}).then(res => {
		return res.data
	})}
