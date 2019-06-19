import request from '@/plugins/axios'

//host:api.github.com

export function getSearchCode(params,){
 return request({url: `http://api.github.com/search/code`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSearchIssues(params,){
 return request({url: `http://api.github.com/search/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSearchRepositories(params,){
 return request({url: `http://api.github.com/search/repositories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getSearchUsers(params,){
 return request({url: `http://api.github.com/search/users`,method:'get',params,}).then(res => {
		return res.data
	})}
