import request from '@/plugins/axios'
export function postRule(data){return request({url: '/api1/rule',method:'post',data,}).then(res => {
		return res.data.data
	})}export function putRule(data){return request({url: '/api1/rule',method:'put',data,}).then(res => {
		return res.data.data
	})}export function putRuleEnabledByRuleIdByEnabledId(ruleId,enabledId,){return request({url: `/api1/rule/enabled/${ruleId}/${enabledId}`,method:'put',}).then(res => {
		return res.data.data
	})}export function getRuleRuleIdByRuleId(ruleId,){return request({url: `/api1/rule/ruleId/${ruleId}`,method:'get',}).then(res => {
		return res.data.data
	})}export function getRuleSourceIdBySourceId(sourceId,){return request({url: `/api1/rule/sourceId/${sourceId}`,method:'get',}).then(res => {
		return res.data.data
	})}export function deleteRuleByRuleId(ruleId,){return request({url: `/api1/rule/${ruleId}`,method:'delete',}).then(res => {
		return res.data.data
	})}