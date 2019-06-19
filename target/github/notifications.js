import request from '@/plugins/axios'

//host:api.github.com

export function getNotifications(params,){
 return request({url: `http://api.github.com/notifications`,method:'get',params,}).then(res => {
		return res.data
	})}
export function putNotifications(data,){
 return request({url: `http://api.github.com/notifications`,method:'put',data,}).then(res => {
		return res.data
	})}
export function getThreadsByIdFromNotifications(id,){
 return request({url: `http://api.github.com/notifications/threads/${id}`,method:'get',}).then(res => {
		return res.data
	})}
export function patchThreadsByIdFromNotifications(id,){
 return request({url: `http://api.github.com/notifications/threads/${id}`,method:'patch',}).then(res => {
		return res.data
	})}
export function deleteSubscriptionFromNotificationsThreadsById(id,){
 return request({url: `http://api.github.com/notifications/threads/${id}/subscription`,method:'delete',}).then(res => {
		return res.data
	})}
export function getSubscriptionFromNotificationsThreadsById(id,){
 return request({url: `http://api.github.com/notifications/threads/${id}/subscription`,method:'get',}).then(res => {
		return res.data
	})}
export function putSubscriptionFromNotificationsThreadsById(id,data,){
 return request({url: `http://api.github.com/notifications/threads/${id}/subscription`,method:'put',data,}).then(res => {
		return res.data
	})}
