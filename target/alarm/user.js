import request from '@/plugins/axios'
export function getUserDeptUserList(){return request({url: '/api1/user/deptUserList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getUserGroupUserList(){return request({url: '/api1/user/groupUserList ',method:'get',}).then(res => {
		return res.data.data
	})}export function postUserLogin(data){return request({url: '/api1/user/login ',method:'post',data}).then(res => {
		return res.data.data
	})}export function getUserRoleUserList(){return request({url: '/api1/user/roleUserList ',method:'get',}).then(res => {
		return res.data.data
	})}