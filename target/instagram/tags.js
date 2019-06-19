import request from '@/plugins/axios'

//host:api.instagram.com/v1

export function getSearchFromTags(params,){
 return request({url: `http://api.instagram.com/v1/tags/search`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getTagsByTagname(tag_name,){
 return request({url: `http://api.instagram.com/v1/tags/${tag_name}`,method:'get',}).then(res => {
		return res.data
	})}
export function getRecentFromTagsByTagnameMedia(tag_name,params,){
 return request({url: `http://api.instagram.com/v1/tags/${tag_name}/media/recent`,method:'get',params,}).then(res => {
		return res.data
	})}
