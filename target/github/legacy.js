import request from '@/plugins/axios'

//host:api.github.com

export function getSearchByOwnerByRepositoryByStateByKeywordFromLegacyIssues(keyword,state,owner,repository,){
 return request({url: `http://api.github.com/legacy/issues/search/${owner}/${repository}/${state}/${keyword}`,method:'get',}).then(res => {
		return res.data
	})}
export function getSearchByKeywordFromLegacyRepos(keyword,params,){
 return request({url: `http://api.github.com/legacy/repos/search/${keyword}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getEmailByEmailFromLegacyUser(email,){
 return request({url: `http://api.github.com/legacy/user/email/${email}`,method:'get',}).then(res => {
		return res.data
	})}
export function getSearchByKeywordFromLegacyUser(keyword,params,){
 return request({url: `http://api.github.com/legacy/user/search/${keyword}`,method:'get',params,}).then(res => {
		return res.data
	})}
