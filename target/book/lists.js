import request from '@/plugins/axios'

//host:api.nytimes.com/svc/books/v3

export function getListsByFormat(format,params,){
 return request({url: `http://api1/lists.${format}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getHistoryFromListsBestSellers(params,){
 return request({url: `http://api1/lists/best-sellers/history.json`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getNamesByFormatFromLists(format,params,){
 return request({url: `http://api1/lists/names.${format}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getOverviewByFormatFromLists(format,params,){
 return request({url: `http://api1/lists/overview.${format}`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getListsByDateByList(date,list,params,){
 return request({url: `http://api1/lists/${date}/${list}.json`,method:'get',params,}).then(res => {
		return res.data
	})}
