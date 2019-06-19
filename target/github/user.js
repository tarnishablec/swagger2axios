import request from '@/plugins/axios'

//host:api.github.com

export function getUser(){
 return request({url: `http://api.github.com/user`,method:'get',}).then(res => {
		return res.data
	})}
export function patchUser(data,){
 return request({url: `http://api.github.com/user`,method:'patch',data,}).then(res => {
		return res.data
	})}
export function deleteUserEmails(data,){
 return request({url: `http://api.github.com/user/emails`,method:'delete',data,}).then(res => {
		return res.data
	})}
export function getUserEmails(){
 return request({url: `http://api.github.com/user/emails`,method:'get',}).then(res => {
		return res.data
	})}
export function postUserEmails(data,){
 return request({url: `http://api.github.com/user/emails`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getUserFollowers(){
 return request({url: `http://api.github.com/user/followers`,method:'get',}).then(res => {
		return res.data
	})}
export function getUserFollowing(){
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
export function getUserIssues(params,){
 return request({url: `http://api.github.com/user/issues`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getUserKeys(){
 return request({url: `http://api.github.com/user/keys`,method:'get',}).then(res => {
		return res.data
	})}
export function postUserKeys(data,){
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
export function getUserOrgs(){
 return request({url: `http://api.github.com/user/orgs`,method:'get',}).then(res => {
		return res.data
	})}
export function getUserRepos(params,){
 return request({url: `http://api.github.com/user/repos`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postUserRepos(data,){
 return request({url: `http://api.github.com/user/repos`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getUserStarred(params,){
 return request({url: `http://api.github.com/user/starred`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteOwnerByRepoFromUserStarredBy(owner,repo,){
 return request({url: `http://api.github.com/user/starred/${owner}/${repo}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getOwnerByRepoFromUserStarredBy(owner,repo,){
 return request({url: `http://api.github.com/user/starred/${owner}/${repo}`,method:'get',}).then(res => {
		return res.data
	})}
export function putOwnerByRepoFromUserStarredBy(owner,repo,){
 return request({url: `http://api.github.com/user/starred/${owner}/${repo}`,method:'put',}).then(res => {
		return res.data
	})}
export function getUserSubscriptions(){
 return request({url: `http://api.github.com/user/subscriptions`,method:'get',}).then(res => {
		return res.data
	})}
export function deleteOwnerByRepoFromUserSubscriptionsBy(owner,repo,){
 return request({url: `http://api.github.com/user/subscriptions/${owner}/${repo}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getOwnerByRepoFromUserSubscriptionsBy(owner,repo,){
 return request({url: `http://api.github.com/user/subscriptions/${owner}/${repo}`,method:'get',}).then(res => {
		return res.data
	})}
export function putOwnerByRepoFromUserSubscriptionsBy(owner,repo,){
 return request({url: `http://api.github.com/user/subscriptions/${owner}/${repo}`,method:'put',}).then(res => {
		return res.data
	})}
export function getUserTeams(){
 return request({url: `http://api.github.com/user/teams`,method:'get',}).then(res => {
		return res.data
	})}
