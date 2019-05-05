import request from '@/plugins/axios'
export function postPushAdd(data){return request({url: '/api1/push/add',method:'post',data,}).then(res => {
		return res.data.data
	})}export function postPushEdit(data){return request({url: '/api1/push/edit',method:'post',data,}).then(res => {
		return res.data.data
	})}export function postPushGetSourceByTokenBySourceToken(sourceToken,){return request({url: `/api1/push/getSourceByToken/${sourceToken}`,method:'post',}).then(res => {
		return res.data.data
	})}export function postPushQueryAllList(){return request({url: '/api1/push/queryAllList',method:'post',}).then(res => {
		return res.data.data
	})}export function postPushQueryByIdBySourceId(sourceId,){return request({url: `/api1/push/queryById/${sourceId}`,method:'post',}).then(res => {
		return res.data.data
	})}export function postPushAlarmData(data){return request({url: '/api1/pushAlarmData',method:'post',data,}).then(res => {
		return res.data.data
	})}