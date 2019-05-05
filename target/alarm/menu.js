import request from '@/plugins/axios'
export function postMenu(data){return request({url: '/api1/menu',method:'post',data,}).then(res => {
		return res.data.data
	})}export function putMenu(data){return request({url: '/api1/menu',method:'put',data,}).then(res => {
		return res.data.data
	})}export function getMenuAll(){return request({url: '/api1/menu/all',method:'get',}).then(res => {
		return res.data.data
	})}export function postMenuRoeIds(data){return request({url: '/api1/menu/roeIds',method:'post',data,}).then(res => {
		return res.data.data
	})}export function deleteMenuByMenuId(menuId,){return request({url: `/api1/menu/${menuId}`,method:'delete',}).then(res => {
		return res.data.data
	})}