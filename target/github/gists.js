import request from '@/plugins/axios'

//host:api.github.com

export function getGistsFrom(params,){
 return request({url: `http://api.github.com/gists`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postGistsFrom(data,){
 return request({url: `http://api.github.com/gists`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getPublicFromGists(params,){
 return request({url: `http://api.github.com/gists/public`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getStarredFromGists(params,){
 return request({url: `http://api.github.com/gists/starred`,method:'get',params,}).then(res => {
		return res.data
	})}
export function deleteGistsByIdFrom(id,){
 return request({url: `http://api.github.com/gists/${id}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getGistsByIdFrom(id,){
 return request({url: `http://api.github.com/gists/${id}`,method:'get',}).then(res => {
		return res.data
	})}
export function patchGistsByIdFrom(id,data,){
 return request({url: `http://api.github.com/gists/${id}`,method:'patch',data,}).then(res => {
		return res.data
	})}
export function getCommentsFromGistsById(id,){
 return request({url: `http://api.github.com/gists/${id}/comments`,method:'get',}).then(res => {
		return res.data
	})}
export function postCommentsFromGistsById(id,data,){
 return request({url: `http://api.github.com/gists/${id}/comments`,method:'post',data,}).then(res => {
		return res.data
	})}
export function deleteCommentsByCommentIdFromGistsById(id,commentId,){
 return request({url: `http://api.github.com/gists/${id}/comments/${commentId}`,method:'delete',}).then(res => {
		return res.data
	})}
export function getCommentsByCommentIdFromGistsById(id,commentId,){
 return request({url: `http://api.github.com/gists/${id}/comments/${commentId}`,method:'get',}).then(res => {
		return res.data
	})}
export function patchCommentsByCommentIdFromGistsById(id,commentId,data,){
 return request({url: `http://api.github.com/gists/${id}/comments/${commentId}`,method:'patch',data,}).then(res => {
		return res.data
	})}
export function postForksFromGistsById(id,){
 return request({url: `http://api.github.com/gists/${id}/forks`,method:'post',}).then(res => {
		return res.data
	})}
export function deleteStarFromGistsById(id,){
 return request({url: `http://api.github.com/gists/${id}/star`,method:'delete',}).then(res => {
		return res.data
	})}
export function getStarFromGistsById(id,){
 return request({url: `http://api.github.com/gists/${id}/star`,method:'get',}).then(res => {
		return res.data
	})}
export function putStarFromGistsById(id,){
 return request({url: `http://api.github.com/gists/${id}/star`,method:'put',}).then(res => {
		return res.data
	})}