import request from '@/plugins/axios'

//host:api.spotify.com/v1

export function getBrowseCategories(limit,offset,country,locale,){return request({url: `http://api.spotify.com/v1/browse/categories`,method:'get',params:{limit,offset,country,locale,},}).then(res => {
		return res.data
	})}export function getCategoriesByCategoryidFromBrowse(country,locale,){return request({url: `http://api.spotify.com/v1/browse/categories/${category_id}`,method:'get',params:{country,locale,},}).then(res => {
		return res.data
	})}export function getPlaylistsFromBrowseCategoriesByCategoryid(limit,offset,country,){return request({url: `http://api.spotify.com/v1/browse/categories/${category_id}/playlists`,method:'get',params:{limit,offset,country,},}).then(res => {
		return res.data
	})}export function getBrowseFeaturedPlaylists(limit,offset,country,locale,timestamp,){return request({url: `http://api.spotify.com/v1/browse/featured-playlists`,method:'get',params:{limit,offset,country,locale,timestamp,},}).then(res => {
		return res.data
	})}export function getBrowseNewReleases(limit,offset,country,){return request({url: `http://api.spotify.com/v1/browse/new-releases`,method:'get',params:{limit,offset,country,},}).then(res => {
		return res.data
	})}