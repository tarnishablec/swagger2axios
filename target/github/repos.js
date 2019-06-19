import request from '@/plugins/axios'

//host:api.github.com

export function deleteOwnerByRepoFromReposBy(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getOwnerByRepoFromReposBy(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchOwnerByRepoFromReposBy(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}`, method: 'patch', data,}).then(res => {
		return res.data
	})
}

export function getAssigneesFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/assignees`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getAssigneesByAssigneeFromReposByOwnerByRepo(owner, repo, assignee,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/assignees/${assignee}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getBranchesFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/branches`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getBranchesByBranchFromReposByOwnerByRepo(owner, repo, branch,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/branches/${branch}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getCollaboratorsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/collaborators`, method: 'get',}).then(res => {
		return res.data
	})
}

export function deleteCollaboratorsByUserFromReposByOwnerByRepo(owner, repo, user,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/collaborators/${user}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getCollaboratorsByUserFromReposByOwnerByRepo(owner, repo, user,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/collaborators/${user}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function putCollaboratorsByUserFromReposByOwnerByRepo(owner, repo, user,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/collaborators/${user}`,
		method: 'put',
	}).then(res => {
		return res.data
	})
}

export function getCommentsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/comments`, method: 'get',}).then(res => {
		return res.data
	})
}

export function deleteCommentsByCommentIdFromReposByOwnerByRepo(owner, repo, commentId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/comments/${commentId}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getCommentsByCommentIdFromReposByOwnerByRepo(owner, repo, commentId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/comments/${commentId}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function patchCommentsByCommentIdFromReposByOwnerByRepo(owner, repo, commentId, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/comments/${commentId}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getCommitsFromReposByOwnerByRepo(owner, repo, params,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/commits`, method: 'get', params,}).then(res => {
		return res.data
	})
}

export function getStatusFromReposByOwnerByRepoCommitsByRef(owner, repo, ref,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/commits/${ref}/status`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getCommitsByShaCodeFromReposByOwnerByRepo(owner, repo, shaCode,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/commits/${shaCode}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getCommentsFromReposByOwnerByRepoCommitsByShaCode(owner, repo, shaCode,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/commits/${shaCode}/comments`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postCommentsFromReposByOwnerByRepoCommitsByShaCode(owner, repo, shaCode, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/commits/${shaCode}/comments`,
		method: 'post',
		data,
	}).then(res => {
		return res.data
	})
}

export function getBaseIdByHeadIdFromReposByOwnerByRepoCompareBy(owner, repo, baseId, headId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/compare/${baseId}...${headId}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function deleteContentsByPathFromReposByOwnerByRepo(owner, repo, path, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/contents/${path}`,
		method: 'delete',
		data,
	}).then(res => {
		return res.data
	})
}

export function getContentsByPathFromReposByOwnerByRepo(owner, repo, params,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/contents/${path}`,
		method: 'get',
		params,
	}).then(res => {
		return res.data
	})
}

export function putContentsByPathFromReposByOwnerByRepo(owner, repo, path, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/contents/${path}`,
		method: 'put',
		data,
	}).then(res => {
		return res.data
	})
}

export function getContributorsFromReposByOwnerByRepo(owner, repo, params,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/contributors`,
		method: 'get',
		params,
	}).then(res => {
		return res.data
	})
}

export function getDeploymentsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/deployments`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postDeploymentsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/deployments`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getStatusesFromReposByOwnerByRepoDeploymentsById(owner, repo, id,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/deployments/${id}/statuses`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postStatusesFromReposByOwnerByRepoDeploymentsById(owner, repo, id, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/deployments/${id}/statuses`,
		method: 'post',
		data,
	}).then(res => {
		return res.data
	})
}

