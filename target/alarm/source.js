import request from '@/plugins/axios'
export function postSource(data){return request({url: '/api1/source ',method:'post',data}).then(res => {
		return res.data.data
	})}export function putSource(data){return request({url: '/api1/source ',method:'put',data}).then(res => {
		return res.data.data
	})}export function getSourceAll(){return request({url: '/api1/source/all ',method:'get',}).then(res => {
		return res.data.data
	})}export function getSourceIdBySourceId(sourceId,){return request({url: `/api1/source/id/${sourceId} `,method:'get',}).then(res => {
		return res.data.data
	})}export function getSourceTokenBySourceToken(sourceToken,){return request({url: `/api1/source/token/${sourceToken} `,method:'get',}).then(res => {
		return res.data.data
	})}export function deleteSourceBySourceId(sourceId,){return request({url: `/api1/source/${sourceId} `,method:'delete',}).then(res => {
		return res.data.data
	})}