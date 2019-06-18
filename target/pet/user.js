import request from '@/plugins/axios'

//host:petstore.swagger.io/v2

export function postUser(data){return request({url: 'http://api1/user',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function postUserCreateWithArray(data){return request({url: 'http://api1/user/createWithArray',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function postUserCreateWithList(data){return request({url: 'http://api1/user/createWithList',method:'post',data,params:{},}).then(res => {
		return res.data
	})}export function getUserLogin(username,password,){return request({url: 'http://api1/user/login',method:'get',params:{username,password,},}).then(res => {
		return res.data
	})}export function getUserLogout(){return request({url: 'http://api1/user/logout',method:'get',params:{},}).then(res => {
		return res.data
	})}export function getUserByUsername(username,){return request({url: `http://api1/user/${username}`,method:'get',params:{},}).then(res => {
		return res.data
	})}export function putUserByUsername(username,data){return request({url: `http://api1/user/${username}`,method:'put',data,params:{},}).then(res => {
		return res.data
	})}export function deleteUserByUsername(username,){return request({url: `http://api1/user/${username}`,method:'delete',params:{},}).then(res => {
		return res.data
	})}