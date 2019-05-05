import request from '@/plugins/axios'
export function postMail(data){return request({url: '/api1/mail ',method:'post',data}).then(res => {
		return res.data.data
	})}export function putMail(data){return request({url: '/api1/mail ',method:'put',data}).then(res => {
		return res.data.data
	})}export function getMailAll(){return request({url: '/api1/mail/all ',method:'get',}).then(res => {
		return res.data.data
	})}export function getMailIdByEmailId(emailId,){return request({url: `/api1/mail/id/${emailId} `,method:'get',}).then(res => {
		return res.data.data
	})}export function deleteMailByEmailId(emailId,){return request({url: `/api1/mail/${emailId} `,method:'delete',}).then(res => {
		return res.data.data
	})}