export function getDownloadsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/downloads`, method: 'get',}).then(res => {
		return res.data
	})
}

export function deleteDownloadsByDownloadIdFromReposByOwnerByRepo(owner, repo, downloadId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/downloads/${downloadId}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getDownloadsByDownloadIdFromReposByOwnerByRepo(owner, repo, downloadId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/downloads/${downloadId}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getEventsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/events`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getForksFromReposByOwnerByRepo(owner, repo, params,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/forks`, method: 'get', params,}).then(res => {
		return res.data
	})
}

export function postForksFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/forks`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function postGitBlobsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/blobs`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getBlobsByShaCodeFromReposByOwnerByRepoGit(owner, repo, shaCode,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/git/blobs/${shaCode}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postGitCommitsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/commits`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getCommitsByShaCodeFromReposByOwnerByRepoGit(owner, repo, shaCode,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/git/commits/${shaCode}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getGitRefsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/refs`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postGitRefsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/refs`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function deleteRefsByRefFromReposByOwnerByRepoGit(owner, repo, ref,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/refs/${ref}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getRefsByRefFromReposByOwnerByRepoGit(owner, repo, ref,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/refs/${ref}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchRefsByRefFromReposByOwnerByRepoGit(owner, repo, ref, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/git/refs/${ref}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function postGitTagsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/tags`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getTagsByShaCodeFromReposByOwnerByRepoGit(owner, repo, shaCode,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/git/tags/${shaCode}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postGitTreesFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/git/trees`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getTreesByShaCodeFromReposByOwnerByRepoGit(owner, repo, shaCode, params,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/git/trees/${shaCode}`,
		method: 'get',
		params,
	}).then(res => {
		return res.data
	})
}

export function getHooksFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/hooks`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postHooksFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/hooks`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function deleteHooksByHookIdFromReposByOwnerByRepo(owner, repo, hookId,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/hooks/${hookId}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getHooksByHookIdFromReposByOwnerByRepo(owner, repo, hookId,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/hooks/${hookId}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchHooksByHookIdFromReposByOwnerByRepo(owner, repo, hookId, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/hooks/${hookId}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function postTestsFromReposByOwnerByRepoHooksByHookId(owner, repo, hookId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/hooks/${hookId}/tests`,
		method: 'post',
	}).then(res => {
		return res.data
	})
}

export function getIssuesFromReposByOwnerByRepo(owner, repo, params,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/issues`, method: 'get', params,}).then(res => {
		return res.data
	})
}

export function postIssuesFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/issues`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getIssuesCommentsFromReposByOwnerByRepo(owner, repo, params,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/comments`,
		method: 'get',
		params,
	}).then(res => {
		return res.data
	})
}

export function deleteCommentsByCommentIdFromReposByOwnerByRepoIssues(owner, repo, commentId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/comments/${commentId}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getCommentsByCommentIdFromReposByOwnerByRepoIssues(owner, repo, commentId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/comments/${commentId}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function patchCommentsByCommentIdFromReposByOwnerByRepoIssues(owner, repo, commentId, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/comments/${commentId}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getIssuesEventsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/issues/events`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getEventsByEventIdFromReposByOwnerByRepoIssues(owner, repo, eventId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/events/${eventId}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getIssuesByNumberFromReposByOwnerByRepo(owner, repo, number,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchIssuesByNumberFromReposByOwnerByRepo(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getCommentsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/comments`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postCommentsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/comments`,
		method: 'post',
		data,
	}).then(res => {
		return res.data
	})
}

export function getEventsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/events`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function deleteLabelsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/labels`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getLabelsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/labels`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postLabelsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/labels`,
		method: 'post',
		data,
	}).then(res => {
		return res.data
	})
}

export function putLabelsFromReposByOwnerByRepoIssuesByNumber(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/labels`,
		method: 'put',
		data,
	}).then(res => {
		return res.data
	})
}

export function deleteLabelsByNameFromReposByOwnerByRepoIssuesByNumber(owner, repo, number, name,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/issues/${number}/labels/${name}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getKeysFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/keys`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postKeysFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/keys`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function deleteKeysByKeyIdFromReposByOwnerByRepo(owner, repo, keyId,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/keys/${keyId}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getKeysByKeyIdFromReposByOwnerByRepo(owner, repo, keyId,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/keys/${keyId}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getLabelsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/labels`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postLabelsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/labels`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function deleteLabelsByNameFromReposByOwnerByRepo(owner, repo, name,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/labels/${name}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getLabelsByNameFromReposByOwnerByRepo(owner, repo, name,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/labels/${name}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchLabelsByNameFromReposByOwnerByRepo(owner, repo, name, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/labels/${name}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getLanguagesFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/languages`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postMergesFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/merges`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getMilestonesFromReposByOwnerByRepo(owner, repo, params,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/milestones`, method: 'get', params,}).then(res => {
		return res.data
	})
}

export function postMilestonesFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/milestones`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function deleteMilestonesByNumberFromReposByOwnerByRepo(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/milestones/${number}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getMilestonesByNumberFromReposByOwnerByRepo(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/milestones/${number}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function patchMilestonesByNumberFromReposByOwnerByRepo(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/milestones/${number}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getLabelsFromReposByOwnerByRepoMilestonesByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/milestones/${number}/labels`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getNotificationsFromReposByOwnerByRepo(owner, repo, params,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/notifications`,
		method: 'get',
		params,
	}).then(res => {
		return res.data
	})
}

export function putNotificationsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/notifications`,
		method: 'put',
		data,
	}).then(res => {
		return res.data
	})
}

