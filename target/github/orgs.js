import request from '@/plugins/axios'

//host:api.github.com

export function getOrgsByOrg(org,){
 return request({url: `http://api.github.com/orgs/${org}`,method:'get',}).then(res => {
		return res.data
	})}
export function patchOrgsByOrg(org,data,){
 return request({url: `http://api.github.com/orgs/${org}`,method:'patch',data,}).then(res => {
		return res.data
	})}
export function getEventsFromOrgsByOrg(org,){
 return request({url: `http://api.github.com/orgs/${org}/events`,method:'get',}).then(res => {
		return res.data
	})}
export function getIssuesFromOrgsByOrg(org,params,){
 return request({url: `http://api.github.com/orgs/${org}/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getMembersFromOrgsByOrg(org,){
 return request({url: `http://api.github.com/orgs/${org}/members`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteMembersByUsernameFromOrgsByOrg(org,username,){
 return request({url: `http://api.github.com/orgs/${org}/members/${username}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getMembersByUsernameFromOrgsByOrg(org,username,){
 return request({url: `http://api.github.com/orgs/${org}/members/${username}`,method:'get',}).then(res => {
		return res.data
	})}
export function getPublicmembersFromOrgsByOrg(org,){
 return request({url: `http://api.github.com/orgs/${org}/public_members`,method:'get',}).then(res => {
		return res.data
	})}
export function deletePublicmembersByUsernameFromOrgsByOrg(org,username,){
 return request({url: `http://api.github.com/orgs/${org}/public_members/${username}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getPublicmembersByUsernameFromOrgsByOrg(org,username,){
 return request({url: `http://api.github.com/orgs/${org}/public_members/${username}`,method:'get',}).then(res => {
		return res.data
	})}
export function putPublicmembersByUsernameFromOrgsByOrg(org,username,){
 return request({url: `http://api.github.com/orgs/${org}/public_members/${username}`,method:'put',}).then(res => {
		return res.data
	})}
export function getReposFromOrgsByOrg(org,params,){
 return request({url: `http://api.github.com/orgs/${org}/repos`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReposFromOrgsByOrg(org,data,){
 return request({url: `http://api.github.com/orgs/${org}/repos`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getTeamsFromOrgsByOrg(org,){
 return request({url: `http://api.github.com/orgs/${org}/teams`,method:'get',}).then(res => {
		return res.data
	})}
export function postTeamsFromOrgsByOrg(org,data,){
 return request({url: `http://api.github.com/orgs/${org}/teams`,method:'post',data,}).then(res => {
		return res.data
	})}
