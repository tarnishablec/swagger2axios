import request from '@/plugins/axios'

//host:api.github.com

export function getCodeFromSearch(params,){
 return request({url: `https://api.github.com/search/code`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getIssuesFromSearch(params,){
 return request({url: `https://api.github.com/search/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getRepositoriesFromSearch(params,){
 return request({url: `https://api.github.com/search/repositories`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getUsersFromSearch(params,){
 return request({url: `https://api.github.com/search/users`,method:'get',params,}).then(res => {
		return res.data
	})}