export function getPullsFromReposByOwnerByRepo(owner, repo, params,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/pulls`, method: 'get', params,}).then(res => {
		return res.data
	})
}

export function postPullsFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/pulls`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function getPullsCommentsFromReposByOwnerByRepo(owner, repo, params,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/comments`,
		method: 'get',
		params,
	}).then(res => {
		return res.data
	})
}

export function deleteCommentsByCommentIdFromReposByOwnerByRepoPulls(owner, repo, commentId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/comments/${commentId}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getCommentsByCommentIdFromReposByOwnerByRepoPulls(owner, repo, commentId,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/comments/${commentId}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function patchCommentsByCommentIdFromReposByOwnerByRepoPulls(owner, repo, commentId, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/comments/${commentId}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getPullsByNumberFromReposByOwnerByRepo(owner, repo, number,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchPullsByNumberFromReposByOwnerByRepo(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getCommentsFromReposByOwnerByRepoPullsByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}/comments`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function postCommentsFromReposByOwnerByRepoPullsByNumber(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}/comments`,
		method: 'post',
		data,
	}).then(res => {
		return res.data
	})
}

export function getCommitsFromReposByOwnerByRepoPullsByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}/commits`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getFilesFromReposByOwnerByRepoPullsByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}/files`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getMergeFromReposByOwnerByRepoPullsByNumber(owner, repo, number,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}/merge`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function putMergeFromReposByOwnerByRepoPullsByNumber(owner, repo, number, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/pulls/${number}/merge`,
		method: 'put',
		data,
	}).then(res => {
		return res.data
	})
}

export function getReadmeFromReposByOwnerByRepo(owner, repo, params,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/readme`, method: 'get', params,}).then(res => {
		return res.data
	})
}

export function getReleasesFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/releases`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postReleasesFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/releases`, method: 'post', data,}).then(res => {
		return res.data
	})
}

export function deleteAssetsByIdFromReposByOwnerByRepoReleases(owner, repo, id,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/releases/assets/${id}`,
		method: 'delete',
	}).then(res => {
		return res.data
	})
}

export function getAssetsByIdFromReposByOwnerByRepoReleases(owner, repo, id,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/releases/assets/${id}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function patchAssetsByIdFromReposByOwnerByRepoReleases(owner, repo, id, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/releases/assets/${id}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function deleteReleasesByIdFromReposByOwnerByRepo(owner, repo, id,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/releases/${id}`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getReleasesByIdFromReposByOwnerByRepo(owner, repo, id,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/releases/${id}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function patchReleasesByIdFromReposByOwnerByRepo(owner, repo, id, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/releases/${id}`,
		method: 'patch',
		data,
	}).then(res => {
		return res.data
	})
}

export function getAssetsFromReposByOwnerByRepoReleasesById(owner, repo, id,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/releases/${id}/assets`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getStargazersFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/stargazers`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getStatsCodefrequencyFromReposByOwnerByRepo(owner, repo,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/stats/code_frequency`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getStatsCommitactivityFromReposByOwnerByRepo(owner, repo,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/stats/commit_activity`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getStatsContributorsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/stats/contributors`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getStatsParticipationFromReposByOwnerByRepo(owner, repo,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/stats/participation`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}

export function getStatsPunchcardFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/stats/punch_card`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getStatusesByRefFromReposByOwnerByRepo(owner, repo, ref,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/statuses/${ref}`, method: 'get',}).then(res => {
		return res.data
	})
}

export function postStatusesByRefFromReposByOwnerByRepo(owner, repo, ref, data,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/statuses/${ref}`,
		method: 'post',
		data,
	}).then(res => {
		return res.data
	})
}

export function getSubscribersFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/subscribers`, method: 'get',}).then(res => {
		return res.data
	})
}

export function deleteSubscriptionFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/subscription`, method: 'delete',}).then(res => {
		return res.data
	})
}

export function getSubscriptionFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/subscription`, method: 'get',}).then(res => {
		return res.data
	})
}

export function putSubscriptionFromReposByOwnerByRepo(owner, repo, data,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/subscription`, method: 'put', data,}).then(res => {
		return res.data
	})
}

export function getTagsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/tags`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getTeamsFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/teams`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getWatchersFromReposByOwnerByRepo(owner, repo,) {
	return request({url: `http://api.github.com/repos/${owner}/${repo}/watchers`, method: 'get',}).then(res => {
		return res.data
	})
}

export function getArchiveformatByPathFromReposByOwnerByRepoBy(owner, repo, archive_format, path,) {
	return request({
		url: `http://api.github.com/repos/${owner}/${repo}/${archive_format}/${path}`,
		method: 'get',
	}).then(res => {
		return res.data
	})
}
