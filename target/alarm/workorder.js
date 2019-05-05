import request from '@/plugins/axios'
export function postWorkorderAdd(data){return request({url: '/api1/workorder/add',method:'post',data,}).then(res => {
		return res.data.data
	})}export function postWorkorderEdit(data){return request({url: '/api1/workorder/edit',method:'post',data,}).then(res => {
		return res.data.data
	})}export function postWorkorderGetSourceByTokenBySourceToken(sourceToken,){return request({url: `/api1/workorder/getSourceByToken/${sourceToken}`,method:'post',}).then(res => {
		return res.data.data
	})}export function postWorkorderQueryAllList(){return request({url: '/api1/workorder/queryAllList',method:'post',}).then(res => {
		return res.data.data
	})}export function postWorkorderQueryByIdBySourceId(sourceId,){return request({url: `/api1/workorder/queryById/${sourceId}`,method:'post',}).then(res => {
		return res.data.data
	})}