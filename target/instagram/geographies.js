import request from '@/plugins/axios'

//host:api.instagram.com/v1

export function getRecentFromGeographiesByGeoidMedia(geo_id,params,){
 return request({url: `https://api.instagram.com/v1/geographies/${geo_id}/media/recent`,method:'get',params,}).then(res => {
		return res.data
	})}
