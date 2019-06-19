import request from '@/plugins/axios'

//host:api.github.com

export function getUsers(params,){
 return request({url: `https://api.github.com/users`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}`,method:'get',}).then(res => {
		return res.data
	})}
export function getEventsFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/events`,method:'get',}).then(res => {
		return res.data
	})}
export function getOrgsByOrgFromUsersByUsernameEvents(username,org,){
 return request({url: `https://api.github.com/users/${username}/events/orgs/${org}`,method:'get',}).then(res => {
		return res.data
	})}
export function getFollowersFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/followers`,method:'get',}).then(res => {
		return res.data
	})}
export function getFollowingByTargetUserFromUsersByUsername(username,targetUser,){
 return request({url: `https://api.github.com/users/${username}/following/${targetUser}`,method:'get',}).then(res => {
		return res.data
	})}
export function getGistsFromUsersByUsername(username,params,){
 return request({url: `https://api.github.com/users/${username}/gists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getKeysFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/keys`,method:'get',}).then(res => {
		return res.data
	})}
export function getOrgsFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/orgs`,method:'get',}).then(res => {
		return res.data
	})}
export function getReceivedeventsFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/received_events`,method:'get',}).then(res => {
		return res.data
	})}
export function getPublicFromUsersByUsernameReceivedevents(username,){
 return request({url: `https://api.github.com/users/${username}/received_events/public`,method:'get',}).then(res => {
		return res.data
	})}
export function getReposFromUsersByUsername(username,params,){
 return request({url: `https://api.github.com/users/${username}/repos`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStarredFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/starred`,method:'get',}).then(res => {
		return res.data
	})}
export function getSubscriptionsFromUsersByUsername(username,){
 return request({url: `https://api.github.com/users/${username}/subscriptions`,method:'get',}).then(res => {
		return res.data
	})}
