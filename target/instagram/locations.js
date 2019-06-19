import request from '@/plugins/axios'

//host:api.instagram.com/v1

export function getSearchFromLocations(params,){
 return request({url: `https://api.instagram.com/v1/locations/search`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getLocationsByLocationid(location_id,){
 return request({url: `https://api.instagram.com/v1/locations/${location_id}`,method:'get',}).then(res => {
		return res.data
	})}
export function getRecentFromLocationsByLocationidMedia(location_id,params,){
 return request({url: `https://api.instagram.com/v1/locations/${location_id}/media/recent`,method:'get',params,}).then(res => {
		return res.data
	})}
