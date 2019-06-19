import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getCategoriesFromBrowse(params,){
 return request({url: `https://api.spotify.com/v1/browse/categories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getCategoriesByCategoryidFromBrowse(category_id,params,){
 return request({url: `https://api.spotify.com/v1/browse/categories/${category_id}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getPlaylistsFromBrowseCategoriesByCategoryid(category_id,params,){
 return request({url: `https://api.spotify.com/v1/browse/categories/${category_id}/playlists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getFeaturedPlaylistsFromBrowse(params,){
 return request({url: `https://api.spotify.com/v1/browse/featured-playlists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getNewReleasesFromBrowse(params,){
 return request({url: `https://api.spotify.com/v1/browse/new-releases`,method:'get',params,}).then(res => {
		return res.data
	})}
