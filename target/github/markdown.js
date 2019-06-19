import request from '@/plugins/axios'

//host:api.github.com

export function postMarkdownFrom(data,){
 return request({url: `http://api.github.com/markdown`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postRawFromMarkdown(){
 return request({url: `http://api.github.com/markdown/raw`,method:'post',}).then(res => {
		return res.data
	})}
