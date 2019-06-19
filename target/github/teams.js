import request from '@/plugins/axios'

//host:api.github.com

export function deleteTeamsByTeamIdFrom(teamId,){
 return request({url: `http://api.github.com/teams/${teamId}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getTeamsByTeamIdFrom(teamId,){
 return request({url: `http://api.github.com/teams/${teamId}`,method:'get',}).then(res => {
		return res.data
	})}
export function patchTeamsByTeamIdFrom(teamId,data,){
 return request({url: `http://api.github.com/teams/${teamId}`,method:'patch',data,}).then(res => {
		return res.data
	})}
export function getMembersFromTeamsByTeamId(teamId,){
 return request({url: `http://api.github.com/teams/${teamId}/members`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteMembersByUsernameFromTeamsByTeamId(teamId,username,){
 return request({url: `http://api.github.com/teams/${teamId}/members/${username}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getMembersByUsernameFromTeamsByTeamId(teamId,username,){
 return request({url: `http://api.github.com/teams/${teamId}/members/${username}`,method:'get',}).then(res => {
		return res.data
	})}
export function putMembersByUsernameFromTeamsByTeamId(teamId,username,){
 return request({url: `http://api.github.com/teams/${teamId}/members/${username}`,method:'put',}).then(res => {
		return res.data
	})}
export function deleteMembershipsByUsernameFromTeamsByTeamId(teamId,username,){
 return request({url: `http://api.github.com/teams/${teamId}/memberships/${username}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getMembershipsByUsernameFromTeamsByTeamId(teamId,username,){
 return request({url: `http://api.github.com/teams/${teamId}/memberships/${username}`,method:'get',}).then(res => {
		return res.data
	})}
export function putMembershipsByUsernameFromTeamsByTeamId(teamId,username,){
 return request({url: `http://api.github.com/teams/${teamId}/memberships/${username}`,method:'put',}).then(res => {
		return res.data
	})}
export function getReposFromTeamsByTeamId(teamId,){
 return request({url: `http://api.github.com/teams/${teamId}/repos`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteReposByOwnerByRepoFromTeamsByTeamId(teamId,owner,repo,){
 return request({url: `http://api.github.com/teams/${teamId}/repos/${owner}/${repo}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getReposByOwnerByRepoFromTeamsByTeamId(teamId,owner,repo,){
 return request({url: `http://api.github.com/teams/${teamId}/repos/${owner}/${repo}`,method:'get',}).then(res => {
		return res.data
	})}
export function putReposByOwnerByRepoFromTeamsByTeamId(teamId,owner,repo,){
 return request({url: `http://api.github.com/teams/${teamId}/repos/${owner}/${repo}`,method:'put',}).then(res => {
		return res.data
	})}
