import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getBrowseCategories(){return request({url: `http://api.spotify.com/v1/browse/categories`,method:'get',data,}).then(res => {
		return res.data
	})}export function getCategoriesByCategoryidFromBrowse(){return request({url: `http://api.spotify.com/v1/browse/categories/${category_id}`,method:'get',data,}).then(res => {
		return res.data
	})}export function getPlaylistsFromBrowseCategoriesByCategoryid(){return request({url: `http://api.spotify.com/v1/browse/categories/${category_id}/playlists`,method:'get',data,}).then(res => {
		return res.data
	})}export function getBrowseFeaturedPlaylists(){return request({url: `http://api.spotify.com/v1/browse/featured-playlists`,method:'get',data,}).then(res => {
		return res.data
	})}export function getBrowseNewReleases(){return request({url: `http://api.spotify.com/v1/browse/new-releases`,method:'get',data,}).then(res => {
		return res.data
	})}