import request from '@/plugins/axios'

//host:api.github.com

export function getTemplatesFromGitignore(){
 return request({url: `https://api.github.com/gitignore/templates`,method:'get',}).then(res => {
		return res.data
	})}
export function getTemplatesByLanguageFromGitignore(language,){
 return request({url: `https://api.github.com/gitignore/templates/${language}`,method:'get',}).then(res => {
		return res.data
	})}
