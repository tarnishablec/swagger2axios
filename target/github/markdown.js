import request from '@/plugins/axios'

//host:api.github.com

export function postMarkdown(data,){
 return request({url: `https://api.github.com/markdown`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postRawFromMarkdown(){
 return request({url: `https://api.github.com/markdown/raw`,method:'post',}).then(res => {
		return res.data
	})}
