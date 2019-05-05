import request from '@/plugins/axios'
export function getCommonCheckFieldList(){return request({url: '/api1/common/checkFieldList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonOperatorList(){return request({url: '/api1/common/operatorList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonPriorityLevelList(){return request({url: '/api1/common/priorityLevelList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonPushTypeList(){return request({url: '/api1/common/pushTypeList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonReceiveTypeList(){return request({url: '/api1/common/receiveTypeList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonRuleTypeList(){return request({url: '/api1/common/ruleTypeList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonSendTypeList(){return request({url: '/api1/common/sendTypeList ',method:'get',}).then(res => {
		return res.data.data
	})}export function getCommonTimeUnitList(){return request({url: '/api1/common/timeUnitList ',method:'get',}).then(res => {
		return res.data.data
	})}