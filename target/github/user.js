import request from '@/plugins/axios'

//host:api.github.com

export function getUserFrom(){
 return request({url: `http://api.github.com/user`,method:'get',}).then(res => {
		return res.data
	})}
export function patchUserFrom(data,){
 return request({url: `http://api.github.com/user`,method:'patch',data,}).then(res => {
		return res.data
	})}
export function deleteEmailsFromUser(data,){
 return request({url: `http://api.github.com/user/emails`,method:'delete',data,}).then(res => {
		return res.data
	})}
export function getEmailsFromUser(){
 return request({url: `http://api.github.com/user/emails`,method:'get',}).then(res => {
		return res.data
	})}
export function postEmailsFromUser(data,){
 return request({url: `http://api.github.com/user/emails`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getFollowersFromUser(){
 return request({url: `http://api.github.com/user/followers`,method:'get',}).then(res => {
		return res.data
	})}
export function getFollowingFromUser(){
 return request({url: `http://api.github.com/user/following`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteFollowingByUsernameFromUser(username,){
 return request({url: `http://api.github.com/user/following/${username}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getFollowingByUsernameFromUser(username,){
 return request({url: `http://api.github.com/user/following/${username}`,method:'get',}).then(res => {
		return res.data
	})}
export function putFollowingByUsernameFromUser(username,){
 return request({url: `http://api.github.com/user/following/${username}`,method:'put',}).then(res => {
		return res.data
	})}
export function getIssuesFromUser(params,){
 return request({url: `http://api.github.com/user/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getKeysFromUser(){
 return request({url: `http://api.github.com/user/keys`,method:'get',}).then(res => {
		return res.data
	})}
export function postKeysFromUser(data,){
 return request({url: `http://api.github.com/user/keys`,method:'post',data,}).then(res => {
		return res.data
	})}
export function deleteKeysByKeyIdFromUser(keyId,){
 return request({url: `http://api.github.com/user/keys/${keyId}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getKeysByKeyIdFromUser(keyId,){
 return request({url: `http://api.github.com/user/keys/${keyId}`,method:'get',}).then(res => {
		return res.data
	})}
export function getOrgsFromUser(){
 return request({url: `http://api.github.com/user/orgs`,method:'get',}).then(res => {
		return res.data
	})}
export function getReposFromUser(params,){
 return request({url: `http://api.github.com/user/repos`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postReposFromUser(data,){
 return request({url: `http://api.github.com/user/repos`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getStarredFromUser(params,){
 return request({url: `http://api.github.com/user/starred`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteStarredByOwnerByRepoFromUser(owner,repo,){
 return request({url: `http://api.github.com/user/starred/${owner}/${repo}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getStarredByOwnerByRepoFromUser(owner,repo,){
 return request({url: `http://api.github.com/user/starred/${owner}/${repo}`,method:'get',}).then(res => {
		return res.data
	})}
export function putStarredByOwnerByRepoFromUser(owner,repo,){
 return request({url: `http://api.github.com/user/starred/${owner}/${repo}`,method:'put',}).then(res => {
		return res.data
	})}
export function getSubscriptionsFromUser(){
 return request({url: `http://api.github.com/user/subscriptions`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteSubscriptionsByOwnerByRepoFromUser(owner,repo,){
 return request({url: `http://api.github.com/user/subscriptions/${owner}/${repo}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getSubscriptionsByOwnerByRepoFromUser(owner,repo,){
 return request({url: `http://api.github.com/user/subscriptions/${owner}/${repo}`,method:'get',}).then(res => {
		return res.data
	})}
export function putSubscriptionsByOwnerByRepoFromUser(owner,repo,){
 return request({url: `http://api.github.com/user/subscriptions/${owner}/${repo}`,method:'put',}).then(res => {
		return res.data
	})}
export function getTeamsFromUser(){
 return request({url: `http://api.github.com/user/teams`,method:'get',}).then(res => {
		return res.data
	})}
