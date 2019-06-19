import request from '@/plugins/axios'

//host:api.instagram.com/v1

export function getPopularFromMedia(){
 return request({url: `http://api.instagram.com/v1/media/popular`,method:'get',}).then(res => {
		return res.data
	})}
export function getSearchFromMedia(params,){
 return request({url: `http://api.instagram.com/v1/media/search`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getShortcodeByShortcodeFromMedia(shortcode,){
 return request({url: `http://api.instagram.com/v1/media/shortcode/${shortcode}`,method:'get',}).then(res => {
		return res.data
	})}
export function getMediaByMediaid(media_id,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}`,method:'get',}).then(res => {
		return res.data
	})}
export function getCommentsFromMediaByMediaid(media_id,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}/comments`,method:'get',}).then(res => {
		return res.data
	})}
export function postCommentsFromMediaByMediaid(media_id,params,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}/comments`,method:'post',params,}).then(res => {
		return res.data
	})}
export function deleteCommentsByCommentidFromMediaByMediaid(media_id,comment_id,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}/comments/${comment_id}`,method:'delete',}).then(res => {
		return res.data
	})}
export function deleteLikesFromMediaByMediaid(media_id,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}/likes`,method:'delete',}).then(res => {
		return res.data
	})}
export function getLikesFromMediaByMediaid(media_id,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}/likes`,method:'get',}).then(res => {
		return res.data
	})}
export function postLikesFromMediaByMediaid(media_id,){
 return request({url: `http://api.instagram.com/v1/media/${media_id}/likes`,method:'post',}).then(res => {
		return res.data
	})}
