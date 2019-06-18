import request from '@/plugins/axios'

//host:petstore.swagger.io/v2

export function postUser(){return request({url: `http://api1/user`,method:'post',data,}).then(res => {
		return res.data
	})}export function postUserCreateWithArray(){return request({url: `http://api1/user/createWithArray`,method:'post',data,}).then(res => {
		return res.data
	})}export function postUserCreateWithList(){return request({url: `http://api1/user/createWithList`,method:'post',data,}).then(res => {
		return res.data
	})}export function getUserLogin(){return request({url: `http://api1/user/login`,method:'get',data,}).then(res => {
		return res.data
	})}export function getUserLogout(){return request({url: `http://api1/user/logout`,method:'get',data,}).then(res => {
		return res.data
	})}export function getUserByUsername(){return request({url: `http://api1/user/${username}`,method:'get',data,}).then(res => {
		return res.data
	})}export function putUserByUsername(){return request({url: `http://api1/user/${username}`,method:'put',data,}).then(res => {
		return res.data
	})}export function deleteUserByUsername(){return request({url: `http://api1/user/${username}`,method:'delete',data,}).then(res => {
		return res.data
	})}