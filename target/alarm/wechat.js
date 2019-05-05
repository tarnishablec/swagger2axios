import request from '@/plugins/axios'
export function postWechat(data){return request({url: '/api1/wechat ',method:'post',data}).then(res => {
		return res.data.data
	})}export function postWechatAddAppchat(data){return request({url: '/api1/wechat/addAppchat ',method:'post',data}).then(res => {
		return res.data.data
	})}export function getWechatAll(){return request({url: '/api1/wechat/all ',method:'get',}).then(res => {
		return res.data.data
	})}export function getWechatDepartmentByWechatId(wechatId,){return request({url: `/api1/wechat/department/${wechatId} `,method:'get',}).then(res => {
		return res.data.data
	})}export function putWechatEditAppchat(data){return request({url: '/api1/wechat/editAppchat ',method:'put',data}).then(res => {
		return res.data.data
	})}export function deleteWechatEnabledByWechatIdByEnabledId(wechatId,enabledId,){return request({url: `/api1/wechat/enabled/${wechatId}/${enabledId} `,method:'delete',}).then(res => {
		return res.data.data
	})}export function getWechatGetAppchat(data){return request({url: '/api1/wechat/getAppchat ',method:'get',data}).then(res => {
		return res.data.data
	})}export function getWechatIdByWechatId(wechatId,){return request({url: `/api1/wechat/id/${wechatId} `,method:'get',}).then(res => {
		return res.data.data
	})}export function getWechatUserByWechatId(wechatId,){return request({url: `/api1/wechat/user/${wechatId} `,method:'get',}).then(res => {
		return res.data.data
	})}export function deleteWechatByWechatId(wechatId,){return request({url: `/api1/wechat/${wechatId} `,method:'delete',}).then(res => {
		return res.data.data
	})}