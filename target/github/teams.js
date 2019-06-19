import request from '@/plugins/axios'

//host:api.github.com

export function deleteTeamsByTeamId(teamId,) {
	return request({url: `http://api.github.com/teams/${teamId}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getTeamsByTeamId(teamId,) {
	return request({url: `http://api.github.com/teams/${teamId}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchTeamsByTeamId(teamId, data,) {
	return request({url: `http://api.github.com/teams/${teamId}`, method: 'patch', data,}).then(res => {
		return res.data
	})
}

export function getMembersFromTeamsByTeamId(teamId,) {
	return request({url: `http://api.github.com/teams/${teamId}/members`, method: 'get',}).then(res => {
		return res.data
	})
}

export function deleteMembersByUsernameFromTeamsByTeamId(teamId, username,) {
	return request({url: `http://api.github.com/teams/${teamId}/members/${username}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getMembersByUsernameFromTeamsByTeamId(teamId, username,) {
	return request({url: `http://api.github.com/teams/${teamId}/members/${username}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function putMembersByUsernameFromTeamsByTeamId(teamId, username,) {
	return request({url: `http://api.github.com/teams/${teamId}/members/${username}`, method: 'put',}).then(res => {
		return res.data
	})
}

export function deleteMembershipsByUsernameFromTeamsByTeamId(teamId, username,) {
	return request({
		url: `http://api.github.com/teams/${teamId}/memberships/${username}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getMembershipsByUsernameFromTeamsByTeamId(teamId, username,) {
	return request({url: `http://api.github.com/teams/${teamId}/memberships/${username}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function putMembershipsByUsernameFromTeamsByTeamId(teamId, username,) {
	return request({url: `http://api.github.com/teams/${teamId}/memberships/${username}`, method: 'put',}).then(res => {
		return res.data
	})
}

export function getReposFromTeamsByTeamId(teamId,) {
	return request({url: `http://api.github.com/teams/${teamId}/repos`, method: 'get',}).then(res => {
		return res.data
	})
}

export function deleteOwnerByRepoFromTeamsByTeamIdReposBy(teamId, owner, repo,) {
	return request({url: `http://api.github.com/teams/${teamId}/repos/${owner}/${repo}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getOwnerByRepoFromTeamsByTeamIdReposBy(teamId, owner, repo,) {
	return request({url: `http://api.github.com/teams/${teamId}/repos/${owner}/${repo}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function putOwnerByRepoFromTeamsByTeamIdReposBy(teamId, owner, repo,) {
	return request({url: `http://api.github.com/teams/${teamId}/repos/${owner}/${repo}`, method: 'put',}).then(res => {
		return res.data
	})
}
