import request from '@/plugins/axios'

//host:api.instagram.com/v1

export function getLocationsSearch(params,){
 return request({url: `http://api.instagram.com/v1/locations/search`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getLocationsByLocationid(location_id,){
 return request({url: `http://api.instagram.com/v1/locations/${location_id}`,method:'get',}).then(res => {
		return res.data
	})}
export function getMediaRecentFromLocationsByLocationid(location_id,params,){
 return request({url: `http://api.instagram.com/v1/locations/${location_id}/media/recent`,method:'get',params,}).then(res => {
		return res.data
	})}
